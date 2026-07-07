import { HOUSE_EDGE } from '@gobbies/shared';

export type CoinSide = 'heads' | 'tails';

export interface CoinFlipParams {
  pick: CoinSide;
}

export interface CoinFlipOutcome {
  landed: CoinSide;
  isWin: boolean;
  /** Multiplier applied to the bet on a win (0 on a loss). */
  multiplier: number;
}

export const COINFLIP_WIN_MULTIPLIER = 2 * (1 - HOUSE_EDGE); // 1.98

export const COINFLIP_FLOAT_COUNT = 1;

export function resolveCoinFlip(params: CoinFlipParams, floats: readonly number[]): CoinFlipOutcome {
  const float = floats[0];
  if (float === undefined) throw new Error('coinflip requires 1 float');
  const landed: CoinSide = float < 0.5 ? 'heads' : 'tails';
  const isWin = landed === params.pick;
  return { landed, isWin, multiplier: isWin ? COINFLIP_WIN_MULTIPLIER : 0 };
}
