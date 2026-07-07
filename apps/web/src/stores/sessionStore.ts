import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AvatarId, PlayerProfile } from '@gobbies/shared';
import { apiGuestAuth, apiGetProfile } from '@/net/apiClient';

interface SessionState {
  token: string | null;
  player: PlayerProfile | null;
  ready: boolean;
  ensureSession: () => Promise<PlayerProfile>;
  syncProfile: () => Promise<void>;
  setPlayer: (player: PlayerProfile) => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      token: null,
      player: null,
      ready: false,
      ensureSession: async () => {
        const { token, player } = get();
        if (token && player?.id && player?.name) {
          set({ ready: true });
          return player;
        }
        const auth = await apiGuestAuth();
        if (!auth.player?.id) {
          throw new Error('Guest auth failed');
        }
        set({ token: auth.token, player: auth.player, ready: true });
        return auth.player;
      },
      syncProfile: async () => {
        const token = get().token;
        if (!token) return;
        const { player } = await apiGetProfile(token);
        set({ player });
      },
      setPlayer: (player) => set({ player }),
    }),
    { name: 'gobbies-session', partialize: (s) => ({ token: s.token, player: s.player }) },
  ),
);

export function avatarSpriteUrl(id: AvatarId): string {
  return `/assets/sprites/${id}/idle_sheet.png`;
}
