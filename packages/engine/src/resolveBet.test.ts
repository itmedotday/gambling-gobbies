import { describe, expect, it } from 'vitest';
import { floatCountFor, resolveBet, payoutMatches } from '@gobbies/engine';

describe('resolveBet', () => {
  it('coinflip payout matches reported value', () => {
    const floats = [0.1];
    const amount = 10;
    const resolved = resolveBet('coinflip', amount, { pick: 'heads' }, floats);
    expect(payoutMatches('coinflip', amount, { pick: 'heads' }, floats, resolved.payout)).toBe(true);
  });

  it('floatCountFor mines scales with mine count', () => {
    expect(floatCountFor('mines', { mineCount: 5 })).toBe(5);
    expect(floatCountFor('coinflip', {})).toBe(1);
  });
});
