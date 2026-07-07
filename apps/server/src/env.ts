/** Validates required environment at startup; fails fast on misconfiguration. */
export interface ServerEnv {
  port: number;
  corsOrigin: string;
  databaseUrl: string | null;
  tokenSigningSecret: string;
}

export function loadEnv(): ServerEnv {
  const port = Number(process.env.PORT ?? 2567);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error(`Invalid PORT: ${process.env.PORT}`);
  }
  const isProd = process.env.NODE_ENV === 'production';
  const tokenSigningSecret = process.env.TOKEN_SIGNING_SECRET ?? (isProd ? '' : 'dev-secret');
  if (!tokenSigningSecret) {
    throw new Error('TOKEN_SIGNING_SECRET is required in production');
  }
  const databaseUrl = process.env.DATABASE_URL ?? null;
  if (isProd && !databaseUrl) {
    throw new Error('DATABASE_URL is required in production');
  }
  return {
    port,
    corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    databaseUrl,
    tokenSigningSecret,
  };
}
