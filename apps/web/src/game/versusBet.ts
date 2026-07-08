import type { GameId, VersusServerMessage } from '@gobbies/shared';
import { validateBet } from '@/game/validateBet';
import { useVersusStore } from '@/stores/versusStore';

export interface VersusBetResult {
  floats: number[];
  amount: number;
  nonce: number;
  detail: string;
  isWin: boolean;
  multiplier: number;
  payout: number;
  balance: number;
}

type BetResultMessage = Extract<VersusServerMessage, { type: 'bet_result' }>;

let pendingResolve: ((result: VersusBetResult) => void) | null = null;
let pendingReject: ((error: Error) => void) | null = null;
let pendingAmount = 0;

/** Called by versusStore when a bet_result message arrives. */
export function deliverVersusBetResult(message: BetResultMessage): void {
  if (!pendingResolve) return;
  const resolve = pendingResolve;
  const amount = pendingAmount;
  pendingResolve = null;
  pendingReject = null;
  pendingAmount = 0;
  const multiplier =
    message.isWin && amount > 0 ? Math.round((message.payout / amount) * 10000) / 10000 : 0;
  resolve({
    floats: message.floats,
    amount,
    nonce: Date.now(),
    detail: message.detail,
    isWin: message.isWin,
    multiplier,
    payout: message.payout,
    balance: message.balance,
  });
}

export function rejectVersusBet(error: Error): void {
  pendingReject?.(error);
  pendingResolve = null;
  pendingReject = null;
}

const BET_TIMEOUT_MS = 15_000;

export type PlaceVersusBetResult =
  | { ok: true; bet: VersusBetResult }
  | { ok: false; error: string };

/**
 * Send place_bet to the versus room and wait for bet_result.
 * Server is the source of truth for outcome and balance.
 */
export function placeVersusBet(options: {
  game: GameId;
  amount: number;
  params: Record<string, unknown>;
  balance: number;
}): Promise<PlaceVersusBetResult> {
  const error = validateBet(options.amount, options.balance);
  if (error) return Promise.resolve({ ok: false, error });

  const room = useVersusStore.getState().room;
  if (!room) {
    return Promise.resolve({ ok: false, error: 'Not connected to a versus room' });
  }
  if (pendingResolve) {
    return Promise.resolve({ ok: false, error: 'Bet already in progress' });
  }

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      pendingResolve = null;
      pendingReject = null;
      resolve({ ok: false, error: 'Versus bet timed out' });
    }, BET_TIMEOUT_MS);

    pendingResolve = (result) => {
      clearTimeout(timer);
      resolve({ ok: true, bet: result });
    };
    pendingReject = (err) => {
      clearTimeout(timer);
      resolve({ ok: false, error: err.message });
    };

    pendingAmount = options.amount;
    room.send('msg', {
      type: 'place_bet',
      game: options.game,
      amount: options.amount,
      params: options.params,
    });
  });
}
