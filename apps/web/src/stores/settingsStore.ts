import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/** Which design direction the app uses (from the redesign doc). */
export type ThemeStyle = 'mono' | 'neonTavern' | 'emeraldDen' | 'highRollerMarquee';

interface SettingsState {
  themeStyle: ThemeStyle;
  muted: boolean;
  musicVolume: number;
  sfxVolume: number;
  reducedMotion: boolean;
  setThemeStyle: (style: ThemeStyle) => void;
  setMuted: (muted: boolean) => void;
  setMusicVolume: (volume: number) => void;
  setSfxVolume: (volume: number) => void;
  setReducedMotion: (reduced: boolean) => void;
}

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const defaultThemeStyle: ThemeStyle = (() => {
  const raw = import.meta.env.VITE_DEFAULT_THEME_STYLE as string | undefined;
  if (raw === 'mono') return 'mono';
  if (raw === 'emeraldDen') return 'emeraldDen';
  if (raw === 'highRollerMarquee') return 'highRollerMarquee';
  return 'neonTavern';
})();

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      themeStyle: defaultThemeStyle,
      muted: false,
      musicVolume: 0.5,
      sfxVolume: 0.8,
      reducedMotion: prefersReducedMotion,
      setThemeStyle: (themeStyle) => set({ themeStyle }),
      setMuted: (muted) => set({ muted }),
      setMusicVolume: (musicVolume) => set({ musicVolume }),
      setSfxVolume: (sfxVolume) => set({ sfxVolume }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
    }),
    { name: 'gobbies-settings' },
  ),
);

export const useThemeStyle = (): ThemeStyle => useSettingsStore((s) => s.themeStyle);
