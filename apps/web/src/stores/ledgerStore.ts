import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameId } from '@gobbies/shared';

export interface LedgerEntry {
  id: string;
  game: GameId;
  bet: number;
  /** Human-readable outcome summary, e.g. "Rolled 63.41" or "Landed heads". */
  detail: string;
  multiplier: number;
  payout: number;
  isWin: boolean;
  timestamp: number;
  nonce: number;
}

const MAX_ENTRIES = 50;

interface LedgerState {
  entries: LedgerEntry[];
  record: (entry: LedgerEntry) => void;
}

export const useLedgerStore = create<LedgerState>()(
  persist(
    (set) => ({
      entries: [],
      record: (entry) => set((s) => ({ entries: [entry, ...s.entries].slice(0, MAX_ENTRIES) })),
    }),
    { name: 'gobbies-ledger' },
  ),
);
