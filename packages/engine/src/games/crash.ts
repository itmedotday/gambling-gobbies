import { HOUSE_EDGE } from '@gobbies/shared';

export interface CrashOutcome {
  /** The multiplier at which the round busts; 1.00 means instant bust. */
  crashPoint: number;
}

export const CRASH_FLOAT_COUNT = 1;
export const CRASH_MAX = 1_000_000;

/**
 * Provably-fair crash point: P(crash >= m) = (1 - edge) / m, so cashing out at
 * any multiplier m has EV = (1 - edge) x bet. floats below the edge produce an
 * instant bust at 1.00.
 */
export function resolveCrashPoint(floats: readonly number[]): CrashOutcome {
  const float = floats[0];
  if (float === undefined) throw new Error('crash requires 1 float');
  const raw = (1 - HOUSE_EDGE) / (1 - float);
  const crashPoint = Math.min(CRASH_MAX, Math.max(1, Math.floor(raw * 100) / 100));
  return { crashPoint };
}

/** Payout for a cash-out at `at` given the round's crash point (0 when busted). */
export function crashPayoutMultiplier(crashPoint: number, at: number): number {
  if (at < 1) throw new Error('cash-out multiplier must be >= 1');
  return crashPoint > 1 && at <= crashPoint ? at : 0;
}
