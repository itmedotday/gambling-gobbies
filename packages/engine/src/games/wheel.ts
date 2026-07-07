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

export interface WheelSpinOutcome {
  /** Landing angle in degrees [0, 360); the win arc is centered on the pointer at 0°. */
  angle: number;
  isWin: boolean;
  multiplier: number;
}

/**
 * Angle-form resolution used by the wheel visual: the win arc spans
 * winChance% of the circle centered on the pointer. Same float, same win
 * probability as resolveWheel — just a different geometric presentation.
 */
export function resolveWheelSpin(params: WheelParams, floats: readonly number[]): WheelSpinOutcome {
  validateWheelParams(params);
  const float = floats[0];
  if (float === undefined) throw new Error('wheel requires 1 float');
  const angle = float * 360;
  const halfArc = (params.winChance / 100) * 180;
  const isWin = angle <= halfArc || angle >= 360 - halfArc;
  return { angle, isWin, multiplier: isWin ? wheelMultiplier(params) : 0 };
}
