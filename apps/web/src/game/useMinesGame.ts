import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import {
  MINES_GRID_SIZE,
  minesMultiplier,
  resolveMinePositions,
  generateFloats,
} from '@gobbies/engine';
import { webHasher } from '@gobbies/engine/web';
import { useWalletStore } from '@/stores/walletStore';
import { useFairnessStore } from '@/stores/fairnessStore';
import { useLedgerStore } from '@/stores/ledgerStore';
import { validateBet } from '@/components/game/BetControls';
import { EventBus } from '@/phaser/events';

export type MinesPhase = 'idle' | 'playing' | 'cashed' | 'busted';

/**
 * Goblin Mines state machine. Mine positions are fixed provably-fair at bet
 * time; reveals are pure lookups. Money moves only via walletStore.settle.
 */
export function useMinesGame() {
  const [amount, setAmount] = useState(10);
  const [mineCount, setMineCount] = useState(3);
  const [phase, setPhase] = useState<MinesPhase>('idle');
  const [safePicks, setSafePicks] = useState(0);

  const roundRef = useRef<{
    amount: number;
    nonce: number;
    mines: Set<number>;
    settled: boolean;
  } | null>(null);

  const currentMultiplier = safePicks > 0 ? minesMultiplier({ mineCount }, safePicks) : 1;
  const nextMultiplier =
    safePicks < MINES_GRID_SIZE - mineCount ? minesMultiplier({ mineCount }, safePicks + 1) : null;

  const emitPhase = useCallback((next: MinesPhase) => {
    setPhase(next);
    EventBus.emit('mines-phase', { phase: next });
  }, []);

  const settle = useCallback(
    (kind: 'cashed' | 'busted', picks: number) => {
      const round = roundRef.current;
      if (!round || round.settled) return;
      round.settled = true;
      const isWin = kind === 'cashed';
      const effective = isWin ? minesMultiplier({ mineCount }, picks) : 0;
      const payout = isWin ? Math.floor(round.amount * effective * 100) / 100 : 0;
      if (payout > 0) useWalletStore.getState().settle(payout);
      useLedgerStore.getState().record({
        id: `mines-${round.nonce}-${Date.now()}`,
        game: 'mines',
        bet: round.amount,
        detail: isWin
          ? `Looted ${picks} chest${picks === 1 ? '' : 's'} (${mineCount} bombs)`
          : `Hit a bomb after ${picks} chest${picks === 1 ? '' : 's'}`,
        multiplier: effective,
        payout,
        isWin,
        timestamp: Date.now(),
        nonce: round.nonce,
      });
      EventBus.emit('mines-reveal-all', { mines: [...round.mines] });
      emitPhase(kind);
      if (isWin) {
        toast.success(
          `Cashed out at ${effective.toFixed(2)}x — won ${(payout - round.amount).toLocaleString()} GG!`,
        );
      } else {
        toast.error(`Boom! Lost ${round.amount.toLocaleString()} GG.`);
      }
    },
    [emitPhase, mineCount],
  );

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
    const floats = await generateFloats(webHasher, seed, mineCount);
    const mines = new Set(resolveMinePositions({ mineCount }, floats));
    roundRef.current = { amount, nonce: seed.nonce, mines, settled: false };
    setSafePicks(0);
    EventBus.emit('mines-reset', {});
    emitPhase('playing');
  }, [amount, emitPhase, mineCount]);

  const reveal = useCallback(
    (index: number) => {
      const round = roundRef.current;
      if (!round || round.settled || phase !== 'playing') return;
      if (round.mines.has(index)) {
        EventBus.emit('mines-reveal', { index, kind: 'mine' });
        settle('busted', safePicks);
        return;
      }
      EventBus.emit('mines-reveal', { index, kind: 'safe' });
      setSafePicks((p) => p + 1);
    },
    [phase, safePicks, settle],
  );

  const cashOut = useCallback(() => {
    const round = roundRef.current;
    if (!round || round.settled || phase !== 'playing' || safePicks === 0) return;
    settle('cashed', safePicks);
  }, [phase, safePicks, settle]);

  useEffect(() => {
    return EventBus.on('mines-pick', ({ index }) => reveal(index));
  }, [reveal]);

  return {
    amount,
    setAmount,
    mineCount,
    setMineCount,
    phase,
    safePicks,
    currentMultiplier,
    nextMultiplier,
    start,
    reveal,
    cashOut,
  };
}
