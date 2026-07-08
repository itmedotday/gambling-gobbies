import { Link } from 'react-router-dom';
import { Button } from '@/components/kit';
import { ALL_GAME_IDS } from '@gobbies/shared';
import { PhaserGame } from '@/phaser/PhaserGame';
import { MascotScene } from '@/phaser/scenes/MascotScene';
import { useThemeKey } from '@/components/theme/useThemeKey';
import { GameLobbyCard } from '@/components/game/GameLobbyCard';

export default function LandingPage() {
  const themeKey = useThemeKey();

  return (
    <div className="flex flex-col gap-14">
      <section className="grid items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-12">
        <div className="flex flex-col gap-6">
          <span className="gg-eyebrow font-mono text-[11px] uppercase tracking-[2.5px] text-primary">
            Provably fair · 1% house edge · no real money
          </span>
          <h1 className="gg-hero-title retro text-[28px] leading-[1.55] text-foreground sm:text-[34px]">
            Gambling
            <br />
            Gobbies
          </h1>
          <p className="max-w-[430px] text-base leading-relaxed text-muted-foreground">
            A goblin-run casino of questionable repute. Bet your Gobbie Gold on six provably-fair
            games, or challenge a friend — richest goblin wins.
          </p>
          <div className="mt-1 flex flex-wrap gap-5">
            <Link to="/lobby">
              <Button size="lg" className="gg-neon-btn-primary retro px-6 py-4 text-[11px]">
                Play Solo
              </Button>
            </Link>
            <Link to="/versus">
              <Button
                size="lg"
                variant="outline"
                className="gg-neon-btn-outline retro px-6 py-4 text-[11px]"
              >
                Challenge a Friend
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Virtual currency only. The goblins keep the real gold.
          </p>
        </div>
        <div
          className="relative flex h-[320px] items-end justify-center"
          data-testid="mascot-stage"
        >
          <div
            className="pointer-events-none absolute bottom-6 h-[90px] w-[340px] rounded-[50%] blur-md"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(99,102,241,.5) 0%, rgba(99,102,241,.12) 55%, transparent 75%)',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[52px] h-3.5 w-[250px] animate-gg-pulse rounded-[50%] blur-[14px]"
            style={{ background: 'rgba(99,102,241,.7)' }}
            aria-hidden
          />
          <div className="relative animate-gg-float">
            <PhaserGame
              scenes={[MascotScene]}
              width={360}
              height={280}
              transparent
              themeKey={themeKey}
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="retro text-[13px] text-foreground drop-shadow-[0_0_12px_rgba(99,102,241,.7)]">
          The Games
        </h2>
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-testid="game-grid"
        >
          {ALL_GAME_IDS.map((id) => (
            <GameLobbyCard key={id} gameId={id} />
          ))}
        </div>
      </section>
    </div>
  );
}
