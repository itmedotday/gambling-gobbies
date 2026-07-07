import { useCallback, useRef, useState } from 'react';
import { toast } from 'sonner';
import { generateFloats } from '@gobbies/engine';
import { webHasher } from '@gobbies/engine/web';
import type { GameId } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useFairnessStore } from '@/stores/fairnessStore';
import { useLedgerStore } from '@/stores/ledgerStore';
import { validateBet } from '@/components/game/BetControls';
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

  /** Deterministic random source handed to the animation component. */
  const rng = useCallback(() => floatsRef.current.shift() ?? Math.random(), []);

  /** Debit the bet and draw the float queue. Returns null when the bet is invalid. */
  const beginBet = useCallback(async (): Promise<number[] | null> => {
    if (pendingRef.current) return null;
    const wallet = useWalletStore.getState();
    const error = validateBet(amount, wallet.balance);
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

  return { amount, setAmount, busy, request, rng, placeBet, beginBet, settleOutcome };
}
