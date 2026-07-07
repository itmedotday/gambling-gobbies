import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export function randomToken(): string {
  return randomBytes(32).toString('hex');
}

export function signPlayerToken(secret: string, playerId: string): string {
  const sig = createHmac('sha256', secret).update(playerId).digest('base64url');
  return `${playerId}.${sig}`;
}

export function verifyPlayerToken(secret: string, token: string): string | null {
  const dot = token.indexOf('.');
  if (dot <= 0) return null;
  const playerId = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = createHmac('sha256', secret).update(playerId).digest('base64url');
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  return playerId;
}
