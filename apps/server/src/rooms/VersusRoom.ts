import type { Delayed } from '@colyseus/timer';
import { Room, type Client } from '@colyseus/core';
import { generateFloats } from '@gobbies/engine';
import { nodeHasher, randomSeedHex } from '@gobbies/engine/node';
import type { GameId, VersusClientMessage } from '@gobbies/shared';
import { MIN_BET } from '@gobbies/shared';
import type { Store } from '../db/memoryStore.js';
import { VersusPlayerState, VersusState } from './schema.js';
import { floatCountFor, resolveBet } from '../game/resolveBet.js';

const COUNTDOWN_MS = 3000;
const SNAPSHOT_INTERVAL_MS = 2000;
const RECONNECT_GRACE_MS = 60_000;

function generateCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)] ?? 'G';
  }
  return code;
}

interface JoinOptions {
  code?: string;
  playerId: string;
  name: string;
  avatar: string;
  durationMs?: number;
  startingBankroll?: number;
}

export class VersusRoom extends Room {
  static store: Store;

  private serverSeed = randomSeedHex();
  private clientSeed = 'versus-room';
  private nonce = 0;
  private timerTick: Delayed | null = null;
  private snapshotTick: Delayed | null = null;
  private disconnectTimers = new Map<string, Delayed>();

  override maxClients = 2;

  private get s(): VersusState {
    return this.state as VersusState;
  }

  override onCreate(options: JoinOptions) {
    this.setState(new VersusState());
    this.s.code = options.code ?? generateCode();
    this.s.durationMs = options.durationMs ?? 300_000;
    this.s.phase = 'waiting';
    this.setMetadata({ code: this.s.code });

    this.onMessage('msg', (client, message: VersusClientMessage) => {
      void this.handleMessage(client, message);
    });
  }

  override async onJoin(client: Client, options: JoinOptions) {
    const player = new VersusPlayerState();
    player.sessionId = client.sessionId;
    player.playerId = options.playerId;
    player.name = options.name;
    player.avatar = options.avatar;
    player.balance = options.startingBankroll ?? 1000;
    player.startingBalance = player.balance;
    this.s.players.set(client.sessionId, player);
    this.pushEvent(`${options.name} joined the tavern.`);
    client.send('joined', { code: this.s.code });
  }

  override async onLeave(client: Client, code?: number) {
    const player = this.s.players.get(client.sessionId);
    if (!player) return;
    player.disconnected = true;
    if (code === undefined || this.s.phase === 'finished') {
      this.s.players.delete(client.sessionId);
      return;
    }
    this.pushEvent(`${player.name} disconnected…`);
    const timer = this.clock.setTimeout(() => {
      this.forfeitPlayer(client.sessionId, 'disconnect');
    }, RECONNECT_GRACE_MS);
    this.disconnectTimers.set(client.sessionId, timer);
  }

  override async onReconnect(client: Client) {
    const timer = this.disconnectTimers.get(client.sessionId);
    if (timer) timer.clear();
    this.disconnectTimers.delete(client.sessionId);
    const player = this.s.players.get(client.sessionId);
    if (player) {
      player.disconnected = false;
      this.pushEvent(`${player.name} reconnected.`);
    }
  }

  private async handleMessage(client: Client, message: VersusClientMessage) {
    switch (message.type) {
      case 'ready':
        this.setReady(client.sessionId, true);
        break;
      case 'forfeit':
        this.forfeitPlayer(client.sessionId, 'forfeit');
        break;
      case 'rematch_accept':
        this.tryRematch();
        break;
      case 'emote':
        this.pushEvent(`${this.playerName(client.sessionId)} ${message.emote}!`);
        break;
      case 'place_bet':
        await this.placeBet(client.sessionId, message.game, message.amount, message.params);
        break;
      default: {
        const exhaustive: never = message;
        client.send('error', { message: `Unknown message: ${String(exhaustive)}` });
      }
    }
  }

  private setReady(sessionId: string, ready: boolean) {
    const player = this.s.players.get(sessionId);
    if (!player) return;
    player.ready = ready;
    if (this.allReady() && this.s.players.size === 2) {
      this.beginCountdown();
    }
  }

  private allReady(): boolean {
    let count = 0;
    this.s.players.forEach((p) => {
      if (p.ready) count += 1;
    });
    return count === 2;
  }

  private beginCountdown() {
    this.s.phase = 'countdown';
    this.s.timerRemainingMs = this.s.durationMs;
    this.pushEvent('Both goblins ready — countdown!');
    this.clock.setTimeout(() => this.beginLive(), COUNTDOWN_MS);
  }

  private beginLive() {
    this.s.phase = 'live';
    this.pushSnapshot();
    this.timerTick = this.clock.setInterval(() => {
      this.s.timerRemainingMs = Math.max(0, this.s.timerRemainingMs - 1000);
      if (this.s.timerRemainingMs <= 0) {
        this.finishMatch('timer');
      }
    }, 1000);
    this.snapshotTick = this.clock.setInterval(() => this.pushSnapshot(), SNAPSHOT_INTERVAL_MS);
  }

  private async placeBet(
    sessionId: string,
    game: GameId,
    amount: number,
    params: Record<string, unknown>,
  ) {
    if (this.s.phase !== 'live') return;
    const player = this.s.players.get(sessionId);
    if (!player || amount < MIN_BET || amount > player.balance) return;

    player.balance = Math.round((player.balance - amount) * 100) / 100;
    const floats = await generateFloats(
      nodeHasher,
      { serverSeed: this.serverSeed, clientSeed: this.clientSeed, nonce: this.nonce++ },
      floatCountFor(game, params),
    );
    const outcome = resolveBet(game, amount, params, floats);
    if (outcome.payout > 0) {
      player.balance = Math.round((player.balance + outcome.payout) * 100) / 100;
    }
    this.pushEvent(
      `${player.name} ${outcome.isWin ? 'won' : 'lost'} ${Math.abs(outcome.payout - amount).toFixed(0)} GG on ${game}`,
    );
    this.pushSnapshot();
    const client = this.clients.find((c) => c.sessionId === sessionId);
    client?.send('bet_result', {
      type: 'bet_result',
      game,
      isWin: outcome.isWin,
      payout: outcome.payout,
      balance: player.balance,
      detail: outcome.detail,
      floats,
    });
    if (player.balance <= 0) {
      this.clock.setTimeout(() => this.checkBankruptcyKo(), 30_000);
    }
  }

  private checkBankruptcyKo() {
    if (this.s.phase !== 'live') return;
    const broke = [...this.s.players.values()].filter((p) => p.balance <= 0);
    if (broke.length === 1) {
      const winner = [...this.s.players.values()].find((p) => p.balance > 0);
      if (winner) this.finishMatch('bankruptcy', winner.playerId);
    }
  }

  private forfeitPlayer(sessionId: string, reason: string) {
    const forfeiter = this.s.players.get(sessionId);
    const winner = [...this.s.players.values()].find((p) => p.sessionId !== sessionId);
    if (forfeiter && winner) {
      this.finishMatch(reason, winner.playerId);
    }
  }

  private finishMatch(reason: string, winnerId?: string) {
    if (this.s.phase === 'finished') return;
    this.s.phase = 'finished';
    this.s.endedReason = reason;
    this.timerTick?.clear();
    this.snapshotTick?.clear();
    this.timerTick = null;
    this.snapshotTick = null;

    let winner = winnerId;
    if (!winner) {
      const sorted = [...this.s.players.values()].sort((a, b) => b.balance - a.balance);
      winner = sorted[0]?.playerId ?? '';
      const second = sorted[1];
      if (second && Math.abs(sorted[0]!.balance - second.balance) < 0.01) {
        this.s.endedReason = 'tie_coinflip_pending';
      }
    }
    this.s.winnerId = winner ?? '';
    this.pushEvent(`Match over — ${reason}. Winner: ${this.s.winnerId}`);
    this.pushSnapshot();
    void VersusRoom.store.recordMatch({
      id: crypto.randomUUID(),
      code: this.s.code,
      winnerId: this.s.winnerId || null,
      endedReason: reason,
      startedAt: Date.now() - (this.s.durationMs - this.s.timerRemainingMs),
      endedAt: Date.now(),
    });
  }

  private tryRematch() {
    if (this.s.phase !== 'finished') return;
    this.s.players.forEach((p) => {
      p.ready = false;
      p.balance = p.startingBalance;
      p.disconnected = false;
    });
    this.s.phase = 'waiting';
    this.s.winnerId = '';
    this.s.endedReason = '';
    this.s.eventFeed.clear();
    this.s.snapshots.clear();
    this.s.timerRemainingMs = this.s.durationMs;
    this.serverSeed = randomSeedHex();
    this.nonce = 0;
  }

  private pushSnapshot() {
    const balances: Record<string, number> = {};
    this.s.players.forEach((p) => {
      balances[p.playerId] = p.balance;
    });
    this.s.snapshots.push(JSON.stringify({ at: Date.now(), balances }));
    if (this.s.snapshots.length > 120) this.s.snapshots.shift();
  }

  private pushEvent(message: string) {
    this.s.eventFeed.push(message);
    if (this.s.eventFeed.length > 40) this.s.eventFeed.shift();
  }

  private playerName(sessionId: string): string {
    return this.s.players.get(sessionId)?.name ?? 'Goblin';
  }

  override onDispose() {
    this.timerTick?.clear();
    this.snapshotTick?.clear();
  }
}
