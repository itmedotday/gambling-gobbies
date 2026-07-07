import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent } from '@/components/ui/8bit/card';
import { GAME_META, ALL_GAME_IDS } from '@gobbies/shared';
import { PhaserGame } from '@/phaser/PhaserGame';
import { MascotScene } from '@/phaser/scenes/MascotScene';
import { useThemeKey } from '@/components/theme/useThemeKey';

export default function LandingPage() {
  const themeKey = useThemeKey();
  return (
    <div className="flex flex-col gap-14">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="retro text-2xl leading-relaxed text-primary sm:text-3xl">
            Gambling
            <br />
            Gobbies
          </h1>
          <p className="max-w-md text-base text-muted-foreground">
            A goblin-run casino of questionable repute. Bet your Gobbie Gold on six provably-fair
            games, or challenge a friend: equal bankrolls, one timer, and a live profit graph.
            Richest goblin wins.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/lobby">
              <Button size="lg" asChild>
                <span>Play Solo</span>
              </Button>
            </Link>
            <Link to="/versus">
              <Button size="lg" variant="outline" asChild>
                <span>Challenge a Friend</span>
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Virtual currency only. The goblins keep the real gold.
          </p>
        </div>
        <div className="flex justify-center" data-testid="mascot-stage">
          <PhaserGame scenes={[MascotScene]} width={360} height={280} transparent themeKey={themeKey} />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="retro text-sm text-foreground">The Games</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_GAME_IDS.map((id) => {
            const meta = GAME_META[id];
            return (
              <Link key={id} to={`/play/${id}`} className="group">
                <Card className="h-full transition-transform group-hover:-translate-y-1">
                  <CardContent className="flex flex-col gap-2 p-5">
                    <span className="retro text-[11px] text-primary">{meta.name}</span>
                    <span className="text-sm text-muted-foreground">{meta.tagline}</span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
