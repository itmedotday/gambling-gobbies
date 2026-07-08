import { generateFloats } from '@gobbies/engine';
import { webHasher } from '@gobbies/engine/web';
import type { GameId } from '@gobbies/shared';
import { useWalletStore } from '@/stores/walletStore';
import { useFairnessStore } from '@/stores/fairnessStore';
import { useLedgerStore } from '@/stores/ledgerStore';
import { validateBet } from '@/game/validateBet';

export interface SoloBetResolution {
  multiplier: number;
  isWin: boolean;
  /** Ledger summary, e.g. "Rolled 63.41". */
  detail: string;
}

export interface SoloBetResult<T extends SoloBetResolution> {
  ok: boolean;
  error?: string;
  outcome?: T;
  payout?: number;
  nonce?: number;
}

/**
 * The solo-mode settlement flow. Debits the bet, draws provably-fair floats
 * from the local seed pair, resolves the outcome, credits the payout, and
 * records the ledger entry. This is the only code path that moves money in
 * solo mode (via walletStore.settle).
 */
export async function placeSoloBet<T extends SoloBetResolution>(options: {
  game: GameId;
  amount: number;
  floatCount: number;
  resolve: (floats: number[]) => T;
}): Promise<SoloBetResult<T>> {
  const wallet = useWalletStore.getState();
  const error = validateBet(options.amount, wallet.balance, true);
  if (error) return { ok: false, error };

  wallet.settle(-options.amount);
  const seed = useFairnessStore.getState().consumeNonce();
  const floats = await generateFloats(webHasher, seed, options.floatCount);
  const outcome = options.resolve(floats);
  const payout = Math.floor(options.amount * outcome.multiplier * 100) / 100;
  if (payout > 0) {
    useWalletStore.getState().settle(payout);
  }
  useLedgerStore.getState().record({
    id: `${seed.nonce}-${Date.now()}`,
    game: options.game,
    bet: options.amount,
    detail: outcome.detail,
    multiplier: outcome.multiplier,
    payout,
    isWin: outcome.isWin,
    timestamp: Date.now(),
    nonce: seed.nonce,
  });
  return { ok: true, outcome, payout, nonce: seed.nonce };
}
