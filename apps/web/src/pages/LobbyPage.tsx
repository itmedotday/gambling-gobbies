import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardFooter } from '@/components/ui/8bit/card';
import { GAME_META, ALL_GAME_IDS } from '@gobbies/shared';

export default function LobbyPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="retro text-lg text-primary">Lobby</h1>
        <p className="text-sm text-muted-foreground">
          Pick a game. The house edge is 1% everywhere — the goblins are greedy, not unfair.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="game-grid">
        {ALL_GAME_IDS.map((id) => {
          const meta = GAME_META[id];
          return (
            <Card key={id} className="flex h-full flex-col" data-testid={`game-card-${id}`}>
              <CardContent className="flex flex-1 flex-col gap-2 p-5">
                <span className="retro text-[11px] text-primary">{meta.name}</span>
                <span className="text-sm text-muted-foreground">{meta.tagline}</span>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Link to={`/play/${id}`} className="w-full">
                  <Button className="w-full" asChild>
                    <span>Play</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
