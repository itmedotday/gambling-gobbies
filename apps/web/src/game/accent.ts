import type { GameId } from '@gobbies/shared';

export type GameAccent = 'indigo' | 'emerald' | 'violet' | 'amber' | 'rose' | 'cyan';

export interface AccentTokens {
  glowRgb: string;
  radial: string;
  text: string;
  border: string;
  dot: string;
  insetShadow: string;
  gradientFrom: string;
  gradientTo: string;
  buttonText: string;
  hoverGlow: string;
}

export function accentForGame(game: GameId): GameAccent {
  switch (game) {
    case 'coinflip':
      return 'indigo';
    case 'dice':
      return 'emerald';
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
      return {
        glowRgb: '99,102,241',
        radial: 'rgba(99,102,241,.18)',
        text: '#a5b4fc',
        border: '#6366f1',
        dot: '#6366f1',
        insetShadow: 'inset 0 1px 12px rgba(99,102,241,.08)',
        gradientFrom: '#818cf8',
        gradientTo: '#4f46e5',
        buttonText: '#ffffff',
        hoverGlow: '0 0 48px rgba(99,102,241,.95)',
      };
    case 'emerald':
      return {
        glowRgb: '16,185,129',
        radial: 'rgba(16,185,129,.14)',
        text: '#34d399',
        border: '#10b981',
        dot: '#10b981',
        insetShadow: 'inset 0 1px 12px rgba(16,185,129,.08)',
        gradientFrom: '#34d399',
        gradientTo: '#10b981',
        buttonText: '#04120c',
        hoverGlow: '0 0 48px rgba(16,185,129,.9)',
      };
    case 'violet':
      return {
        glowRgb: '139,92,246',
        radial: 'rgba(139,92,246,.18)',
        text: '#c4b5fd',
        border: '#8b5cf6',
        dot: '#8b5cf6',
        insetShadow: 'inset 0 1px 12px rgba(139,92,246,.08)',
        gradientFrom: '#a78bfa',
        gradientTo: '#7c3aed',
        buttonText: '#ffffff',
        hoverGlow: '0 0 48px rgba(139,92,246,.9)',
      };
    case 'amber':
      return {
        glowRgb: '251,146,60',
        radial: 'rgba(251,146,60,.14)',
        text: '#fdba74',
        border: '#fb923c',
        dot: '#fb923c',
        insetShadow: 'inset 0 1px 12px rgba(251,146,60,.08)',
        gradientFrom: '#fdba74',
        gradientTo: '#ea580c',
        buttonText: '#1a0a00',
        hoverGlow: '0 0 48px rgba(251,146,60,.9)',
      };
    case 'rose':
      return {
        glowRgb: '244,63,94',
        radial: 'rgba(244,63,94,.14)',
        text: '#fda4af',
        border: '#f43f5e',
        dot: '#f43f5e',
        insetShadow: 'inset 0 1px 12px rgba(244,63,94,.08)',
        gradientFrom: '#fb7185',
        gradientTo: '#e11d48',
        buttonText: '#ffffff',
        hoverGlow: '0 0 48px rgba(244,63,94,.9)',
      };
    case 'cyan':
      return {
        glowRgb: '70,200,210',
        radial: 'rgba(70,200,210,.14)',
        text: '#7dd3da',
        border: '#46c8d2',
        dot: '#46c8d2',
        insetShadow: 'inset 0 1px 12px rgba(70,200,210,.08)',
        gradientFrom: '#7dd3da',
        gradientTo: '#0891b2',
        buttonText: '#031418',
        hoverGlow: '0 0 48px rgba(70,200,210,.9)',
      };
    default:
      return accentTokens('indigo');
  }
}
