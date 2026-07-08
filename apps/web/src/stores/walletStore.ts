import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  STARTING_BALANCE,
  DAILY_BONUS_AMOUNT,
  DAILY_BONUS_COOLDOWN_MS,
  BAILOUT_AMOUNT,
  BAILOUT_THRESHOLD,
  BAILOUT_COOLDOWN_MS,
  DEBT_LOAN_AMOUNT,
  MAX_DEBT,
  debtLoanCooldownRemaining,
  isInDebt,
} from '@gobbies/shared';

interface WalletState {
  balance: number;
  lastBonusAt: number | null;
  lastBailoutAt: number | null;
  lastLoanAt: number | null;
  /**
   * The single place solo-mode money moves (architecture rule 2).
   * Positive delta credits, negative debits.
   */
  settle: (delta: number) => void;
  canClaimDailyBonus: () => boolean;
  claimDailyBonus: () => boolean;
  canClaimBailout: () => boolean;
  claimBailout: () => boolean;
  canTakeDebtLoan: () => boolean;
  debtLoanCooldownMs: () => number;
  takeDebtLoan: () => boolean;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      balance: STARTING_BALANCE,
      lastBonusAt: null,
      lastBailoutAt: null,
      lastLoanAt: null,
      settle: (delta) =>
        set((s) => ({
          balance: Math.max(
            -MAX_DEBT,
            Math.round((s.balance + delta) * 100) / 100,
          ),
        })),
      canClaimDailyBonus: () => {
        const { lastBonusAt, balance } = get();
        if (isInDebt(balance)) return false;
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
        if (isInDebt(balance)) return false;
        if (balance >= BAILOUT_THRESHOLD) return false;
        return lastBailoutAt === null || Date.now() - lastBailoutAt >= BAILOUT_COOLDOWN_MS;
      },
      claimBailout: () => {
        if (!get().canClaimBailout()) return false;
        set({ lastBailoutAt: Date.now() });
        get().settle(BAILOUT_AMOUNT);
        return true;
      },
      canTakeDebtLoan: () => {
        const { balance, lastLoanAt } = get();
        if (!isInDebt(balance)) return false;
        return debtLoanCooldownRemaining(lastLoanAt) === 0;
      },
      debtLoanCooldownMs: () => debtLoanCooldownRemaining(get().lastLoanAt),
      takeDebtLoan: () => {
        if (!get().canTakeDebtLoan()) return false;
        set({ lastLoanAt: Date.now() });
        get().settle(DEBT_LOAN_AMOUNT);
        return true;
      },
    }),
    { name: 'gobbies-wallet' },
  ),
);
