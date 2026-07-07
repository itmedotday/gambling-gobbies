import { Router } from 'express';
import { z } from 'zod';
import {
  ALL_AVATAR_IDS,
  DAILY_BONUS_AMOUNT,
  DAILY_BONUS_COOLDOWN_MS,
  MIN_BET,
  type AvatarId,
  type LeaderboardKind,
} from '@gobbies/shared';
import { generateFloats } from '@gobbies/engine';
import { nodeHasher, randomSeedHex } from '@gobbies/engine/node';
import { hashServerSeed } from '@gobbies/engine';
import type { AppContext } from './middleware.js';
import {
  createAuthMiddleware,
  ensureSeed,
  toProfile,
  type AuthedRequest,
} from './middleware.js';
import { signPlayerToken, randomToken } from '../auth/tokens.js';
import { tokenHash } from '../db/memoryStore.js';
import { floatCountFor, payoutMatches } from '../game/resolveBet.js';

const avatarSchema = z.enum(ALL_AVATAR_IDS as [string, ...string[]]);

export function createApiRouter(ctx: AppContext): Router {
  const router = Router();
  const auth = createAuthMiddleware(ctx);

  router.post('/auth/guest', async (req, res) => {
    const body = z
      .object({
        name: z.string().trim().min(1).max(24).optional(),
        avatar: avatarSchema.optional(),
      })
      .safeParse(req.body);
    const token = randomToken();
    const player = await ctx.store.createPlayer({
      tokenHash: tokenHash(token),
      name: body.success ? (body.data.name ?? '') : '',
      avatar: (body.success && body.data.avatar ? body.data.avatar : 'royal-goblin') as AvatarId,
    });
    const signed = signPlayerToken(ctx.env.tokenSigningSecret, player.id);
    await ensureSeed(ctx, player.id);
    res.json({ token: signed, player: toProfile(player) });
  });

  router.get('/profile', auth, async (req, res) => {
    const player = await ctx.store.getPlayerById((req as AuthedRequest).playerId);
    if (!player) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    res.json({ player: toProfile(player) });
  });

  router.patch('/profile', auth, async (req, res) => {
    const body = z
      .object({
        name: z.string().trim().min(1).max(24).optional(),
        avatar: avatarSchema.optional(),
      })
      .safeParse(req.body);
    if (!body.success) {
      res.status(400).json({ error: 'Invalid profile update' });
      return;
    }
    const patch: { name?: string; avatar?: AvatarId } = {};
    if (body.data.name !== undefined) patch.name = body.data.name;
    if (body.data.avatar !== undefined) patch.avatar = body.data.avatar as AvatarId;
    const player = await ctx.store.updatePlayer((req as AuthedRequest).playerId, patch);
    res.json({ player: toProfile(player) });
  });

  router.get('/bets', auth, async (req, res) => {
    const bets = await ctx.store.listBets((req as AuthedRequest).playerId);
    res.json({ bets });
  });

  router.post('/bets', auth, async (req, res) => {
    const body = z
      .object({
        game: z.enum(['coinflip', 'dice', 'wheel', 'd20', 'crash', 'mines']),
        amount: z.number().finite().min(MIN_BET),
        payout: z.number().finite().min(0),
        multiplier: z.number().finite().min(0),
        clientSeed: z.string().min(1),
        nonce: z.number().int().min(0),
        detail: z.string(),
        params: z.record(z.string(), z.unknown()),
      })
      .safeParse(req.body);
    if (!body.success) {
      res.status(400).json({ error: 'Invalid bet payload' });
      return;
    }
    const playerId = (req as AuthedRequest).playerId;
    const player = await ctx.store.getPlayerById(playerId);
    if (!player) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    if (body.data.amount > player.balance) {
      res.status(400).json({ error: 'Insufficient balance' });
      return;
    }
    const seed = await ensureSeed(ctx, playerId);
    const floats = await generateFloats(
      nodeHasher,
      { serverSeed: seed.seed, clientSeed: body.data.clientSeed, nonce: body.data.nonce },
      floatCountFor(body.data.game, body.data.params),
    );
    if (!payoutMatches(body.data.game, body.data.amount, body.data.params, floats, body.data.payout)) {
      res.status(400).json({ error: 'Payout verification failed' });
      return;
    }
    const net = body.data.payout - body.data.amount;
    const updated = await ctx.store.updatePlayer(playerId, {
      balance: Math.max(0, Math.round((player.balance + net) * 100) / 100),
    });
    const bet = await ctx.store.recordBet({
      id: crypto.randomUUID(),
      playerId,
      serverSeedId: seed.id,
      game: body.data.game,
      amount: body.data.amount,
      payout: body.data.payout,
      multiplier: body.data.multiplier,
      clientSeed: body.data.clientSeed,
      nonce: body.data.nonce,
      detail: body.data.detail,
      createdAt: Date.now(),
    });
    res.json({ accepted: true, balance: updated.balance, bet });
  });

  router.get('/fairness', auth, async (req, res) => {
    const player = await ctx.store.getPlayerById((req as AuthedRequest).playerId);
    if (!player) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    const seed = await ensureSeed(ctx, player.id);
    res.json({
      activeSeedHash: seed.seedHash,
      activeSeedRevealed: seed.revealed ? seed.seed : null,
      clientSeed: player.clientSeed,
      nonce: seed.nonceCount,
    });
  });

  router.post('/fairness/rotate', auth, async (req, res) => {
    const playerId = (req as AuthedRequest).playerId;
    const serverSeed = randomSeedHex();
    const seedHash = await hashServerSeed(nodeHasher, serverSeed);
    const { revealed, active } = await ctx.store.rotateSeed(playerId, serverSeed, seedHash);
    res.json({
      revealedSeed: revealed?.seed ?? '',
      newSeedHash: active.seedHash,
      nonce: active.nonceCount,
    });
  });

  router.patch('/fairness/client-seed', auth, async (req, res) => {
    const body = z.object({ clientSeed: z.string().min(1).max(64) }).safeParse(req.body);
    if (!body.success) {
      res.status(400).json({ error: 'Invalid client seed' });
      return;
    }
    await ctx.store.setClientSeed((req as AuthedRequest).playerId, body.data.clientSeed);
    res.json({ ok: true });
  });

  router.post('/daily-bonus', auth, async (req, res) => {
    const player = await ctx.store.getPlayerById((req as AuthedRequest).playerId);
    if (!player) {
      res.status(404).json({ error: 'Player not found' });
      return;
    }
    const now = Date.now();
    if (player.lastBonusAt !== null && now - player.lastBonusAt < DAILY_BONUS_COOLDOWN_MS) {
      res.status(400).json({ error: 'Daily bonus not ready yet' });
      return;
    }
    const updated = await ctx.store.updatePlayer(player.id, {
      balance: player.balance + DAILY_BONUS_AMOUNT,
      lastBonusAt: now,
    });
    res.json({ player: toProfile(updated) });
  });

  router.get('/leaderboard/:kind', async (req, res) => {
    const kind = req.params.kind as LeaderboardKind;
    const allowed: LeaderboardKind[] = ['balance', 'biggest_win', 'best_multiplier', 'versus_wins'];
    if (!allowed.includes(kind)) {
      res.status(400).json({ error: 'Unknown leaderboard kind' });
      return;
    }
    const rows = await ctx.store.leaderboard(kind);
    res.json({
      entries: rows.map((row, i) => ({
        rank: i + 1,
        playerId: row.playerId,
        name: row.name,
        avatar: row.avatar,
        value: row.value,
      })),
    });
  });

  router.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  return router;
}
