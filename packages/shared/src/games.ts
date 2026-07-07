/** Every game in the casino. Exhaustive switches over this union are enforced. */
export type GameId = 'coinflip' | 'dice' | 'wheel' | 'd20' | 'crash' | 'mines';

export const ALL_GAME_IDS: readonly GameId[] = [
  'coinflip',
  'dice',
  'wheel',
  'd20',
  'crash',
  'mines',
] as const;

export interface GameMeta {
  id: GameId;
  name: string;
  tagline: string;
}

export const GAME_META: Record<GameId, GameMeta> = {
  coinflip: { id: 'coinflip', name: 'Coin Flip', tagline: 'Heads or tails, double or nothing' },
  dice: { id: 'dice', name: 'Dice Slider', tagline: 'Roll over or under your target' },
  wheel: { id: 'wheel', name: 'Wheel', tagline: 'Spin for the win zone' },
  d20: { id: 'd20', name: 'D20 Roll', tagline: 'Beat the DC, crit for a bonus' },
  crash: { id: 'crash', name: 'Goblin Crash', tagline: 'Cash out before the goblin busts' },
  mines: { id: 'mines', name: 'Goblin Mines', tagline: 'Loot chests, dodge the bombs' },
};
