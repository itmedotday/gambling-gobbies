/**
 * Gambling Gobbies palette — monochrome, theme-aware.
 * Shared by Tailwind (index.css) and Phaser scenes via getPalette().
 */
export type PaletteMode = 'light' | 'dark';

export interface PaletteTokens {
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  /** Win / primary accent (was goblin green). */
  goblin: string;
  goblinDark: string;
  /** Highlight / currency emphasis (was gold). */
  gold: string;
  goldDark: string;
  danger: string;
  opponent: string;
  info: string;
}

const LIGHT: PaletteTokens = {
  background: '#ffffff',
  surface: '#f4f4f4',
  border: '#d4d4d4',
  text: '#0a0a0a',
  textMuted: '#737373',
  goblin: '#0a0a0a',
  goblinDark: '#525252',
  gold: '#0a0a0a',
  goldDark: '#404040',
  danger: '#525252',
  opponent: '#737373',
  info: '#404040',
};

const DARK: PaletteTokens = {
  background: '#0a0a0a',
  surface: '#141414',
  border: '#404040',
  text: '#fafafa',
  textMuted: '#a3a3a3',
  goblin: '#fafafa',
  goblinDark: '#d4d4d4',
  gold: '#ffffff',
  goldDark: '#a3a3a3',
  danger: '#737373',
  opponent: '#a3a3a3',
  info: '#d4d4d4',
};

let activeMode: PaletteMode = 'dark';
let activePalette: PaletteTokens = DARK;

export function applyPaletteMode(mode: PaletteMode): void {
  activeMode = mode;
  activePalette = mode === 'light' ? LIGHT : DARK;
}

export function getPaletteMode(): PaletteMode {
  return activeMode;
}

export function getPalette(): Readonly<PaletteTokens> {
  return activePalette;
}

/** @deprecated Prefer getPalette() — kept for Phaser scene imports. */
export const palette: PaletteTokens = new Proxy({} as PaletteTokens, {
  get(_target, prop: string) {
    return activePalette[prop as keyof PaletteTokens];
  },
});

export type PaletteColor = keyof PaletteTokens;

/** Phaser wants numeric colors. */
export function hexToNumber(hex: string): number {
  return parseInt(hex.slice(1), 16);
}

/** Detect theme from document class (SSR-safe fallback: dark). */
export function paletteModeFromDocument(): PaletteMode {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

applyPaletteMode(paletteModeFromDocument());
