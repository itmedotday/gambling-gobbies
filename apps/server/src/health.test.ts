import { describe, expect, it } from 'vitest';
import { loadEnv } from './env.js';

describe('loadEnv', () => {
  it('allows production without DATABASE_URL (file-backed store)', () => {
    const prev = { ...process.env };
    process.env.NODE_ENV = 'production';
    process.env.TOKEN_SIGNING_SECRET = 'test-secret';
    delete process.env.DATABASE_URL;
    expect(() => loadEnv()).not.toThrow();
    process.env = prev;
  });
});
