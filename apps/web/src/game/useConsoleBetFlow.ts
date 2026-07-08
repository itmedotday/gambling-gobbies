import { useRef, useCallback, useEffect } from 'react';
import type { SettleOptions } from '@/game/useConsoleBet';

type ConsoleBetApi = {
  versusBetting: boolean;
  beginBet: () => Promise<number[] | null>;
  beginVersusBet: (params: Record<string, unknown>) => Promise<number[] | null>;
  arm: (floats: readonly number[]) => void;
  settleOutcome: (options: SettleOptions) => void;
  settleVersusOutcome: () => void;
};

/**
 * Shared solo/versus bet orchestration for console game pages:
 * debit → resolve → arm animation → settle on complete.
 */
export function useConsoleBetFlow(
  bet: ConsoleBetApi,
  versusParams: () => Record<string, unknown>,
  resolve: (floats: number[]) => SettleOptions,
) {
  const pendingRef = useRef<SettleOptions | null>(null);
  const versusParamsRef = useRef(versusParams);
  const resolveRef = useRef(resolve);
  useEffect(() => {
    versusParamsRef.current = versusParams;
    resolveRef.current = resolve;
  }, [versusParams, resolve]);

  const handleBet = useCallback(async () => {
    if (bet.versusBetting) {
      const floats = await bet.beginVersusBet(versusParamsRef.current());
      if (!floats) return;
      bet.arm(floats);
      return;
    }
    const floats = await bet.beginBet();
    if (!floats) return;
    pendingRef.current = resolveRef.current(floats);
    bet.arm(floats);
  }, [bet]);

  const handleComplete = useCallback(() => {
    if (bet.versusBetting) {
      bet.settleVersusOutcome();
      return;
    }
    const pending = pendingRef.current;
    if (!pending) return;
    pendingRef.current = null;
    bet.settleOutcome(pending);
  }, [bet]);

  return { handleBet, handleComplete };
}
