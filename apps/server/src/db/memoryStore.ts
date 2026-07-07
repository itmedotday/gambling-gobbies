import { createHmac, randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { AvatarId } from '@gobbies/shared';
import type { BetRecord, LeaderboardKind, PlayerProfile } from '@gobbies/shared';
import { STARTING_BALANCE } from '@gobbies/shared';

export interface ServerSeedRecord {
  id: string;
  playerId: string;
  seed: string;
  seedHash: string;
  revealed: boolean;
  active: boolean;
  nonceCount: number;
  createdAt: number;
}

export interface MatchRecord {
  id: string;
  code: string;
  winnerId: string | null;
  endedReason: string | null;
  startedAt: number;
  endedAt: number | null;
}

export interface PlayerRow extends PlayerProfile {
  tokenHash: string;
  clientSeed: string;
  activeSeedId: string | null;
}

export interface Store {
  getPlayerById(id: string): Promise<PlayerRow | null>;
  getPlayerByTokenHash(hash: string): Promise<PlayerRow | null>;
  createPlayer(input: {
    tokenHash: string;
    name: string;
    avatar: AvatarId;
  }): Promise<PlayerRow>;
  updatePlayer(
    id: string,
    patch: Partial<Pick<PlayerRow, 'name' | 'avatar' | 'balance' | 'lastBonusAt' | 'versusWins'>>,
  ): Promise<PlayerRow>;
  recordBet(
    bet: Omit<BetRecord, 'serverSeedHash'> & { playerId: string; serverSeedId: string },
  ): Promise<BetRecord>;
  listBets(playerId: string, limit?: number): Promise<BetRecord[]>;
  getActiveSeed(playerId: string): Promise<ServerSeedRecord | null>;
  rotateSeed(
    playerId: string,
    newSeed: string,
    newHash: string,
  ): Promise<{ revealed: ServerSeedRecord | null; active: ServerSeedRecord }>;
  setClientSeed(playerId: string, clientSeed: string): Promise<void>;
  incrementSeedNonce(seedId: string): Promise<number>;
  leaderboard(
    kind: LeaderboardKind,
    limit?: number,
  ): Promise<Array<{ playerId: string; name: string; avatar: AvatarId; value: number }>>;
  recordMatch(match: MatchRecord): Promise<void>;
  persist(): Promise<void>;
}

function defaultName(): string {
  const names = ['Griknak', 'Snazzle', 'Grimtoe', 'Coinbeard', 'Lootwick'];
  return names[Math.floor(Math.random() * names.length)] ?? 'Goblin';
}

export class MemoryStore implements Store {
  private players = new Map<string, PlayerRow>();
  private tokenIndex = new Map<string, string>();
  private bets: Array<BetRecord & { playerId: string; serverSeedId: string }> = [];
  private seeds = new Map<string, ServerSeedRecord>();
  private matches: MatchRecord[] = [];
  private readonly filePath: string | null;

  constructor(filePath: string | null) {
    this.filePath = filePath;
  }

  static async open(filePath: string | null): Promise<MemoryStore> {
    const store = new MemoryStore(filePath);
    if (filePath) {
      try {
        const raw = await readFile(filePath, 'utf8');
        store.hydrate(JSON.parse(raw) as PersistedSnapshot);
      } catch {
        // fresh store
      }
    }
    return store;
  }

  private hydrate(data: PersistedSnapshot): void {
    this.players = new Map(data.players);
    this.tokenIndex = new Map(data.tokenIndex);
    this.bets = data.bets;
    this.seeds = new Map(data.seeds);
    this.matches = data.matches;
  }

  async persist(): Promise<void> {
    if (!this.filePath) return;
    await mkdir(join(this.filePath, '..'), { recursive: true });
    const snapshot: PersistedSnapshot = {
      players: [...this.players.entries()],
      tokenIndex: [...this.tokenIndex.entries()],
      bets: this.bets,
      seeds: [...this.seeds.entries()],
      matches: this.matches,
    };
    await writeFile(this.filePath, JSON.stringify(snapshot, null, 2), 'utf8');
  }

  async getPlayerById(id: string): Promise<PlayerRow | null> {
    return this.players.get(id) ?? null;
  }

  async getPlayerByTokenHash(hash: string): Promise<PlayerRow | null> {
    const id = this.tokenIndex.get(hash);
    return id ? (this.players.get(id) ?? null) : null;
  }

  async createPlayer(input: {
    tokenHash: string;
    name: string;
    avatar: AvatarId;
  }): Promise<PlayerRow> {
    const id = crypto.randomUUID();
    const row: PlayerRow = {
      id,
      tokenHash: input.tokenHash,
      name: input.name || defaultName(),
      avatar: input.avatar,
      balance: STARTING_BALANCE,
      createdAt: Date.now(),
      lastBonusAt: null,
      versusWins: 0,
      clientSeed: randomHex(8),
      activeSeedId: null,
    };
    this.players.set(id, row);
    this.tokenIndex.set(input.tokenHash, id);
    await this.persist();
    return row;
  }

  async updatePlayer(
    id: string,
    patch: Partial<Pick<PlayerRow, 'name' | 'avatar' | 'balance' | 'lastBonusAt' | 'versusWins'>>,
  ): Promise<PlayerRow> {
    const row = this.players.get(id);
    if (!row) throw new Error('player not found');
    Object.assign(row, patch);
    await this.persist();
    return row;
  }

  async recordBet(
    bet: Omit<BetRecord, 'serverSeedHash'> & { playerId: string; serverSeedId: string },
  ): Promise<BetRecord> {
    const seed = this.seeds.get(bet.serverSeedId);
    const record: BetRecord = { ...bet, serverSeedHash: seed?.seedHash ?? '' };
    const stored = { ...record, playerId: bet.playerId, serverSeedId: bet.serverSeedId };
    this.bets.unshift(stored);
    if (this.bets.length > 5000) this.bets.length = 5000;
    await this.persist();
    return record;
  }

  async listBets(playerId: string, limit = 50): Promise<BetRecord[]> {
    return this.bets.filter((b) => b.playerId === playerId).slice(0, limit);
  }

  async getActiveSeed(playerId: string): Promise<ServerSeedRecord | null> {
    const player = this.players.get(playerId);
    if (!player?.activeSeedId) return null;
    return this.seeds.get(player.activeSeedId) ?? null;
  }

  async rotateSeed(
    playerId: string,
    newSeed: string,
    newHash: string,
  ): Promise<{ revealed: ServerSeedRecord | null; active: ServerSeedRecord }> {
    const player = this.players.get(playerId);
    if (!player) throw new Error('player not found');
    let revealed: ServerSeedRecord | null = null;
    if (player.activeSeedId) {
      const old = this.seeds.get(player.activeSeedId);
      if (old) {
        old.active = false;
        old.revealed = true;
        revealed = old;
      }
    }
    const active: ServerSeedRecord = {
      id: crypto.randomUUID(),
      playerId,
      seed: newSeed,
      seedHash: newHash,
      revealed: false,
      active: true,
      nonceCount: 0,
      createdAt: Date.now(),
    };
    this.seeds.set(active.id, active);
    player.activeSeedId = active.id;
    await this.persist();
    return { revealed, active };
  }

  async setClientSeed(playerId: string, clientSeed: string): Promise<void> {
    const player = this.players.get(playerId);
    if (!player) throw new Error('player not found');
    player.clientSeed = clientSeed;
    await this.persist();
  }

  async incrementSeedNonce(seedId: string): Promise<number> {
    const seed = this.seeds.get(seedId);
    if (!seed) throw new Error('seed not found');
    seed.nonceCount += 1;
    await this.persist();
    return seed.nonceCount - 1;
  }

  async leaderboard(kind: LeaderboardKind, limit = 20) {
    switch (kind) {
      case 'balance':
        return [...this.players.values()]
          .sort((a, b) => b.balance - a.balance)
          .slice(0, limit)
          .map((p) => ({ playerId: p.id, name: p.name, avatar: p.avatar, value: p.balance }));
      case 'versus_wins':
        return [...this.players.values()]
          .sort((a, b) => b.versusWins - a.versusWins)
          .slice(0, limit)
          .map((p) => ({ playerId: p.id, name: p.name, avatar: p.avatar, value: p.versusWins }));
      case 'biggest_win':
        return aggregateBetMetric(this.bets, this.players, 'payout', limit);
      case 'best_multiplier':
        return aggregateBetMetric(this.bets, this.players, 'multiplier', limit);
      default: {
        const exhaustive: never = kind;
        throw new Error(`Unhandled leaderboard kind: ${String(exhaustive)}`);
      }
    }
  }

  async recordMatch(match: MatchRecord): Promise<void> {
    this.matches.unshift(match);
    await this.persist();
  }
}

interface PersistedSnapshot {
  players: Array<[string, PlayerRow]>;
  tokenIndex: Array<[string, string]>;
  bets: Array<BetRecord & { playerId: string; serverSeedId: string }>;
  seeds: Array<[string, ServerSeedRecord]>;
  matches: MatchRecord[];
}

function aggregateBetMetric(
  bets: Array<BetRecord & { playerId: string; serverSeedId: string }>,
  players: Map<string, PlayerRow>,
  field: 'payout' | 'multiplier',
  limit: number,
) {
  const best = new Map<string, { playerId: string; name: string; avatar: AvatarId; value: number }>();
  for (const bet of bets) {
    const value = bet[field];
    const player = players.get(bet.playerId);
    const prev = best.get(bet.playerId);
    if (!prev || value > prev.value) {
      best.set(bet.playerId, {
        playerId: bet.playerId,
        name: player?.name ?? bet.playerId.slice(0, 8),
        avatar: player?.avatar ?? 'royal-goblin',
        value,
      });
    }
  }
  return [...best.values()].sort((a, b) => b.value - a.value).slice(0, limit);
}

function randomHex(bytes: number): string {
  return randomBytes(bytes).toString('hex');
}

export function toProfile(row: PlayerRow): PlayerProfile {
  return {
    id: row.id,
    name: row.name,
    avatar: row.avatar,
    balance: row.balance,
    createdAt: row.createdAt,
    lastBonusAt: row.lastBonusAt,
    versusWins: row.versusWins,
  };
}

export function tokenHash(token: string): string {
  return createHmac('sha256', 'token-index').update(token).digest('hex');
}
