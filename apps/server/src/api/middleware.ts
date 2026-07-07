import type { NextFunction, Request, Response } from 'express';
import type { ServerEnv } from '../env.js';
import type { Store } from '../db/memoryStore.js';
import { verifyPlayerToken } from '../auth/tokens.js';
import { tokenHash, toProfile } from '../db/memoryStore.js';

export interface AppContext {
  env: ServerEnv;
  store: Store;
}

export interface AuthedRequest extends Request {
  playerId: string;
}

export function createAuthMiddleware(ctx: AppContext) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const header = req.header('authorization');
    const token = header?.startsWith('Bearer ') ? header.slice(7) : req.header('x-gobbie-token');
    if (!token) {
      res.status(401).json({ error: 'Missing auth token' });
      return;
    }
    const playerId = verifyPlayerToken(ctx.env.tokenSigningSecret, token);
    if (!playerId) {
      res.status(401).json({ error: 'Invalid auth token' });
      return;
    }
    const player = await ctx.store.getPlayerById(playerId);
    if (!player) {
      res.status(401).json({ error: 'Player not found' });
      return;
    }
    (req as AuthedRequest).playerId = playerId;
    next();
  };
}

export async function ensureSeed(ctx: AppContext, playerId: string) {
  let seed = await ctx.store.getActiveSeed(playerId);
  if (!seed) {
    const { nodeHasher, randomSeedHex } = await import('@gobbies/engine/node');
    const { hashServerSeed } = await import('@gobbies/engine');
    const serverSeed = randomSeedHex();
    const seedHash = await hashServerSeed(nodeHasher, serverSeed);
    const rotated = await ctx.store.rotateSeed(playerId, serverSeed, seedHash);
    seed = rotated.active;
  }
  return seed;
}

export { tokenHash, toProfile };
