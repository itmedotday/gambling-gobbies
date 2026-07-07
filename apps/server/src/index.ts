import { listen } from '@colyseus/tools';
import app from './app.js';
import { loadEnv } from './env.js';

const env = loadEnv();

listen(app, env.port).then(() => {
  console.log(`[gobbies-server] listening on http://localhost:${env.port}`);
});
