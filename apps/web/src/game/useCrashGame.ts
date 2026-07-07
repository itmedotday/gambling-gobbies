import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { resolveCrashPoint } from '@gobbies/engine';
import { generateFloats } from '@gobbies/engine';
import { webHasher } from '@gobbies/engine/web';
import { useWalletStore } from '@/stores/walletStore';
import { useFairnessStore } from '@/stores/fairnessStore';
import { useLedgerStore } from '@/stores/ledgerStore';
import { validateBet } from '@/components/game/BetControls';
import { EventBus } from '@/phaser/events';

export type CrashPhase = 'idle' | 'running' | 'cashed' | 'busted';

/** Multiplier doubles every 5 seconds: m(t) = 2^(t/5000ms). */
function multiplierAt(elapsedMs: number): number {
  return Math.pow(2, elapsedMs / 5000);
}

export interface CrashRoundSummary {
  crashPoint: number;
  cashedAt: number | null;
}

/**
 * Crash game state machine. The outcome (crash point) is fixed provably-fair
 * at bet time; the visible multiplier is pure presentation. React owns all
 * money movement; Phaser only receives phase/tick events.
 */
export function useCrashGame() {
  const [amount, setAmount] = useState(10);
  const [phase, setPhase] = useState<CrashPhase>('idle');
  const [multiplier, setMultiplier] = useState(1);
  const [autoCashout, setAutoCashout] = useState<number | null>(null);
  const [history, setHistory] = useState<CrashRoundSummary[]>([]);

  const rafRef = useRef<number | null>(null);
  const roundRef = useRef<{
    amount: number;
    nonce: number;
    crashPoint: number;
    startedAt: number;
    settled: boolean;
  } | null>(null);

  const stopLoop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const settle = useCallback(
    (kind: 'cashed' | 'busted', atMultiplier: number) => {
      const round = roundRef.current;
      if (!round || round.settled) return;
      round.settled = true;
      stopLoop();

      const isWin = kind === 'cashed';
      const effective = isWin ? atMultiplier : 0;
      const payout = isWin ? Math.floor(round.amount * atMultiplier * 100) / 100 : 0;
      if (payout > 0) useWalletStore.getState().settle(payout);
      useLedgerStore.getState().record({
        id: `crash-${round.nonce}-${Date.now()}`,
        game: 'crash',
        bet: round.amount,
        detail: isWin
          ? `Cashed out at ${atMultiplier.toFixed(2)}x (bust ${round.crashPoint.toFixed(2)}x)`
          : `Busted at ${round.crashPoint.toFixed(2)}x`,
        multiplier: effective,
        payout,
        isWin,
        timestamp: Date.now(),
        nonce: round.nonce,
      });
      setHistory((h) =>
        [{ crashPoint: round.crashPoint, cashedAt: isWin ? atMultiplier : null }, ...h].slice(0, 12),
      );
      setPhase(kind);
      EventBus.emit('crash-phase', { phase: kind });
      if (isWin) {
        toast.success(`Cashed out at ${atMultiplier.toFixed(2)}x — won ${(payout - round.amount).toLocaleString()} GG!`);
      } else {
        toast.error(`Busted at ${round.crashPoint.toFixed(2)}x — lost ${round.amount.toLocaleString()} GG.`);
      }
    },
    [stopLoop],
  );

  const cashOut = useCallback(() => {
    const round = roundRef.current;
    if (!round || round.settled || phase !== 'running') return;
    const elapsed = performance.now() - round.startedAt;
    const now = Math.min(multiplierAt(elapsed), round.crashPoint);
    // Reaching the crash point exactly still counts as a bust.
    if (now >= round.crashPoint) return;
    setMultiplier(now);
    settle('cashed', now);
  }, [phase, settle]);

  const autoCashoutRef = useRef(autoCashout);
  useEffect(() => {
    autoCashoutRef.current = autoCashout;
  }, [autoCashout]);

  const start = useCallback(async () => {
    if (roundRef.current && !roundRef.current.settled) return;
    const wallet = useWalletStore.getState();
    const error = validateBet(amount, wallet.balance);
    if (error) {
      toast.error(error);
      return;
    }
    wallet.settle(-amount);
    const seed = useFairnessStore.getState().consumeNonce();
    const floats = await generateFloats(webHasher, seed, 1);
    const { crashPoint } = resolveCrashPoint(floats);

    roundRef.current = {
      amount,
      nonce: seed.nonce,
      crashPoint,
      startedAt: performance.now(),
      settled: false,
    };
    setMultiplier(1);
    setPhase('running');
    EventBus.emit('crash-phase', { phase: 'running' });

    const tick = () => {
      const round = roundRef.current;
      if (!round || round.settled) return;
      const elapsed = performance.now() - round.startedAt;
      const now = multiplierAt(elapsed);

      const auto = autoCashoutRef.current;
      if (auto !== null && auto > 1 && now >= auto && auto < round.crashPoint) {
        setMultiplier(auto);
        EventBus.emit('crash-tick', { multiplier: auto });
        settle('cashed', auto);
        return;
      }
      if (now >= round.crashPoint) {
        setMultiplier(round.crashPoint);
        EventBus.emit('crash-tick', { multiplier: round.crashPoint });
        settle('busted', round.crashPoint);
        return;
      }
      setMultiplier(now);
      EventBus.emit('crash-tick', { multiplier: now });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [amount, settle]);

  useEffect(() => stopLoop, [stopLoop]);

  return {
    amount,
    setAmount,
    phase,
    multiplier,
    autoCashout,
    setAutoCashout,
    history,
    start,
    cashOut,
  };
}
