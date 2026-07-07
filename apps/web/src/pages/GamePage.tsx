import { useParams, Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/8bit/card';
import { GAME_META, ALL_GAME_IDS, type GameId } from '@gobbies/shared';
import CoinFlipPage from './games/CoinFlipPage';
import DicePage from './games/DicePage';
import WheelPage from './games/WheelPage';
import D20Page from './games/D20Page';

function isGameId(value: string): value is GameId {
  return (ALL_GAME_IDS as readonly string[]).includes(value);
}

function ComingSoon({ gameId }: { gameId: GameId }) {
  const meta = GAME_META[gameId];
  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">{meta.name}</h1>
      <Card>
        <CardContent className="flex min-h-64 items-center justify-center p-8 text-sm text-muted-foreground">
          {meta.tagline} — playable from milestone M4.
        </CardContent>
      </Card>
    </div>
  );
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
    case 'mines':
      return <ComingSoon gameId={gameId} />;
    default: {
      const exhaustive: never = gameId;
      throw new Error(`Unhandled game: ${String(exhaustive)}`);
    }
  }
}
