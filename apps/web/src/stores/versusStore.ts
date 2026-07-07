import { useEffect, useState } from 'react';
import { Client, Room } from 'colyseus.js';
import { create } from 'zustand';
import type { VersusClientMessage, VersusRoomView } from '@gobbies/shared';
import { wsUrl } from '@/net/apiClient';
import { useSessionStore } from '@/stores/sessionStore';

interface VersusStore {
  room: Room | null;
  view: VersusRoomView | null;
  error: string | null;
  connectCreate: (opts: { durationMs: number; startingBankroll: number }) => Promise<string>;
  connectJoin: (code: string) => Promise<void>;
  send: (message: VersusClientMessage) => void;
  leave: () => void;
}

function mapRoom(room: Room): VersusRoomView {
  const state = room.state as {
    code: string;
    phase: VersusRoomView['phase'];
    durationMs: number;
    timerRemainingMs: number;
    winnerId: string;
    endedReason: string;
    players: Map<
      string,
      {
        sessionId: string;
        playerId: string;
        name: string;
        avatar: string;
        balance: number;
        startingBalance: number;
        ready: boolean;
        disconnected: boolean;
      }
    >;
    eventFeed: { length: number; [i: number]: string };
    snapshots: { length: number; [i: number]: string };
  };
  const players = [...state.players.values()].map((p) => ({
    sessionId: p.sessionId,
    playerId: p.playerId,
    name: p.name,
    avatar: p.avatar as VersusRoomView['players'][0]['avatar'],
    balance: p.balance,
    startingBalance: p.startingBalance,
    ready: p.ready,
    disconnected: p.disconnected,
  }));
  const events = Array.from({ length: state.eventFeed.length }, (_, i) => {
    const msg = state.eventFeed[i] ?? '';
    return { at: Date.now(), playerId: '', name: '', message: msg };
  });
  const snapshots = Array.from({ length: state.snapshots.length }, (_, i) => {
    const raw = state.snapshots[i];
    try {
      return JSON.parse(raw ?? '{}') as VersusRoomView['snapshots'][0];
    } catch {
      return { at: Date.now(), balances: {} };
    }
  });
  return {
    code: state.code,
    phase: state.phase,
    config: {
      durationMs: state.durationMs,
      startingBankroll: players[0]?.startingBalance ?? 1000,
      allowedGames: ['coinflip', 'dice', 'wheel', 'd20', 'crash', 'mines'],
    },
    timerRemainingMs: state.timerRemainingMs,
    players,
    snapshots,
    events,
    winnerId: state.winnerId || null,
    endedReason: state.endedReason || null,
  };
}

export const useVersusStore = create<VersusStore>((set, get) => ({
  room: null,
  view: null,
  error: null,
  connectCreate: async (opts) => {
    const session = useSessionStore.getState();
    const player = session.player ?? (await session.ensureSession());
    const client = new Client(wsUrl());
    const room = await client.create('versus', {
      playerId: player.id,
      name: player.name,
      avatar: player.avatar,
      durationMs: opts.durationMs,
      startingBankroll: opts.startingBankroll,
    });
    room.onStateChange(() => set({ view: mapRoom(room) }));
    room.onMessage('error', (payload: { message: string }) => set({ error: payload.message }));
    set({ room, view: mapRoom(room), error: null });
    return room.state.code as string;
  },
  connectJoin: async (code) => {
    const session = useSessionStore.getState();
    const player = session.player ?? (await session.ensureSession());
    const client = new Client(wsUrl());
    const room = await client.joinOrCreate('versus', {
      code: code.toUpperCase(),
      playerId: player.id,
      name: player.name,
      avatar: player.avatar,
      startingBankroll: 1000,
    });
    room.onStateChange(() => set({ view: mapRoom(room) }));
    set({ room, view: mapRoom(room), error: null });
  },
  send: (message) => {
    get().room?.send('msg', message);
    set({ view: get().room ? mapRoom(get().room!) : get().view });
  },
  leave: () => {
    get().room?.leave();
    set({ room: null, view: null });
  },
}));

/** Hook that keeps versus view in sync with room patches. */
export function useVersusView() {
  const view = useVersusStore((s) => s.view);
  const room = useVersusStore((s) => s.room);
  const [, tick] = useState(0);
  useEffect(() => {
    if (!room) return;
    const handler = () => tick((n) => n + 1);
    room.onStateChange(handler);
    return () => room.onStateChange.remove(handler);
  }, [room]);
  return view;
}
