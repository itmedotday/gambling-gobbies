import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/** Which component kit the UI renders with. `shadcn` = plain base components. */
export type UiSkin = 'eightbit' | 'shadcn';

/** Which design direction the app uses (from the redesign doc). */
export type ThemeStyle = 'mono' | 'neonTavern' | 'emeraldDen' | 'highRollerMarquee';

interface SettingsState {
  uiSkin: UiSkin;
  themeStyle: ThemeStyle;
  muted: boolean;
  musicVolume: number;
  sfxVolume: number;
  reducedMotion: boolean;
  setUiSkin: (skin: UiSkin) => void;
  setThemeStyle: (style: ThemeStyle) => void;
  setMuted: (muted: boolean) => void;
  setMusicVolume: (volume: number) => void;
  setSfxVolume: (volume: number) => void;
  setReducedMotion: (reduced: boolean) => void;
}

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Default kit, seeded from a build-time env var (settable via Vercel). */
const defaultUiSkin: UiSkin =
  (import.meta.env.VITE_DEFAULT_UI_SKIN as string | undefined) === 'shadcn'
    ? 'shadcn'
    : 'eightbit';

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
      uiSkin: defaultUiSkin,
      themeStyle: defaultThemeStyle,
      muted: false,
      musicVolume: 0.5,
      sfxVolume: 0.8,
      reducedMotion: prefersReducedMotion,
      setUiSkin: (uiSkin) => set({ uiSkin }),
      setThemeStyle: (themeStyle) => set({ themeStyle }),
      setMuted: (muted) => set({ muted }),
      setMusicVolume: (musicVolume) => set({ musicVolume }),
      setSfxVolume: (sfxVolume) => set({ sfxVolume }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
    }),
    { name: 'gobbies-settings' },
  ),
);

/** Current UI kit selection. */
export const useUiSkin = (): UiSkin => useSettingsStore((s) => s.uiSkin);

/**
 * True when the retro 8-bit kit should render. UI wrappers read this to decide
 * whether to draw pixel decorations or fall back to the plain shadcn component.
 */
export const useEightBit = (): boolean =>
  useSettingsStore((s) => s.uiSkin === 'eightbit');

export const useThemeStyle = (): ThemeStyle => useSettingsStore((s) => s.themeStyle);
