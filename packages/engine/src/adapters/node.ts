import { createHmac, createHash, randomBytes } from 'node:crypto';
import type { Hasher } from '../fairness/hmac';

export const nodeHasher: Hasher = {
  hmacSha256: async (key, message) =>
    new Uint8Array(createHmac('sha256', key).update(message).digest()),
  sha256: async (message) => new Uint8Array(createHash('sha256').update(message).digest()),
};

/** Cryptographically random 32-byte hex string (server seed generation). */
export function randomSeedHex(): string {
  return randomBytes(32).toString('hex');
}
