import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { applyPaletteMode, paletteModeFromDocument, type PaletteMode } from '@/theme/palette';
import { EventBus } from '@/phaser/events';

function resolveMode(resolvedTheme: string | undefined): PaletteMode {
  if (resolvedTheme === 'light') return 'light';
  if (resolvedTheme === 'dark') return 'dark';
  return paletteModeFromDocument();
}

/** Keeps Phaser palette + EventBus in sync with next-themes. */
export function ThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const mode = resolveMode(resolvedTheme);
    applyPaletteMode(mode);
    EventBus.emit('theme-change', { mode });
  }, [resolvedTheme]);

  return null;
}
