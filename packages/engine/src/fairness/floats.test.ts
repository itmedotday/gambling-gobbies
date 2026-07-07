import { describe, it, expect } from 'vitest';
import { generateFloats, hashServerSeed, bytesToFloat } from './floats';
import { nodeHasher } from '../adapters/node';

const SEED = {
  serverSeed: 'f9c1a2b3d4e5f60718293a4b5c6d7e8f9091a2b3c4d5e6f708192a3b4c5d6e7f',
  clientSeed: 'goblin-client-seed',
  nonce: 1,
};

describe('provably-fair floats', () => {
  it('is deterministic for the same seed triple', async () => {
    const a = await generateFloats(nodeHasher, SEED, 5);
    const b = await generateFloats(nodeHasher, SEED, 5);
    expect(a).toEqual(b);
  });

  it('changes when nonce changes', async () => {
    const a = await generateFloats(nodeHasher, SEED, 1);
    const b = await generateFloats(nodeHasher, { ...SEED, nonce: 2 }, 1);
    expect(a[0]).not.toBe(b[0]);
  });

  it('changes when client seed changes', async () => {
    const a = await generateFloats(nodeHasher, SEED, 1);
    const b = await generateFloats(nodeHasher, { ...SEED, clientSeed: 'other' }, 1);
    expect(a[0]).not.toBe(b[0]);
  });

  it('produces floats strictly in [0, 1)', async () => {
    const floats = await generateFloats(nodeHasher, SEED, 64);
    for (const f of floats) {
      expect(f).toBeGreaterThanOrEqual(0);
      expect(f).toBeLessThan(1);
    }
  });

  it('crosses HMAC rounds seamlessly (more than 8 floats)', async () => {
    const twelve = await generateFloats(nodeHasher, SEED, 12);
    const eight = await generateFloats(nodeHasher, SEED, 8);
    expect(twelve.slice(0, 8)).toEqual(eight);
    expect(new Set(twelve).size).toBe(12);
  });

  it('is roughly uniform (mean near 0.5 over many draws)', async () => {
    let sum = 0;
    const n = 2000;
    for (let nonce = 0; nonce < n / 8; nonce++) {
      const floats = await generateFloats(nodeHasher, { ...SEED, nonce }, 8);
      sum += floats.reduce((a, b) => a + b, 0);
    }
    const mean = sum / n;
    expect(mean).toBeGreaterThan(0.47);
    expect(mean).toBeLessThan(0.53);
  });

  it('hashes server seeds to 64-char hex commitments', async () => {
    const hash = await hashServerSeed(nodeHasher, SEED.serverSeed);
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
    // SHA-256 is deterministic — a changed seed must change the commitment.
    expect(await hashServerSeed(nodeHasher, 'x')).not.toBe(hash);
  });

  it('bytesToFloat maxes below 1 and mins at 0', () => {
    expect(bytesToFloat(new Uint8Array([0, 0, 0, 0]), 0)).toBe(0);
    expect(bytesToFloat(new Uint8Array([255, 255, 255, 255]), 0)).toBeLessThan(1);
  });
});
