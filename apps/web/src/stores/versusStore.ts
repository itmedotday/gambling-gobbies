import { useEffect, useState } from 'react';

import { Client, Room } from '@colyseus/sdk';

import { create } from 'zustand';

import type { GameId, PlayerProfile, VersusClientMessage, VersusRoomView } from '@gobbies/shared';

import { ALL_GAME_IDS, generateRoomCode } from '@gobbies/shared';

import { wsUrl } from '@/net/apiClient';

import { useSessionStore } from '@/stores/sessionStore';

import { deliverVersusBetResult, rejectVersusBet } from '@/game/versusBet';



interface VersusStore {

  room: Room | null;

  view: VersusRoomView | null;

  error: string | null;

  connectCreate: (opts: { durationMs: number; startingBankroll: number }) => Promise<string>;

  connectJoin: (code: string) => Promise<void>;

  send: (message: VersusClientMessage) => void;

  leave: () => void;

}



interface VersusPlayerSchema {

  sessionId: string;

  playerId: string;

  name: string;

  avatar: string;

  balance: number;

  startingBalance: number;

  ready: boolean;

  disconnected: boolean;

}



interface VersusStateSchema {

  code?: string;

  phase?: VersusRoomView['phase'];

  durationMs?: number;

  timerRemainingMs?: number;

  winnerId?: string;

  endedReason?: string;

  players?: Map<string, VersusPlayerSchema | undefined>;

  eventFeed?: { length: number; [i: number]: string };

  snapshots?: { length: number; [i: number]: string };

}



function wireRoomHandlers(room: Room, set: (partial: Partial<VersusStore>) => void): void {

  room.onStateChange(() => set({ view: mapRoom(room) }));

  room.onMessage('joined', () => set({ view: mapRoom(room) }));

  room.onMessage('error', (payload: { message: string }) => set({ error: payload.message }));

  room.onMessage(

    'bet_result',

    (payload: {

      type: 'bet_result';

      game: GameId;

      isWin: boolean;

      payout: number;

      balance: number;

      detail: string;

      floats: number[];

    }) => {

      deliverVersusBetResult(payload);

      set({ view: mapRoom(room) });

    },

  );

  room.onLeave(() => rejectVersusBet(new Error('Left versus room')));

}



function mapRoom(room: Room): VersusRoomView {

  const state = (room.state ?? {}) as VersusStateSchema;

  const playerValues = state.players ? [...state.players.values()] : [];

  const players = playerValues

    .filter((p): p is VersusPlayerSchema => p != null)

    .map((p) => ({

      sessionId: p.sessionId,

      playerId: p.playerId,

      name: p.name || 'Goblin',

      avatar: p.avatar as VersusRoomView['players'][0]['avatar'],

      balance: p.balance,

      startingBalance: p.startingBalance,

      ready: p.ready,

      disconnected: p.disconnected,

    }));

  const eventFeed = state.eventFeed;

  const events = Array.from({ length: eventFeed?.length ?? 0 }, (_, i) => {

    const msg = eventFeed?.[i] ?? '';

    return { at: Date.now(), playerId: '', name: '', message: msg };

  });

  const snapshotList = state.snapshots;

  const snapshots = Array.from({ length: snapshotList?.length ?? 0 }, (_, i) => {

    const raw = snapshotList?.[i];

    try {

      return JSON.parse(raw ?? '{}') as VersusRoomView['snapshots'][0];

    } catch {

      return { at: Date.now(), balances: {} };

    }

  });

  return {

    code: state.code ?? '',

    phase: state.phase ?? 'waiting',

    config: {

      durationMs: state.durationMs ?? 300_000,

      startingBankroll: players[0]?.startingBalance ?? 1000,

      allowedGames: [...ALL_GAME_IDS],

    },

    timerRemainingMs: state.timerRemainingMs ?? 0,

    players,

    snapshots,

    events,

    winnerId: state.winnerId || null,

    endedReason: state.endedReason || null,

  };

}



function waitForState(room: Room): Promise<void> {

  return new Promise((resolve) => {

    const state = room.state as VersusStateSchema | undefined;

    if (state?.players) {

      resolve();

      return;

    }

    const timeout = setTimeout(resolve, 4000);

    room.onStateChange.once(() => {

      clearTimeout(timeout);

      resolve();

    });

  });

}



async function resolvePlayer(): Promise<PlayerProfile> {

  const session = useSessionStore.getState();

  let player = session.player;

  if (!player?.id || !player?.name) {

    player = await session.ensureSession();

  }

  if (!player?.id || !player?.name) {

    throw new Error('Could not load your goblin profile');

  }

  return player;

}



export const useVersusStore = create<VersusStore>((set, get) => ({

  room: null,

  view: null,

  error: null,

  connectCreate: async (opts) => {

    const player = await resolvePlayer();

    const code = generateRoomCode();

    const client = new Client(wsUrl());

    const room = await client.create('versus', {

      code,

      playerId: player.id,

      name: player.name,

      avatar: player.avatar,

      durationMs: opts.durationMs,

      startingBankroll: opts.startingBankroll,

    });

    wireRoomHandlers(room, set);

    await waitForState(room);

    set({ room, view: mapRoom(room), error: null });

    return mapRoom(room).code || code;

  },

  connectJoin: async (code) => {

    const player = await resolvePlayer();

    const client = new Client(wsUrl());

    const room = await client.joinOrCreate('versus', {

      code: code.toUpperCase(),

      playerId: player.id,

      name: player.name,

      avatar: player.avatar,

      startingBankroll: 1000,

    });

    wireRoomHandlers(room, set);

    await waitForState(room);

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


