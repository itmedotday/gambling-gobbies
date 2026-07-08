import { ALL_GAME_IDS } from '@gobbies/shared';
import { DailyBonusCard } from '@/components/game/DailyBonusCard';
import { GameLobbyCard } from '@/components/game/GameLobbyCard';

export default function LobbyPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="gg-hero-title retro text-xl text-foreground">Lobby</h1>
        <p className="text-sm text-muted-foreground">
          Pick a game. The house edge is 1% everywhere — the goblins are greedy, not unfair.
        </p>
      </div>
      <DailyBonusCard />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="game-grid">
        {ALL_GAME_IDS.map((id) => (
          <GameLobbyCard key={id} gameId={id} />
        ))}
      </div>
    </div>
  );
}
