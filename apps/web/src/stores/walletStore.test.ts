import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import {
  STARTING_BALANCE,
  DAILY_BONUS_AMOUNT,
  DAILY_BONUS_COOLDOWN_MS,
  BAILOUT_AMOUNT,
  MAX_DEBT,
} from '@gobbies/shared';
import { useWalletStore } from './walletStore';
import { validateBet } from '@/game/validateBet';

describe('walletStore', () => {
  beforeEach(() => {
    useWalletStore.setState({ balance: STARTING_BALANCE, lastBonusAt: null, lastBailoutAt: null });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts at the standard bankroll', () => {
    expect(useWalletStore.getState().balance).toBe(STARTING_BALANCE);
  });

  it('settle credits and debits, floors at max debt', () => {
    const { settle } = useWalletStore.getState();
    settle(-400);
    expect(useWalletStore.getState().balance).toBe(600);
    settle(150.5);
    expect(useWalletStore.getState().balance).toBe(750.5);
    settle(-99999);
    expect(useWalletStore.getState().balance).toBe(-MAX_DEBT);
  });

  it('daily bonus credits once, then respects the cooldown', () => {
    const store = useWalletStore.getState();
    expect(store.claimDailyBonus()).toBe(true);
    expect(useWalletStore.getState().balance).toBe(STARTING_BALANCE + DAILY_BONUS_AMOUNT);
    expect(useWalletStore.getState().claimDailyBonus()).toBe(false);
    vi.advanceTimersByTime(DAILY_BONUS_COOLDOWN_MS + 1);
    expect(useWalletStore.getState().claimDailyBonus()).toBe(true);
  });

  it('bailout only fires when nearly broke', () => {
    expect(useWalletStore.getState().claimBailout()).toBe(false);
    useWalletStore.setState({ balance: 5 });
    expect(useWalletStore.getState().claimBailout()).toBe(true);
    expect(useWalletStore.getState().balance).toBe(5 + BAILOUT_AMOUNT);
    useWalletStore.setState({ balance: 3 });
    expect(useWalletStore.getState().claimBailout()).toBe(false); // cooldown
  });
});

describe('validateBet', () => {
  it('rejects zero, negative, NaN, and over-balance bets without debt', () => {
    expect(validateBet(0, 100)).not.toBeNull();
    expect(validateBet(-5, 100)).not.toBeNull();
    expect(validateBet(Number.NaN, 100)).not.toBeNull();
    expect(validateBet(101, 100)).not.toBeNull();
  });

  it('accepts valid bets without debt', () => {
    expect(validateBet(1, 100)).toBeNull();
    expect(validateBet(100, 100)).toBeNull();
  });

  it('allows solo bets into debt up to MAX_DEBT headroom', () => {
    expect(validateBet(150, 100, true)).toBeNull();
    expect(validateBet(201, 100, true)).not.toBeNull();
    expect(validateBet(50, -30, true)).toBeNull();
    expect(validateBet(71, -30, true)).not.toBeNull();
    expect(validateBet(1, -MAX_DEBT, true)).not.toBeNull();
  });

  it('reports lowered max bet while in debt', () => {
    expect(validateBet(80, -30, true)).toContain('while in debt');
  });
});
