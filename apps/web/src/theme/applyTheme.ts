import type { PaletteMode, PaletteStyle } from '@/theme/palette';
import type { ThemeStyle } from '@/stores/settingsStore';
import { applyPaletteAppearance } from '@/theme/palette';
import { EventBus } from '@/phaser/events';

export interface ThemeAppearance {
  mode: PaletteMode;
  style: ThemeStyle;
  reducedMotion: boolean;
}

/** Single entry point for root appearance: palette, color-scheme, motion. */
export function applyThemeAppearance({ mode, style, reducedMotion }: ThemeAppearance): void {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  applyPaletteAppearance(mode, style as PaletteStyle);
  root.classList.toggle('dark', mode === 'dark');
  root.classList.toggle('theme-mono', style === 'mono');
  root.classList.toggle('theme-neon-tavern', style === 'neonTavern');
  root.classList.toggle('theme-emerald-den', style === 'emeraldDen');
  root.classList.toggle('theme-high-roller-marquee', style === 'highRollerMarquee');
  root.style.colorScheme = mode;
  root.classList.toggle('motion-reduce', reducedMotion);

  EventBus.emit('theme-change', { mode, style });
}
