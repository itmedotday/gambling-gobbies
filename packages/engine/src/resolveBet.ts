import type { GameId } from '@gobbies/shared';
import { COINFLIP_FLOAT_COUNT, resolveCoinFlip } from './games/coinflip.js';
import { DICE_FLOAT_COUNT, resolveDice } from './games/dice.js';
import { WHEEL_FLOAT_COUNT, resolveWheel } from './games/wheel.js';
import { D20_FLOAT_COUNT, resolveD20 } from './games/d20.js';
import { CRASH_FLOAT_COUNT, resolveCrashPoint } from './games/crash.js';
import { minesFloatCount, minesMultiplier } from './games/mines.js';

export interface BetResolution {
  isWin: boolean;
  multiplier: number;
  payout: number;
  detail: string;
  floatCount: number;
}

export function floatCountFor(game: GameId, params: Record<string, unknown>): number {
  switch (game) {
    case 'coinflip':
      return COINFLIP_FLOAT_COUNT;
    case 'dice':
      return DICE_FLOAT_COUNT;
    case 'wheel':
      return WHEEL_FLOAT_COUNT;
    case 'd20':
      return D20_FLOAT_COUNT;
    case 'crash':
      return CRASH_FLOAT_COUNT;
    case 'mines': {
      const mineCount = Number(params.mineCount ?? 3);
      return minesFloatCount({ mineCount });
    }
    default: {
      const exhaustive: never = game;
      throw new Error(`Unhandled game: ${String(exhaustive)}`);
    }
  }
}

export function resolveBet(
  game: GameId,
  amount: number,
  params: Record<string, unknown>,
  floats: readonly number[],
): BetResolution {
  switch (game) {
    case 'coinflip': {
      const pick = params.pick === 'tails' ? 'tails' : 'heads';
      const outcome = resolveCoinFlip({ pick }, floats);
      const payout = Math.floor(amount * outcome.multiplier * 100) / 100;
      return {
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
        payout,
        detail: `Landed ${outcome.landed}`,
        floatCount: COINFLIP_FLOAT_COUNT,
      };
    }
    case 'dice': {
      const target = Number(params.target ?? 50);
      const rollOver = Boolean(params.rollOver ?? true);
      const outcome = resolveDice({ target, rollOver }, floats);
      const payout = Math.floor(amount * outcome.multiplier * 100) / 100;
      return {
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
        payout,
        detail: `Rolled ${outcome.roll.toFixed(2)}`,
        floatCount: DICE_FLOAT_COUNT,
      };
    }
    case 'wheel': {
      const winChance = Number(params.winChance ?? 50);
      const outcome = resolveWheel({ winChance }, floats);
      const payout = Math.floor(amount * outcome.multiplier * 100) / 100;
      return {
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
        payout,
        detail: outcome.isWin ? 'Hit the win zone' : 'Missed the win zone',
        floatCount: WHEEL_FLOAT_COUNT,
      };
    }
    case 'd20': {
      const dc = Number(params.dc ?? params.target ?? 10);
      const outcome = resolveD20({ dc }, floats);
      const payout = Math.floor(amount * outcome.multiplier * 100) / 100;
      return {
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
        payout,
        detail: `Rolled ${outcome.roll}${outcome.isCritical ? ' (nat 20!)' : outcome.isFumble ? ' (nat 1!)' : ''}`,
        floatCount: D20_FLOAT_COUNT,
      };
    }
    case 'crash': {
      const { crashPoint } = resolveCrashPoint(floats);
      const cashoutAt = Number(params.cashoutAt ?? 0);
      const isWin = cashoutAt > 0 && cashoutAt < crashPoint;
      const multiplier = isWin ? cashoutAt : 0;
      const payout = isWin ? Math.floor(amount * cashoutAt * 100) / 100 : 0;
      return {
        isWin,
        multiplier,
        payout,
        detail: isWin
          ? `Cashed at ${cashoutAt.toFixed(2)}x (bust ${crashPoint.toFixed(2)}x)`
          : `Busted at ${crashPoint.toFixed(2)}x`,
        floatCount: CRASH_FLOAT_COUNT,
      };
    }
    case 'mines': {
      const mineCount = Number(params.mineCount ?? 3);
      const picks = Number(params.picks ?? 0);
      const busted = Boolean(params.busted ?? false);
      if (busted || picks <= 0) {
        return {
          isWin: false,
          multiplier: 0,
          payout: 0,
          detail: `Hit a bomb (${mineCount} mines)`,
          floatCount: minesFloatCount({ mineCount }),
        };
      }
      const multiplier = minesMultiplier({ mineCount }, picks);
      const payout = Math.floor(amount * multiplier * 100) / 100;
      return {
        isWin: true,
        multiplier,
        payout,
        detail: `Looted ${picks} chest${picks === 1 ? '' : 's'}`,
        floatCount: minesFloatCount({ mineCount }),
      };
    }
    default: {
      const exhaustive: never = game;
      throw new Error(`Unhandled game: ${String(exhaustive)}`);
    }
  }
}

export function payoutMatches(
  game: GameId,
  amount: number,
  params: Record<string, unknown>,
  floats: readonly number[],
  reportedPayout: number,
): boolean {
  const resolved = resolveBet(game, amount, params, floats);
  return Math.abs(resolved.payout - reportedPayout) < 0.02;
}
