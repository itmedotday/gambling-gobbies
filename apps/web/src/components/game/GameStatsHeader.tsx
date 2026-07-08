import type { GameId } from '@gobbies/shared';
import { useLedgerStore } from '@/stores/ledgerStore';
import { cn } from '@/lib/utils';

export interface GameStatsHeaderProps {
  game: GameId;
  variant?: 'card' | 'inline';
}

/** Wins / Losses / Win Ratio / Win Streak header (redesign layout). */
export function GameStatsHeader({ game, variant = 'card' }: GameStatsHeaderProps) {
  const entries = useLedgerStore((s) => s.entries);
  const rows = entries.filter((e) => e.game === game);
  const wins = rows.filter((e) => e.isWin).length;
  const losses = rows.length - wins;
  const ratio = rows.length > 0 ? Math.round((wins / rows.length) * 100) : 0;
  let streak = 0;
  for (const row of rows) {
    if (!row.isWin) break;
    streak++;
  }

  const stats = [
    {
      label: 'Wins',
      value: wins,
      className: 'text-[color:var(--chart-3)] drop-shadow-[0_0_8px_rgba(16,185,129,.7)]',
    },
    { label: 'Losses', value: losses, className: 'text-destructive' },
    { label: 'Win Ratio', value: `${ratio}%`, className: 'text-foreground' },
    {
      label: 'Streak',
      value: streak,
      className: 'text-primary drop-shadow-[0_0_8px_rgba(99,102,241,.7)]',
    },
  ] as const;

  if (variant === 'inline') {
    return (
      <div className="flex gap-6" data-testid="game-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="retro text-[8px] uppercase text-muted-foreground">{stat.label}</span>
            <span className={cn('retro text-xs', stat.className)}>{stat.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-4 gap-2 rounded-sm border border-border bg-card p-4"
      data-testid="game-stats"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1">
          <span className="retro text-[8px] uppercase tracking-wider text-muted-foreground">
            {stat.label}
          </span>
          <span className={cn('retro text-sm', stat.className)}>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
