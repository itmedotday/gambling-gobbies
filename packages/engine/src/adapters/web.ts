import type { Hasher } from '../fairness/hmac';

const encoder = new TextEncoder();

export const webHasher: Hasher = {
  hmacSha256: async (key, message) => {
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(key),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign'],
    );
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message));
    return new Uint8Array(signature);
  },
  sha256: async (message) => {
    const digest = await crypto.subtle.digest('SHA-256', encoder.encode(message));
    return new Uint8Array(digest);
  },
};

/** Cryptographically random 32-byte hex string (client seed generation). */
export function randomSeedHex(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  let hex = '';
  for (const byte of bytes) hex += byte.toString(16).padStart(2, '0');
  return hex;
}
