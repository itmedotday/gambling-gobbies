import { HOUSE_EDGE } from '@gobbies/shared';

export interface D20Params {
  /** Difficulty class 2-20; win when roll >= dc. */
  dc: number;
}

export interface D20Outcome {
  /** 1-20. */
  roll: number;
  isWin: boolean;
  isCritical: boolean;
  isFumble: boolean;
  multiplier: number;
}

export const D20_MIN_DC = 2;
export const D20_MAX_DC = 20;
export const D20_FLOAT_COUNT = 1;
/** A natural 20 pays 1.5x the base win multiplier (priced into the edge). */
export const D20_CRIT_BONUS = 1.5;

export function d20WinChance(params: D20Params): number {
  return (21 - params.dc) / 20;
}

/**
 * Base multiplier chosen so total EV = (1 - HOUSE_EDGE) x bet, accounting for
 * the crit bonus: EV = m x (p + P(nat20) x (bonus - 1)).
 */
export function d20Multiplier(params: D20Params): number {
  const p = d20WinChance(params);
  return (1 - HOUSE_EDGE) / (p + (1 / 20) * (D20_CRIT_BONUS - 1));
}

export function validateD20Params(params: D20Params): void {
  if (!Number.isInteger(params.dc) || params.dc < D20_MIN_DC || params.dc > D20_MAX_DC) {
    throw new Error(`d20 dc must be an integer ${D20_MIN_DC}-${D20_MAX_DC}`);
  }
}

export function resolveD20(params: D20Params, floats: readonly number[]): D20Outcome {
  validateD20Params(params);
  const float = floats[0];
  if (float === undefined) throw new Error('d20 requires 1 float');
  const roll = Math.min(20, Math.floor(float * 20) + 1);
  const isCritical = roll === 20;
  const isFumble = roll === 1;
  const isWin = roll >= params.dc;
  const base = d20Multiplier(params);
  const multiplier = isWin ? (isCritical ? base * D20_CRIT_BONUS : base) : 0;
  return { roll, isWin, isCritical, isFumble, multiplier };
}
