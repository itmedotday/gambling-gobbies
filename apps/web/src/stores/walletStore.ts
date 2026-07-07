import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  STARTING_BALANCE,
  DAILY_BONUS_AMOUNT,
  DAILY_BONUS_COOLDOWN_MS,
  BAILOUT_AMOUNT,
  BAILOUT_THRESHOLD,
  BAILOUT_COOLDOWN_MS,
} from '@gobbies/shared';

interface WalletState {
  balance: number;
  lastBonusAt: number | null;
  lastBailoutAt: number | null;
  /**
   * The single place solo-mode money moves (architecture rule 2).
   * Positive delta credits, negative debits.
   */
  settle: (delta: number) => void;
  canClaimDailyBonus: () => boolean;
  claimDailyBonus: () => boolean;
  canClaimBailout: () => boolean;
  claimBailout: () => boolean;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      balance: STARTING_BALANCE,
      lastBonusAt: null,
      lastBailoutAt: null,
      settle: (delta) =>
        set((s) => ({ balance: Math.max(0, Math.round((s.balance + delta) * 100) / 100) })),
      canClaimDailyBonus: () => {
        const { lastBonusAt } = get();
        return lastBonusAt === null || Date.now() - lastBonusAt >= DAILY_BONUS_COOLDOWN_MS;
      },
      claimDailyBonus: () => {
        if (!get().canClaimDailyBonus()) return false;
        set({ lastBonusAt: Date.now() });
        get().settle(DAILY_BONUS_AMOUNT);
        return true;
      },
      canClaimBailout: () => {
        const { balance, lastBailoutAt } = get();
        if (balance >= BAILOUT_THRESHOLD) return false;
        return lastBailoutAt === null || Date.now() - lastBailoutAt >= BAILOUT_COOLDOWN_MS;
      },
      claimBailout: () => {
        if (!get().canClaimBailout()) return false;
        set({ lastBailoutAt: Date.now() });
        get().settle(BAILOUT_AMOUNT);
        return true;
      },
    }),
    { name: 'gobbies-wallet' },
  ),
);
