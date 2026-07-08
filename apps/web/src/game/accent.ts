import type { GameId } from '@gobbies/shared';

export type GameAccent = 'indigo' | 'violet' | 'amber' | 'rose' | 'cyan' | 'emerald';

export interface AccentTokens {
  /** CSS color string (e.g. '#a5b4fc' or 'rgb(...)'). */
  glowRgb: string;
  /** Tailwind-compatible "rgba(...)" string used in bg gradients. */
  radial: string;
  /** CSS color (hex/rgb) for text accents. */
  text: string;
}

export function accentForGame(game: GameId): GameAccent {
  switch (game) {
    case 'coinflip':
      return 'indigo';
    case 'wheel':
      return 'violet';
    case 'd20':
      return 'amber';
    case 'crash':
      return 'rose';
    case 'mines':
      return 'cyan';
    default:
      return 'indigo';
  }
}

export function accentTokens(accent: GameAccent): AccentTokens {
  switch (accent) {
    case 'indigo':
      return { glowRgb: '99,102,241', radial: 'rgba(99,102,241,.18)', text: 'var(--primary)' };
    case 'violet':
      return { glowRgb: '139,92,246', radial: 'rgba(139,92,246,.18)', text: 'var(--chart-4)' };
    case 'amber':
      return { glowRgb: '251,146,60', radial: 'rgba(251,146,60,.14)', text: 'var(--gold-dark)' };
    case 'rose':
      return { glowRgb: '244,63,94', radial: 'rgba(244,63,94,.14)', text: 'var(--destructive)' };
    case 'cyan':
      return { glowRgb: '70,200,210', radial: 'rgba(70,200,210,.14)', text: 'var(--chart-3)' };
    case 'emerald':
      return { glowRgb: '16,185,129', radial: 'rgba(16,185,129,.14)', text: 'var(--chart-3)' };
    default: {
      const _exhaustive: never = accent;
      return { glowRgb: '99,102,241', radial: 'rgba(99,102,241,.18)', text: 'var(--primary)' };
    }
  }
}

