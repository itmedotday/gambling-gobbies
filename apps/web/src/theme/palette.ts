/**
 * Gambling Gobbies palette — dark tavern-casino.
 * Single source of truth shared by Tailwind theme variables (index.css) and Phaser scenes.
 */
export const palette = {
  /** Page background — near-black green. */
  background: '#0c1410',
  /** Raised panels/cards — dark parchment-green. */
  surface: '#16241c',
  /** Border/retro outline. */
  border: '#2e4a38',
  /** Primary text — aged parchment. */
  text: '#e8dcc0',
  /** Muted text. */
  textMuted: '#8fa08a',
  /** Goblin green — primary accent. */
  goblin: '#4caf50',
  goblinDark: '#2e7d32',
  /** Gobbie Gold — money, wins, player line in versus chart. */
  gold: '#ffc94a',
  goldDark: '#c79a2a',
  /** Losses/danger. */
  danger: '#e5484d',
  /** Opponent line in versus chart. */
  opponent: '#5bc26a',
  /** Info/links. */
  info: '#58a6ff',
} as const;

export type PaletteColor = keyof typeof palette;

/** Phaser wants numeric colors. */
export function hexToNumber(hex: string): number {
  return parseInt(hex.slice(1), 16);
}
