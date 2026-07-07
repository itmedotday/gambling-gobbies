import type { AvatarId } from './avatars';
import type { GameId } from './games';

export interface PlayerProfile {
  id: string;
  name: string;
  avatar: AvatarId;
  balance: number;
  createdAt: number;
  lastBonusAt: number | null;
  versusWins: number;
}

export interface AuthResponse {
  token: string;
  player: PlayerProfile;
}

export interface UpdateProfileRequest {
  name?: string;
  avatar?: AvatarId;
}

export interface BetRecord {
  id: string;
  game: GameId;
  amount: number;
  payout: number;
  multiplier: number;
  clientSeed: string;
  nonce: number;
  serverSeedHash: string;
  createdAt: number;
  detail: string;
}

export interface RecordBetRequest {
  game: GameId;
  amount: number;
  payout: number;
  multiplier: number;
  clientSeed: string;
  nonce: number;
  detail: string;
  /** Params the client used (target, mineCount, etc.) for server verification. */
  params: Record<string, unknown>;
}

export interface RecordBetResponse {
  accepted: boolean;
  balance: number;
  bet: BetRecord;
}

export interface FairnessState {
  activeSeedHash: string;
  activeSeedRevealed: string | null;
  clientSeed: string;
  nonce: number;
}

export interface RotateSeedResponse {
  revealedSeed: string;
  newSeedHash: string;
  nonce: number;
}

export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  name: string;
  avatar: AvatarId;
  value: number;
}

export type LeaderboardKind = 'balance' | 'biggest_win' | 'best_multiplier' | 'versus_wins';

export interface ApiError {
  error: string;
}
