import { HOUSE_EDGE } from '@gobbies/shared';

export interface WheelParams {
  /** Win chance in whole percent, 1-98. */
  winChance: number;
}

export interface WheelOutcome {
  /** Landing position in [0, 100) — below winChance is a win. */
  position: number;
  isWin: boolean;
  multiplier: number;
}

export const WHEEL_MIN_CHANCE = 1;
export const WHEEL_MAX_CHANCE = 98;
export const WHEEL_FLOAT_COUNT = 1;

export function wheelMultiplier(params: WheelParams): number {
  return (100 * (1 - HOUSE_EDGE)) / params.winChance;
}

export function validateWheelParams(params: WheelParams): void {
  if (
    !Number.isInteger(params.winChance) ||
    params.winChance < WHEEL_MIN_CHANCE ||
    params.winChance > WHEEL_MAX_CHANCE
  ) {
    throw new Error(`wheel winChance must be an integer ${WHEEL_MIN_CHANCE}-${WHEEL_MAX_CHANCE}`);
  }
}

export function resolveWheel(params: WheelParams, floats: readonly number[]): WheelOutcome {
  validateWheelParams(params);
  const float = floats[0];
  if (float === undefined) throw new Error('wheel requires 1 float');
  const position = float * 100;
  const isWin = position < params.winChance;
  return { position, isWin, multiplier: isWin ? wheelMultiplier(params) : 0 };
}
