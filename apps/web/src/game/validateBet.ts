import { MIN_BET, MAX_DEBT, getMaxBet, isInDebt } from '@gobbies/shared';

/** Validates a prospective bet; returns null when valid, or a user-facing error. */
export function validateBet(amount: number, balance: number, allowDebt = false): string | null {
  if (!Number.isFinite(amount) || amount < MIN_BET) {
    return `Minimum bet is ${MIN_BET} GG`;
  }
  const maxBet = getMaxBet(balance, allowDebt);
  if (amount > maxBet) {
    if (allowDebt && isInDebt(balance)) {
      return `Max bet is ${maxBet} GG while in debt`;
    }
    if (allowDebt && balance >= 0) {
      return `Bet exceeds your ${MAX_DEBT} GG debt limit`;
    }
    return 'Not enough Gobbie Gold';
  }
  return null;
}
