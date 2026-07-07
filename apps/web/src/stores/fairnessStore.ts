import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { randomSeedHex } from '@gobbies/engine/web';

/**
 * Solo-mode provably-fair seed pair, held locally until the server takes over
 * seed custody in M5. Every bet consumes one nonce.
 */
interface FairnessState {
  serverSeed: string;
  clientSeed: string;
  nonce: number;
  /** Returns the seed triple for the next bet and increments the nonce. */
  consumeNonce: () => { serverSeed: string; clientSeed: string; nonce: number };
  setClientSeed: (seed: string) => void;
  rotateServerSeed: () => void;
}

export const useFairnessStore = create<FairnessState>()(
  persist(
    (set, get) => ({
      serverSeed: randomSeedHex(),
      clientSeed: randomSeedHex().slice(0, 16),
      nonce: 0,
      consumeNonce: () => {
        const { serverSeed, clientSeed, nonce } = get();
        set({ nonce: nonce + 1 });
        return { serverSeed, clientSeed, nonce };
      },
      setClientSeed: (clientSeed) => set({ clientSeed, nonce: 0 }),
      rotateServerSeed: () => set({ serverSeed: randomSeedHex(), nonce: 0 }),
    }),
    { name: 'gobbies-fairness' },
  ),
);
