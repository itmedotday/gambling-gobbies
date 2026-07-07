import config from '@colyseus/tools';
import express from 'express';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from './env.js';
import { MemoryStore } from './db/memoryStore.js';
import { createApiRouter } from './api/router.js';
import type { AppContext } from './api/middleware.js';
import { VersusRoom } from './rooms/VersusRoom.js';

const env = loadEnv();
const here = dirname(fileURLToPath(import.meta.url));
const storePath = env.databaseUrl ? null : join(here, '..', '.data', 'dev-store.json');
const store = await MemoryStore.open(storePath);
VersusRoom.store = store;

const ctx: AppContext = { env, store };

export default config({
  initializeExpress: (app) => {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', env.corsOrigin);
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Gobbie-Token');
      if (req.method === 'OPTIONS') {
        res.sendStatus(204);
        return;
      }
      next();
    });
    app.use(express.json());
    app.use('/api', createApiRouter(ctx));
  },
  initializeGameServer: (gameServer) => {
    gameServer.define('versus', VersusRoom).filterBy(['code']);
  },
});
