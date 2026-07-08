import { Link } from 'react-router-dom';
import type { GameId } from '@gobbies/shared';
import { GAME_META } from '@gobbies/shared';
import { accentForGame, accentTokens } from '@/game/accent';
import { cn } from '@/lib/utils';

export interface GameLobbyCardProps {
  gameId: GameId;
  className?: string;
}

/** Color-coded lobby tile from redesign 2a. */
export function GameLobbyCard({ gameId, className }: GameLobbyCardProps) {
  const meta = GAME_META[gameId];
  const tokens = accentTokens(accentForGame(gameId));

  return (
    <Link
      to={`/play/${gameId}`}
      className={cn('group block', className)}
      data-testid={`game-card-${gameId}`}
    >
      <div
        className={cn(
          'flex h-full flex-col gap-2.5 border border-border bg-card p-5 transition-all duration-200',
          'border-t-2 group-hover:-translate-y-1 group-hover:shadow-[0_0_26px_rgba(99,102,241,.2)]',
        )}
        style={{
          borderTopColor: tokens.border,
          boxShadow: tokens.insetShadow,
        }}
      >
        <span
          className="size-2.5 shrink-0"
          style={{
            background: tokens.dot,
            boxShadow: `0 0 12px ${tokens.dot}`,
          }}
          aria-hidden
        />
        <span className="retro text-[11px] leading-snug text-foreground">{meta.name}</span>
        <span className="text-[13px] leading-snug text-muted-foreground">{meta.tagline}</span>
      </div>
    </Link>
  );
}
