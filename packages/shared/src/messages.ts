import type { AvatarId } from './avatars';
import type { GameId } from './games';

/** Versus room lifecycle phases. */
export type VersusPhase = 'waiting' | 'ready' | 'countdown' | 'live' | 'finished';

export interface VersusConfig {
  durationMs: number;
  startingBankroll: number;
  allowedGames: GameId[];
}

export interface BalanceSnapshot {
  at: number;
  balances: Record<string, number>;
}

export interface VersusEvent {
  at: number;
  playerId: string;
  name: string;
  message: string;
}

/** Client -> server room messages (architecture rule 4). */
export type VersusClientMessage =
  | { type: 'ready' }
  | { type: 'forfeit' }
  | { type: 'rematch_accept' }
  | { type: 'emote'; emote: VersusEmote }
  | {
      type: 'place_bet';
      game: GameId;
      amount: number;
      params: Record<string, unknown>;
    };

/** Server -> client room messages. */
export type VersusServerMessage =
  | { type: 'error'; message: string }
  | { type: 'bet_result'; game: GameId; isWin: boolean; payout: number; balance: number; detail: string; floats: number[] };

export type VersusEmote = 'laugh' | 'cry' | 'taunt' | 'gg' | 'shock' | 'coins';

export interface VersusPlayerView {
  sessionId: string;
  playerId: string;
  name: string;
  avatar: AvatarId;
  balance: number;
  startingBalance: number;
  ready: boolean;
  disconnected: boolean;
}

export interface VersusRoomView {
  code: string;
  phase: VersusPhase;
  config: VersusConfig;
  timerRemainingMs: number;
  players: VersusPlayerView[];
  snapshots: BalanceSnapshot[];
  events: VersusEvent[];
  winnerId: string | null;
  endedReason: string | null;
}
