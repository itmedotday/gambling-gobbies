import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import type { GameId } from '@gobbies/shared';
import { isVersusInstantGame } from '@gobbies/shared';
import { useVersusStore } from '@/stores/versusStore';
import { useSessionStore } from '@/stores/sessionStore';
import { useWalletStore } from '@/stores/walletStore';

export type PlayMode = 'solo' | 'versus';

export interface PlayModeContext {
  mode: PlayMode;
  versusCode: string | null;
  balance: number;
  /** Whether this game can route bets through versus place_bet. */
  versusBetting: boolean;
}

/**
 * Resolves solo vs versus play from the route and Colyseus room state.
 * Versus play routes: /versus/:code/play/:gameId
 */
export function usePlayMode(game?: GameId): PlayModeContext {
  const { code: routeCode } = useParams<{ code?: string }>();
  const view = useVersusStore((s) => s.view);
  const room = useVersusStore((s) => s.room);
  const soloBalance = useWalletStore((s) => s.balance);
  const myId = useSessionStore((s) => s.player?.id);

  return useMemo(() => {
    const versusCode = routeCode?.toUpperCase() ?? view?.code ?? null;
    const inVersusRoom = Boolean(room && view && versusCode && view.code === versusCode);
    const live = inVersusRoom && view?.phase === 'live';
    const instantGame = game ? isVersusInstantGame(game) : false;
    const versusBetting = Boolean(live && instantGame);

    if (live && view) {
      const me = view.players.find((p) => p.playerId === myId);
      return {
        mode: 'versus',
        versusCode,
        balance: me?.balance ?? 0,
        versusBetting,
      };
    }

    return {
      mode: 'solo',
      versusCode: inVersusRoom ? versusCode : null,
      balance: soloBalance,
      versusBetting: false,
    };
  }, [routeCode, view, room, soloBalance, myId, game]);
}
