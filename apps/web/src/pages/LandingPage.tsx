import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/kit';
import type { GameId } from '@gobbies/shared';
import { ALL_GAME_IDS } from '@gobbies/shared';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { NeonMarqueeSign } from '@/components/theme/NeonMarqueeSign';
import { GameLobbyCard } from '@/components/game/GameLobbyCard';
import { cn } from '@/lib/utils';

interface HeroSpriteProps {
  src: string;
  className?: string;
  mirror?: boolean;
  glow?: string;
  animationDelay?: string;
}

/** Static SpriteCook preview — reliable on landing (no Phaser mount). */
function HeroSprite({ src, className, mirror, glow, animationDelay }: HeroSpriteProps) {
  return (
    <img
      src={src}
      alt=""
      width={96}
      height={120}
      className={cn(
        'image-pixelated animate-gg-float object-contain',
        mirror && '-scale-x-100',
        className,
      )}
      style={{
        filter: glow,
        animationDelay,
      }}
    />
  );
}

interface HeroGlowStageProps {
  variant: 'neon' | 'emerald' | 'marquee';
  children: ReactNode;
}

function HeroGlowStage({ variant, children }: HeroGlowStageProps) {
  const glow =
    variant === 'emerald'
      ? {
          floor: 'radial-gradient(ellipse at center, rgba(236,194,78,.45) 0%, rgba(132,155,73,.2) 50%, transparent 72%)',
          pulse: 'rgba(236,194,78,.55)',
        }
      : variant === 'marquee'
        ? {
            floor: 'radial-gradient(ellipse at center, rgba(244,63,94,.4) 0%, rgba(139,92,246,.15) 55%, transparent 75%)',
            pulse: 'rgba(244,63,94,.6)',
          }
        : {
            floor:
              'radial-gradient(ellipse at center, rgba(99,102,241,.5) 0%, rgba(99,102,241,.12) 55%, transparent 75%)',
            pulse: 'rgba(99,102,241,.7)',
          };

  return (
    <div
      className="relative flex h-[280px] items-end justify-center sm:h-[320px]"
      data-testid="mascot-stage"
    >
      <div
        className="pointer-events-none absolute bottom-6 h-[90px] w-[280px] rounded-[50%] blur-md sm:w-[340px]"
        style={{ background: glow.floor }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[52px] h-3.5 w-[220px] animate-gg-pulse rounded-[50%] blur-[14px] sm:w-[250px]"
        style={{ background: glow.pulse }}
        aria-hidden
      />
      <div className="relative flex items-end justify-center">{children}</div>
    </div>
  );
}

function HeroCtas({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap justify-center gap-4 sm:gap-5', className)}>
      <Link to="/lobby">
        <Button size="lg" className="gg-neon-btn-primary retro px-6 py-4 text-[11px]">
          Play Solo
        </Button>
      </Link>
      <Link to="/versus">
        <Button size="lg" variant="outline" className="gg-neon-btn-outline retro px-6 py-4 text-[11px]">
          Challenge a Friend
        </Button>
      </Link>
    </div>
  );
}

const FEATURED_GAME_IDS: GameId[] = ['crash', 'mines', 'dice'];

function FeaturedGamesSection({ gridClass, titleClass }: { gridClass: string; titleClass: string }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className={titleClass}>Featured games</h2>
        <Link
          to="/lobby"
          className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          View all {ALL_GAME_IDS.length} games in the lobby →
        </Link>
      </div>
      <div className={gridClass} data-testid="game-grid">
        {FEATURED_GAME_IDS.map((id) => (
          <GameLobbyCard key={id} gameId={id} />
        ))}
      </div>
    </section>
  );
}

export default function LandingPage() {
  const layout = useThemeLayout();

  if (layout.isMarquee) {
    return (
      <div className={cn(layout.pageClass, layout.sectionGap)}>
        <NeonMarqueeSign />
        <section className="flex flex-col items-center gap-8 px-2 text-center sm:gap-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            <HeroSprite
              src="/assets/sprites/royal-goblin/idle.webp"
              mirror
              glow="drop-shadow(0 0 14px rgba(244,63,94,.7))"
              className="hidden h-[120px] w-[96px] sm:block"
            />
            <div className="flex flex-col items-center gap-4">
              <HeroCtas />
              <p className="text-xs text-muted-foreground">
                Virtual currency only. The goblins keep the real gold.
              </p>
            </div>
            <HeroSprite
              src="/assets/sprites/gilded-knight/idle.webp"
              glow="drop-shadow(0 0 14px rgba(139,92,246,.7))"
              animationDelay="0.6s"
              className="hidden h-[140px] w-[112px] sm:block"
            />
          </div>
          <p className={cn(layout.bodyTextClass, 'text-center')}>
            Bet your Gobbie Gold on six provably-fair games, or challenge a friend — richest goblin
            wins.
          </p>
        </section>
        <FeaturedGamesSection
          gridClass={layout.gamesGridClass}
          titleClass="gg-marquee-display text-center text-2xl text-[#fda4af] [text-shadow:0_0_14px_rgba(244,63,94,.7)]"
        />
      </div>
    );
  }

  if (layout.isEmerald) {
    return (
      <div className={cn(layout.pageClass, layout.sectionGap)}>
        <section className="flex flex-col items-center gap-6 px-2 py-4 text-center sm:gap-8 sm:py-8">
          <HeroGlowStage variant="emerald">
            <div className="flex items-end justify-center gap-4 sm:gap-8">
              <HeroSprite
                src="/assets/sprites/tiny-pirate/idle.webp"
                mirror
                glow="drop-shadow(0 0 10px rgba(236,194,78,.6))"
                className="hidden h-[88px] w-[72px] sm:block"
              />
              <HeroSprite
                src="/assets/sprites/royal-goblin/jump.webp"
                glow="drop-shadow(0 0 14px rgba(132,155,73,.8)) drop-shadow(0 10px 24px rgba(0,0,0,.7))"
                className="h-[160px] w-[128px] sm:h-[200px] sm:w-[160px]"
              />
              <HeroSprite
                src="/assets/sprites/gilded-knight/idle.webp"
                glow="drop-shadow(0 0 10px rgba(236,194,78,.5))"
                animationDelay="0.5s"
                className="hidden h-[100px] w-[80px] sm:block"
              />
            </div>
          </HeroGlowStage>
          <span className="gg-eyebrow font-mono text-[11px] uppercase tracking-[2.5px] text-primary">
            Provably fair · 1% house edge · no real money
          </span>
          <h1 className={layout.heroTitleClass}>Gambling Gobbies</h1>
          <p className={cn(layout.bodyTextClass, 'text-center')}>
            A goblin-run casino of questionable repute. Six provably-fair games, one greedy house,
            and a 1% edge — the goblins are greedy, not unfair.
          </p>
          <HeroCtas />
          <p className="text-xs text-muted-foreground">
            Virtual currency only. The goblins keep the real gold.
          </p>
        </section>
        <FeaturedGamesSection
          gridClass={layout.gamesGridClass}
          titleClass="gg-font-fantasy text-[26px] text-foreground [text-shadow:0_0_14px_rgba(132,155,73,.6)]"
        />
      </div>
    );
  }

  return (
    <div className={cn(layout.pageClass, layout.sectionGap)}>
      <section className="grid items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-12">
        <div className="flex flex-col gap-6">
          <span className="gg-eyebrow font-mono text-[11px] uppercase tracking-[2.5px] text-primary">
            Provably fair · 1% house edge · no real money
          </span>
          <h1 className={layout.heroTitleClass}>
            Gambling
            <br />
            Gobbies
          </h1>
          <p className={layout.bodyTextClass}>
            A goblin-run casino of questionable repute. Bet your Gobbie Gold on six provably-fair
            games, or challenge a friend — richest goblin wins.
          </p>
          <HeroCtas className="mt-1 justify-start" />
          <p className="text-xs text-muted-foreground">
            Virtual currency only. The goblins keep the real gold.
          </p>
        </div>
        <HeroGlowStage variant="neon">
          <div className="flex items-end justify-center gap-3 sm:gap-6">
            <HeroSprite
              src="/assets/sprites/royal-goblin/run.webp"
              glow="drop-shadow(0 0 12px rgba(99,102,241,.7))"
              className="hidden h-[88px] w-[72px] sm:block"
            />
            <HeroSprite
              src="/assets/sprites/royal-goblin/idle.webp"
              glow="drop-shadow(0 0 18px rgba(99,102,241,.7)) drop-shadow(0 12px 30px rgba(0,0,0,.6))"
              className="h-[180px] w-[144px] sm:h-[230px] sm:w-[184px]"
            />
            <HeroSprite
              src="/assets/sprites/tiny-pirate/idle.webp"
              mirror
              glow="drop-shadow(0 0 12px rgba(244,63,94,.7))"
              animationDelay="0.4s"
              className="hidden h-[88px] w-[72px] sm:block"
            />
          </div>
        </HeroGlowStage>
      </section>
      <FeaturedGamesSection
        gridClass={layout.gamesGridClass}
        titleClass="retro text-[13px] text-foreground drop-shadow-[0_0_12px_rgba(99,102,241,.7)]"
      />
    </div>
  );
}
