/**
 * Gambling Gobbies palette — monochrome, theme-aware.
 * Shared by Tailwind (index.css) and Phaser scenes via getPalette().
 */
export type PaletteMode = 'light' | 'dark';
export type PaletteStyle = 'mono' | 'neonTavern' | 'emeraldDen';

export interface PaletteTokens {
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  /** Primary accent. */
  goblin: string;
  goblinDark: string;
  /** Highlight / currency emphasis. */
  gold: string;
  goldDark: string;
  danger: string;
  opponent: string;
  info: string;
}

const MONO_LIGHT: PaletteTokens = {
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

const MONO_DARK: PaletteTokens = {
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

const NEON_TAVERN_LIGHT: PaletteTokens = {
  background: '#fafafa',
  surface: '#ffffff',
  border: '#d4d4d8',
  text: '#09090b',
  textMuted: '#52525b',
  goblin: '#4f46e5',
  goblinDark: '#6366f1',
  gold: '#d97706',
  goldDark: '#b45309',
  danger: '#e11d48',
  opponent: '#fb7185',
  info: '#7c3aed',
};

const NEON_TAVERN_DARK: PaletteTokens = {
  background: '#09090b',
  surface: '#18181b',
  border: '#2e2e35',
  text: '#d4d4d8',
  textMuted: '#71717a',
  goblin: '#a5b4fc',
  goblinDark: '#818cf8',
  gold: '#ecc24e',
  goldDark: '#fdba74',
  danger: '#fb7185',
  opponent: '#fb7185',
  info: '#c4b5fd',
};

const EMERALD_DEN_LIGHT: PaletteTokens = {
  background: '#fbfaf5',
  surface: '#ffffff',
  border: '#d7d2c4',
  text: '#0b0d09',
  textMuted: '#5b5f54',
  goblin: '#5c7c3a',
  goblinDark: '#4a652f',
  gold: '#b8891a',
  goldDark: '#8e6b14',
  danger: '#b42318',
  opponent: '#6b7280',
  info: '#6b4eff',
};

const EMERALD_DEN_DARK: PaletteTokens = {
  background: '#0b0d09',
  surface: '#181b13',
  border: '#2a2f22',
  text: '#e6d5b8',
  textMuted: '#8a8f7a',
  goblin: '#849b49',
  goblinDark: '#6d803c',
  gold: '#ecc24e',
  goldDark: '#d5ab3b',
  danger: '#fb7185',
  opponent: '#94a3b8',
  info: '#a5b4fc',
};

let activeMode: PaletteMode = 'dark';
let activeStyle: PaletteStyle = 'neonTavern';
let activePalette: PaletteTokens = NEON_TAVERN_DARK;

function resolvePalette(mode: PaletteMode, style: PaletteStyle): PaletteTokens {
  switch (style) {
    case 'mono':
      return mode === 'light' ? MONO_LIGHT : MONO_DARK;
    case 'neonTavern':
      return mode === 'light' ? NEON_TAVERN_LIGHT : NEON_TAVERN_DARK;
    case 'emeraldDen':
      return mode === 'light' ? EMERALD_DEN_LIGHT : EMERALD_DEN_DARK;
    default: {
      const _exhaustive: never = style;
      return mode === 'light' ? NEON_TAVERN_LIGHT : NEON_TAVERN_DARK;
    }
  }
}

export function applyPaletteAppearance(mode: PaletteMode, style: PaletteStyle): void {
  activeMode = mode;
  activeStyle = style;
  activePalette = resolvePalette(mode, style);
}

export function getPaletteMode(): PaletteMode {
  return activeMode;
}

export function getPaletteStyle(): PaletteStyle {
  return activeStyle;
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

applyPaletteAppearance(paletteModeFromDocument(), 'neonTavern');
