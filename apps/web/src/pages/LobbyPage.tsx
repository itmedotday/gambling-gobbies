import { ALL_GAME_IDS } from '@gobbies/shared';
import { DailyBonusCard } from '@/components/game/DailyBonusCard';
import { GameLobbyCard } from '@/components/game/GameLobbyCard';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function LobbyPage() {
  const layout = useThemeLayout();

  const titleClass = layout.isMarquee
    ? 'gg-marquee-display text-3xl text-[#fda4af] [text-shadow:0_0_14px_rgba(244,63,94,.7)]'
    : layout.isEmerald
      ? 'gg-font-fantasy text-3xl text-foreground [text-shadow:0_0_14px_rgba(132,155,73,.6)]'
      : 'gg-hero-title retro text-xl text-foreground';

  return (
    <div className={cn('flex flex-col', layout.isEmerald ? 'gap-6' : 'gap-8')}>
      <div className="flex flex-col gap-2">
        <h1 className={titleClass}>Lobby</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pick a game. The house edge is 1% everywhere — the goblins are greedy, not unfair.
        </p>
      </div>
      <DailyBonusCard />
      <div className={layout.gamesGridClass} data-testid="game-grid">
        {ALL_GAME_IDS.map((id) => (
          <GameLobbyCard key={id} gameId={id} />
        ))}
      </div>
    </div>
  );
}
