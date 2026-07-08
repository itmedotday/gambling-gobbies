import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { paletteModeFromDocument, type PaletteMode } from '@/theme/palette';
import { applyThemeAppearance } from '@/theme/applyTheme';
import { useSettingsStore } from '@/stores/settingsStore';

function resolveMode(resolvedTheme: string | undefined): PaletteMode {
  if (resolvedTheme === 'light') return 'light';
  if (resolvedTheme === 'dark') return 'dark';
  return paletteModeFromDocument();
}

/** Keeps palette, Phaser, skin, and motion prefs in sync with settings. */
export function ThemeSync() {
  const { resolvedTheme } = useTheme();
  const uiSkin = useSettingsStore((s) => s.uiSkin);
  const themeStyle = useSettingsStore((s) => s.themeStyle);
  const reducedMotion = useSettingsStore((s) => s.reducedMotion);

  useEffect(() => {
    applyThemeAppearance({
      mode: resolveMode(resolvedTheme),
      style: themeStyle,
      skin: uiSkin,
      reducedMotion,
    });
  }, [resolvedTheme, themeStyle, uiSkin, reducedMotion]);

  return null;
}
