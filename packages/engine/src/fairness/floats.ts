import type { Hasher } from './hmac';
import { bytesToHex } from './hmac';

/**
 * Provably-fair float generation (stake.com scheme).
 *
 * For a bet identified by (serverSeed, clientSeed, nonce), floats are drawn from
 * HMAC-SHA256(serverSeed, `${clientSeed}:${nonce}:${round}`) where `round`
 * increments once every 8 floats (32 bytes / 4 bytes per float).
 * Each float uses 4 bytes: f = b0/256 + b1/256^2 + b2/256^3 + b3/256^4, uniform in [0,1).
 */
export interface BetSeed {
  serverSeed: string;
  clientSeed: string;
  nonce: number;
}

export const FLOATS_PER_ROUND = 8;
const BYTES_PER_FLOAT = 4;

export function bytesToFloat(bytes: Uint8Array, offset: number): number {
  let result = 0;
  for (let i = 0; i < BYTES_PER_FLOAT; i++) {
    result += (bytes[offset + i] ?? 0) / 256 ** (i + 1);
  }
  return result;
}

/** Generate `count` uniform floats in [0,1) for a bet. */
export async function generateFloats(
  hasher: Hasher,
  seed: BetSeed,
  count: number,
): Promise<number[]> {
  const floats: number[] = [];
  let round = 0;
  while (floats.length < count) {
    const message = `${seed.clientSeed}:${seed.nonce}:${round}`;
    const digest = await hasher.hmacSha256(seed.serverSeed, message);
    for (let i = 0; i < FLOATS_PER_ROUND && floats.length < count; i++) {
      floats.push(bytesToFloat(digest, i * BYTES_PER_FLOAT));
    }
    round++;
  }
  return floats;
}

/** The public commitment for a server seed: its SHA-256 hex digest. */
export async function hashServerSeed(hasher: Hasher, serverSeed: string): Promise<string> {
  return bytesToHex(await hasher.sha256(serverSeed));
}
