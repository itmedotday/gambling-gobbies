import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  muted: boolean;
  musicVolume: number;
  sfxVolume: number;
  reducedMotion: boolean;
  setMuted: (muted: boolean) => void;
  setMusicVolume: (volume: number) => void;
  setSfxVolume: (volume: number) => void;
  setReducedMotion: (reduced: boolean) => void;
}

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      muted: false,
      musicVolume: 0.5,
      sfxVolume: 0.8,
      reducedMotion: prefersReducedMotion,
      setMuted: (muted) => set({ muted }),
      setMusicVolume: (musicVolume) => set({ musicVolume }),
      setSfxVolume: (sfxVolume) => set({ sfxVolume }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
    }),
    { name: 'gobbies-settings' },
  ),
);
