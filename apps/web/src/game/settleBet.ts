import { toast } from 'sonner';
import type { GameId } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useLedgerStore } from '@/stores/ledgerStore';
import { playSfx } from '@/audio/sfx';

export interface SettleBetInput {
  game: GameId;
  amount: number;
  nonce: number;
  detail: string;
  isWin: boolean;
  /** Effective multiplier for wins (0 for losses). */
  multiplier: number;
  /** Override ledger id prefix (defaults to game id). */
  idPrefix?: string;
  /** Skip wallet credit (versus mode — server already settled). */
  skipWallet?: boolean;
  /** Skip local ledger (versus mode — server event feed is canonical). */
  skipLedger?: boolean;
}

const fmt = (n: number) =>
  n.toLocaleString(undefined, { maximumFractionDigits: 2 });

/**
 * Solo-mode settlement: credit payout, record ledger, toast, sfx.
 * Versus callers pass skipWallet/skipLedger — server already moved money.
 */
export function settleBet({
  game,
  amount,
  nonce,
  detail,
  isWin,
  multiplier,
  idPrefix,
  skipWallet = false,
  skipLedger = false,
}: SettleBetInput): number {
  const payout = isWin ? Math.floor(amount * multiplier * 100) / 100 : 0;
  if (!skipWallet && payout > 0) {
    useWalletStore.getState().settle(payout);
  }
  if (!skipLedger) {
    useLedgerStore.getState().record({
      id: `${idPrefix ?? game}-${nonce}-${Date.now()}`,
      game,
      bet: amount,
      detail,
      multiplier: isWin ? multiplier : 0,
      payout,
      isWin,
      timestamp: Date.now(),
      nonce,
    });
  }
  if (isWin) {
    playSfx('win');
    const net = payout - amount;
    toast.success(`${detail} — won ${fmt(net)} GG!`);
  } else {
    playSfx('lose');
    toast.error(`${detail} — lost ${fmt(amount)} GG.`);
  }
  return payout;
}
