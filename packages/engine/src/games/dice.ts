import { HOUSE_EDGE } from '@gobbies/shared';

export interface DiceParams {
  /** Target between 0.01 and 99.99 (two decimals). */
  target: number;
  /** true = win when roll > target, false = win when roll < target. */
  rollOver: boolean;
}

export interface DiceOutcome {
  /** Roll in [0.00, 100.00] with two decimals. */
  roll: number;
  isWin: boolean;
  multiplier: number;
}

export const DICE_MIN_TARGET = 0.01;
export const DICE_MAX_TARGET = 99.99;
export const DICE_FLOAT_COUNT = 1;

/** Win probability in percent (0-100 scale). */
export function diceWinChance(params: DiceParams): number {
  return params.rollOver ? 100 - params.target : params.target;
}

/** Payout multiplier for a win: (100 * (1 - edge)) / winChance%. */
export function diceMultiplier(params: DiceParams): number {
  return (100 * (1 - HOUSE_EDGE)) / diceWinChance(params);
}

export function validateDiceParams(params: DiceParams): void {
  if (
    !Number.isFinite(params.target) ||
    params.target < DICE_MIN_TARGET ||
    params.target > DICE_MAX_TARGET
  ) {
    throw new Error(`dice target must be between ${DICE_MIN_TARGET} and ${DICE_MAX_TARGET}`);
  }
}

export function resolveDice(params: DiceParams, floats: readonly number[]): DiceOutcome {
  validateDiceParams(params);
  const float = floats[0];
  if (float === undefined) throw new Error('dice requires 1 float');
  const roll = Math.floor(float * 10001) / 100;
  const isWin = params.rollOver ? roll > params.target : roll < params.target;
  return { roll, isWin, multiplier: isWin ? diceMultiplier(params) : 0 };
}
