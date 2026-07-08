import { useCallback, useRef, useState } from 'react';
import { toast } from 'sonner';
import { generateFloats } from '@gobbies/engine';
import { webHasher } from '@gobbies/engine/web';
import type { GameId } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useFairnessStore } from '@/stores/fairnessStore';
import { useLedgerStore } from '@/stores/ledgerStore';
import { useSessionStore } from '@/stores/sessionStore';
import { useVersusView } from '@/stores/versusStore';
import { validateBet } from '@/game/validateBet';
import { placeVersusBet } from '@/game/versusBet';
import { playSfx } from '@/audio/sfx';

export interface SettleOptions {
  detail: string;
  isWin: boolean;
  /** Effective multiplier for this outcome (0 for losses). */
  multiplier: number;
}

/**
 * Bet lifecycle for animation-driven games: debit up front, resolve from
 * provably-fair floats, settle when the animation finishes. Money only moves
 * through walletStore.settle (architecture rule 2).
 *
 * Two usage modes:
 * - Library consoles: `placeBet()` debits and bumps `request`; the console
 *   draws outcome floats through the injected `rng` and reports back via its
 *   onComplete callback, where the page calls `settleOutcome`.
 * - Custom visuals: `beginBet()` debits and returns the float queue; the page
 *   resolves the outcome itself, animates, then calls `settleOutcome`.
 */
export function useConsoleBet(game: GameId, floatCount = 8) {
  const [amount, setAmount] = useState(10);
  const [busy, setBusy] = useState(false);
  const [request, setRequest] = useState(0);
  const floatsRef = useRef<number[]>([]);
  const pendingRef = useRef<{ amount: number; nonce: number } | null>(null);
  const pendingVersusRef = useRef<Awaited<ReturnType<typeof placeVersusBet>> | null>(null);

  const walletBalance = useWalletStore((s) => s.balance);
  const versusView = useVersusView();
  const playerId = useSessionStore((s) => s.player?.id ?? null);
  const versusBalance =
    versusView?.players.find((p) => (playerId ? p.playerId === playerId : false))?.balance ?? null;
  const versusBetting = (versusView?.phase ?? null) === 'live';

  /** Deterministic random source handed to the animation component. */
  const rng = useCallback(() => floatsRef.current.shift() ?? Math.random(), []);

  /** Debit the bet and draw the float queue. Returns null when the bet is invalid. */
  const beginBet = useCallback(async (): Promise<number[] | null> => {
    if (pendingRef.current) return null;
    const wallet = useWalletStore.getState();
    const error = validateBet(amount, wallet.balance, true);
    if (error) {
      toast.error(error);
      return null;
    }
    setBusy(true);
    wallet.settle(-amount);
    playSfx('bet');
    const seed = useFairnessStore.getState().consumeNonce();
    const floats = await generateFloats(webHasher, seed, floatCount);
    pendingRef.current = { amount, nonce: seed.nonce };
    return floats;
  }, [amount, floatCount]);

  /**
   * Versus bet flow: request outcome from server, then animate the returned floats.
   * Server is the source of truth for balance + payout; we only mirror it into the ledger UI.
   */
  const beginVersusBet = useCallback(
    async (params: Record<string, unknown>): Promise<number[] | null> => {
      if (!versusBetting) return null;
      if (busy) return null;
      const balance = versusBalance ?? 0;
      const error = validateBet(amount, balance);
      if (error) {
        toast.error(error);
        return null;
      }
      setBusy(true);
      playSfx('bet');
      const result = await placeVersusBet({ game, amount, params, balance });
      pendingVersusRef.current = result;
      if (!result.ok) {
        toast.error(result.error);
        setBusy(false);
        return null;
      }
      return result.bet.floats;
    },
    [amount, busy, game, versusBalance, versusBetting],
  );

  /** Arm the animation components with the float queue and bump request. */
  const arm = useCallback((floats: readonly number[]) => {
    floatsRef.current = [...floats];
    setRequest((r) => r + 1);
  }, []);

  /** Console-driven flow: debit, queue floats for `rng`, trigger the animation. */
  const placeBet = useCallback(async () => {
    const floats = await beginBet();
    if (!floats) return;
    floatsRef.current = floats;
    setRequest((r) => r + 1);
  }, [beginBet]);

  const settleOutcome = useCallback(
    ({ detail, isWin, multiplier }: SettleOptions) => {
      const pending = pendingRef.current;
      if (!pending) return;
      pendingRef.current = null;
      const payout = isWin ? Math.floor(pending.amount * multiplier * 100) / 100 : 0;
      if (payout > 0) {
        useWalletStore.getState().settle(payout);
      }
      useLedgerStore.getState().record({
        id: `${game}-${pending.nonce}-${Date.now()}`,
        game,
        bet: pending.amount,
        detail,
        multiplier: isWin ? multiplier : 0,
        payout,
        isWin,
        timestamp: Date.now(),
        nonce: pending.nonce,
      });
      if (isWin) {
        playSfx('win');
        toast.success(`${detail} — won ${(payout - pending.amount).toLocaleString()} GG!`);
      } else {
        playSfx('lose');
        toast.error(`${detail} — lost ${pending.amount.toLocaleString()} GG.`);
      }
      setBusy(false);
    },
    [game],
  );

  const settleVersusOutcome = useCallback(() => {
    const pending = pendingVersusRef.current;
    pendingVersusRef.current = null;
    if (!pending || !pending.ok) return;

    const betResult = pending.bet;
    useLedgerStore.getState().record({
      id: `${game}-${betResult.nonce}-${Date.now()}`,
      game,
      bet: betResult.amount,
      detail: betResult.detail,
      multiplier: betResult.isWin ? betResult.multiplier : 0,
      payout: betResult.payout,
      isWin: betResult.isWin,
      timestamp: Date.now(),
      nonce: betResult.nonce,
    });

    if (betResult.isWin) {
      playSfx('win');
      toast.success(`${betResult.detail} — won ${(betResult.payout - betResult.amount).toLocaleString()} GG!`);
    } else {
      playSfx('lose');
      toast.error(`${betResult.detail} — lost ${betResult.amount.toLocaleString()} GG.`);
    }
    setBusy(false);
  }, [game]);

  return {
    amount,
    setAmount,
    busy,
    request,
    rng,
    placeBet,
    beginBet,
    settleOutcome,
    versusBetting,
    beginVersusBet,
    arm,
    settleVersusOutcome,
    balance: versusBalance ?? walletBalance,
  };
}
