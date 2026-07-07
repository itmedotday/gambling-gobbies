/**
 * Hashing is injected so the same engine runs on Node (node:crypto) and in the
 * browser (WebCrypto). Adapters live in src/adapters and are exported via the
 * package subpaths `@gobbies/engine/node` and `@gobbies/engine/web`.
 */
export type HmacSha256 = (key: string, message: string) => Promise<Uint8Array>;
export type Sha256 = (message: string) => Promise<Uint8Array>;

export interface Hasher {
  hmacSha256: HmacSha256;
  sha256: Sha256;
}

export function bytesToHex(bytes: Uint8Array): string {
  let hex = '';
  for (const byte of bytes) {
    hex += byte.toString(16).padStart(2, '0');
  }
  return hex;
}
