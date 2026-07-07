import { HOUSE_EDGE } from '@gobbies/shared';

export interface MinesParams {
  /** Number of mines on the 5x5 board, 1-24. */
  mineCount: number;
}

export const MINES_GRID_SIZE = 25;
export const MINES_MIN = 1;
export const MINES_MAX = 24;
/** Mine placement consumes one float per mine (partial Fisher-Yates). */
export function minesFloatCount(params: MinesParams): number {
  return params.mineCount;
}

export function validateMinesParams(params: MinesParams): void {
  if (
    !Number.isInteger(params.mineCount) ||
    params.mineCount < MINES_MIN ||
    params.mineCount > MINES_MAX
  ) {
    throw new Error(`mines mineCount must be an integer ${MINES_MIN}-${MINES_MAX}`);
  }
}

/**
 * Deterministic mine placement: a partial Fisher-Yates shuffle over tile
 * indices 0-24 driven by the provided floats. Returns sorted tile indices.
 */
export function resolveMinePositions(params: MinesParams, floats: readonly number[]): number[] {
  validateMinesParams(params);
  if (floats.length < params.mineCount) {
    throw new Error(`mines requires ${params.mineCount} floats`);
  }
  const tiles = Array.from({ length: MINES_GRID_SIZE }, (_, i) => i);
  const mines: number[] = [];
  for (let i = 0; i < params.mineCount; i++) {
    const float = floats[i];
    if (float === undefined) throw new Error('missing float');
    const remaining = MINES_GRID_SIZE - i;
    const pickIndex = i + Math.min(remaining - 1, Math.floor(float * remaining));
    const tmp = tiles[i]!;
    tiles[i] = tiles[pickIndex]!;
    tiles[pickIndex] = tmp;
    mines.push(tiles[i]!);
  }
  return mines.sort((a, b) => a - b);
}

/**
 * Multiplier after `safePicks` successful reveals:
 * (1 - edge) x Π_{i=0}^{k-1} (25 - i) / (25 - mines - i).
 */
export function minesMultiplier(params: MinesParams, safePicks: number): number {
  validateMinesParams(params);
  const maxSafe = MINES_GRID_SIZE - params.mineCount;
  if (!Number.isInteger(safePicks) || safePicks < 0 || safePicks > maxSafe) {
    throw new Error(`safePicks must be an integer 0-${maxSafe}`);
  }
  if (safePicks === 0) return 1;
  let multiplier = 1 - HOUSE_EDGE;
  for (let i = 0; i < safePicks; i++) {
    multiplier *= (MINES_GRID_SIZE - i) / (MINES_GRID_SIZE - params.mineCount - i);
  }
  return multiplier;
}
