import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STARTING_BALANCE } from '@gobbies/shared';

interface WalletState {
  balance: number;
  /**
   * The single place solo-mode money moves (architecture rule 2).
   * Positive delta credits, negative debits. Full settle flow lands in M2.
   */
  settle: (delta: number) => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      balance: STARTING_BALANCE,
      settle: (delta) => set((s) => ({ balance: Math.max(0, Math.round(s.balance + delta)) })),
    }),
    { name: 'gobbies-wallet' },
  ),
);
