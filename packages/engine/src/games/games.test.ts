import { describe, it, expect } from 'vitest';
import { HOUSE_EDGE } from '@gobbies/shared';
import { resolveCoinFlip, COINFLIP_WIN_MULTIPLIER } from './coinflip';
import { resolveDice, diceMultiplier, diceWinChance } from './dice';
import { resolveWheel, wheelMultiplier } from './wheel';
import { resolveD20, d20Multiplier, D20_CRIT_BONUS } from './d20';
import { resolveCrashPoint, crashPayoutMultiplier } from './crash';
import { resolveMinePositions, minesMultiplier, MINES_GRID_SIZE } from './mines';

const EDGE_FACTOR = 1 - HOUSE_EDGE;

describe('coinflip', () => {
  it('lands heads below 0.5 and tails above', () => {
    expect(resolveCoinFlip({ pick: 'heads' }, [0.49]).landed).toBe('heads');
    expect(resolveCoinFlip({ pick: 'heads' }, [0.5]).landed).toBe('tails');
  });

  it('pays 1.98x on a win and 0 on a loss', () => {
    const win = resolveCoinFlip({ pick: 'heads' }, [0.1]);
    expect(win.isWin).toBe(true);
    expect(win.multiplier).toBeCloseTo(1.98, 10);
    const loss = resolveCoinFlip({ pick: 'tails' }, [0.1]);
    expect(loss.isWin).toBe(false);
    expect(loss.multiplier).toBe(0);
  });

  it('has EV = (1 - edge) x bet', () => {
    expect(0.5 * COINFLIP_WIN_MULTIPLIER).toBeCloseTo(EDGE_FACTOR, 10);
  });
});

describe('dice', () => {
  it('resolves roll-over wins and losses at the boundary', () => {
    // float 0.5 -> roll = floor(5000.5)/100 = 50.00
    expect(resolveDice({ target: 49.99, rollOver: true }, [0.5]).isWin).toBe(true);
    expect(resolveDice({ target: 50.0, rollOver: true }, [0.5]).isWin).toBe(false);
    expect(resolveDice({ target: 50.01, rollOver: false }, [0.5]).isWin).toBe(true);
    expect(resolveDice({ target: 50.0, rollOver: false }, [0.5]).isWin).toBe(false);
  });

  it('multiplier equals 99/chance across the parameter space', () => {
    for (const target of [0.01, 1, 25.5, 50, 75, 98, 99.99]) {
      for (const rollOver of [true, false]) {
        const params = { target, rollOver };
        expect(diceMultiplier(params)).toBeCloseTo(
          (100 * EDGE_FACTOR) / diceWinChance(params),
          10,
        );
      }
    }
  });

  it('has EV = (1 - edge) x bet for every target', () => {
    for (const target of [1, 10, 33.33, 50, 66.67, 90, 99]) {
      const params = { target, rollOver: true };
      const ev = (diceWinChance(params) / 100) * diceMultiplier(params);
      expect(ev).toBeCloseTo(EDGE_FACTOR, 10);
    }
  });

  it('rejects out-of-range targets', () => {
    expect(() => resolveDice({ target: 0, rollOver: true }, [0.5])).toThrow();
    expect(() => resolveDice({ target: 100, rollOver: true }, [0.5])).toThrow();
  });
});

describe('wheel', () => {
  it('wins when the position lands inside the win zone', () => {
    expect(resolveWheel({ winChance: 50 }, [0.499]).isWin).toBe(true);
    expect(resolveWheel({ winChance: 50 }, [0.5]).isWin).toBe(false);
  });

  it('has EV = (1 - edge) x bet for every chance', () => {
    for (let chance = 1; chance <= 98; chance++) {
      const ev = (chance / 100) * wheelMultiplier({ winChance: chance });
      expect(ev).toBeCloseTo(EDGE_FACTOR, 10);
    }
  });

  it('rejects out-of-range chances', () => {
    expect(() => resolveWheel({ winChance: 0 }, [0.5])).toThrow();
    expect(() => resolveWheel({ winChance: 99 }, [0.5])).toThrow();
    expect(() => resolveWheel({ winChance: 50.5 }, [0.5])).toThrow();
  });
});

describe('d20', () => {
  it('maps floats to rolls 1-20', () => {
    expect(resolveD20({ dc: 10 }, [0]).roll).toBe(1);
    expect(resolveD20({ dc: 10 }, [0.9999999]).roll).toBe(20);
    expect(resolveD20({ dc: 10 }, [0.05]).roll).toBe(2);
  });

  it('nat 20 wins with crit bonus; nat 1 always loses', () => {
    const crit = resolveD20({ dc: 20 }, [0.9999]);
    expect(crit.isCritical).toBe(true);
    expect(crit.multiplier).toBeCloseTo(d20Multiplier({ dc: 20 }) * D20_CRIT_BONUS, 10);
    const fumble = resolveD20({ dc: 2 }, [0.01]);
    expect(fumble.isFumble).toBe(true);
    expect(fumble.isWin).toBe(false);
  });

  it('has EV = (1 - edge) x bet for every dc, crit bonus included', () => {
    for (let dc = 2; dc <= 20; dc++) {
      const base = d20Multiplier({ dc });
      let ev = 0;
      for (let roll = 1; roll <= 20; roll++) {
        if (roll < dc) continue;
        ev += (1 / 20) * (roll === 20 ? base * D20_CRIT_BONUS : base);
      }
      expect(ev).toBeCloseTo(EDGE_FACTOR, 10);
    }
  });
});

describe('crash', () => {
  it('busts instantly when the float is below the edge', () => {
    expect(resolveCrashPoint([0.001]).crashPoint).toBe(1);
  });

  it('produces the expected distribution: P(crash >= m) = 0.99/m', () => {
    // float f gives crash = 0.99/(1-f); invert: crash >= 2 iff f >= 1 - 0.495
    expect(resolveCrashPoint([0.505]).crashPoint).toBeCloseTo(2, 2);
    expect(resolveCrashPoint([0.9])?.crashPoint).toBeCloseTo(9.9, 1);
  });

  it('pays the cash-out multiplier when cashed at or before the bust', () => {
    expect(crashPayoutMultiplier(2.5, 2.0)).toBe(2.0);
    expect(crashPayoutMultiplier(2.5, 2.5)).toBe(2.5);
    expect(crashPayoutMultiplier(2.5, 2.51)).toBe(0);
    expect(crashPayoutMultiplier(1, 1)).toBe(0); // instant bust pays nobody
  });

  it('crash points round down to 2 decimals and never go below 1', () => {
    for (const f of [0, 0.2, 0.5, 0.77, 0.99, 0.99999]) {
      const { crashPoint } = resolveCrashPoint([f]);
      expect(crashPoint).toBeGreaterThanOrEqual(1);
      expect(Math.round(crashPoint * 100)).toBeCloseTo(crashPoint * 100, 6);
    }
  });
});

describe('mines', () => {
  it('places the exact number of unique mines on the board', () => {
    for (const mineCount of [1, 5, 12, 24]) {
      const floats = Array.from({ length: mineCount }, (_, i) => ((i * 37) % 100) / 100);
      const mines = resolveMinePositions({ mineCount }, floats);
      expect(mines).toHaveLength(mineCount);
      expect(new Set(mines).size).toBe(mineCount);
      for (const m of mines) {
        expect(m).toBeGreaterThanOrEqual(0);
        expect(m).toBeLessThan(MINES_GRID_SIZE);
      }
    }
  });

  it('is deterministic for the same floats', () => {
    const floats = [0.11, 0.42, 0.73, 0.99, 0.05];
    expect(resolveMinePositions({ mineCount: 5 }, floats)).toEqual(
      resolveMinePositions({ mineCount: 5 }, floats),
    );
  });

  it('multiplier grows with each safe pick and starts at 1', () => {
    const params = { mineCount: 3 };
    expect(minesMultiplier(params, 0)).toBe(1);
    let prev = 1;
    for (let k = 1; k <= MINES_GRID_SIZE - 3; k++) {
      const m = minesMultiplier(params, k);
      expect(m).toBeGreaterThan(prev);
      prev = m;
    }
  });

  it('has EV = (1 - edge) x bet at every cash-out depth', () => {
    // P(surviving k picks) = Π (25 - mines - i) / (25 - i); EV = P x multiplier.
    for (const mineCount of [1, 3, 10, 24]) {
      const maxSafe = MINES_GRID_SIZE - mineCount;
      for (let k = 1; k <= maxSafe; k++) {
        let pSurvive = 1;
        for (let i = 0; i < k; i++) {
          pSurvive *= (MINES_GRID_SIZE - mineCount - i) / (MINES_GRID_SIZE - i);
        }
        const ev = pSurvive * minesMultiplier({ mineCount }, k);
        expect(ev).toBeCloseTo(EDGE_FACTOR, 10);
      }
    }
  });

  it('first-pick multiplier matches the closed form (25/(25-mines) x 0.99)', () => {
    expect(minesMultiplier({ mineCount: 1 }, 1)).toBeCloseTo((25 / 24) * 0.99, 10);
    expect(minesMultiplier({ mineCount: 24 }, 1)).toBeCloseTo(25 * 0.99, 10);
  });
});
