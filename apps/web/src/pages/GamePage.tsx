import { useParams, Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/8bit/card';
import { GAME_META, ALL_GAME_IDS, type GameId } from '@gobbies/shared';

function isGameId(value: string): value is GameId {
  return (ALL_GAME_IDS as readonly string[]).includes(value);
}

export default function GamePage() {
  const { gameId } = useParams<{ gameId: string }>();
  if (!gameId || !isGameId(gameId)) {
    return <Navigate to="/lobby" replace />;
  }
  const meta = GAME_META[gameId];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">{meta.name}</h1>
      <Card>
        <CardContent className="flex min-h-64 items-center justify-center p-8 text-sm text-muted-foreground">
          {meta.tagline} — playable from milestone M3.
        </CardContent>
      </Card>
    </div>
  );
}
