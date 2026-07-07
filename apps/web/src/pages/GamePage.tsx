import { useParams, Navigate } from 'react-router-dom';
import { ALL_GAME_IDS, type GameId } from '@gobbies/shared';
import CoinFlipPage from './games/CoinFlipPage';
import DicePage from './games/DicePage';
import WheelPage from './games/WheelPage';
import D20Page from './games/D20Page';
import CrashPage from './games/CrashPage';
import MinesPage from './games/MinesPage';

function isGameId(value: string): value is GameId {
  return (ALL_GAME_IDS as readonly string[]).includes(value);
}

export default function GamePage() {
  const { gameId } = useParams<{ gameId: string }>();
  if (!gameId || !isGameId(gameId)) {
    return <Navigate to="/lobby" replace />;
  }

  switch (gameId) {
    case 'coinflip':
      return <CoinFlipPage />;
    case 'dice':
      return <DicePage />;
    case 'wheel':
      return <WheelPage />;
    case 'd20':
      return <D20Page />;
    case 'crash':
      return <CrashPage />;
    case 'mines':
      return <MinesPage />;
    default: {
      const exhaustive: never = gameId;
      throw new Error(`Unhandled game: ${String(exhaustive)}`);
    }
  }
}
