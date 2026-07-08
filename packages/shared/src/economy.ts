/** Economy constants — single source of truth for both client and server. */
export const STARTING_BALANCE = 1000;
export const DAILY_BONUS_AMOUNT = 250;
export const DAILY_BONUS_COOLDOWN_MS = 20 * 60 * 60 * 1000;
export const BAILOUT_AMOUNT = 100;
export const BAILOUT_THRESHOLD = 10;
export const BAILOUT_COOLDOWN_MS = 5 * 60 * 1000;
/** Solo debt relief: one loan while balance is negative. */
export const DEBT_LOAN_AMOUNT = 150;
export const DEBT_LOAN_COOLDOWN_MS = 15 * 1000;
export const MIN_BET = 1;
/** Maximum Gobbie Gold a solo player may owe before bets are blocked. */
export const MAX_DEBT = 100;
/** House edge applied to every game's fair payout. */
export const HOUSE_EDGE = 0.01;

export function isInDebt(balance: number): boolean {
  return balance < 0;
}

/** Highest wager allowed at the current balance (solo debt uses MAX_DEBT headroom). */
export function getMaxBet(balance: number, allowDebt = false): number {
  if (!allowDebt) return Math.max(0, Math.floor(balance));
  return Math.max(0, Math.floor(balance + MAX_DEBT));
}

/** Milliseconds until the next debt loan is available (0 = ready now). */
export function debtLoanCooldownRemaining(lastLoanAt: number | null, now = Date.now()): number {
  if (lastLoanAt === null) return 0;
  return Math.max(0, DEBT_LOAN_COOLDOWN_MS - (now - lastLoanAt));
}
