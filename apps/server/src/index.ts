import { loadEnv } from './env';

// Colyseus + Express app lands here in milestone M5.
const env = loadEnv();
console.log(`[gobbies-server] configured for port ${env.port} (server implementation arrives in M5)`);
