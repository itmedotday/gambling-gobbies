import { ALL_GAME_IDS } from '@gobbies/shared';
import { DailyBonusCard } from '@/components/game/DailyBonusCard';
import { BailoutCard } from '@/components/game/BailoutCard';
import { GameLobbyCard } from '@/components/game/GameLobbyCard';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function LobbyPage() {
  const layout = useThemeLayout();

  return (
    <div className={cn('flex flex-col', layout.isEmerald ? 'gap-6' : 'gap-8')}>
      <div className="flex flex-col gap-2">
        <h1 className={layout.pageTitleClass}>Lobby</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pick a game. The house edge is 1% everywhere — the goblins are greedy, not unfair.
        </p>
      </div>
      <DailyBonusCard />
      <BailoutCard />
      <div className={layout.gamesGridClass} data-testid="game-grid">
        {ALL_GAME_IDS.map((id) => (
          <GameLobbyCard key={id} gameId={id} />
        ))}
      </div>
    </div>
  );
}
