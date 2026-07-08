import type { GameId } from '@gobbies/shared';
import { useLedgerStore } from '@/stores/ledgerStore';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export interface GameStatsHeaderProps {
  game: GameId;
  variant?: 'card' | 'inline';
}

/** Wins / Losses / Win Ratio / Win Streak header (redesign layout). */
export function GameStatsHeader({ game, variant = 'card' }: GameStatsHeaderProps) {
  const layout = useThemeLayout();
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

  const labelClass = cn(
    'uppercase text-muted-foreground',
    layout.isMarquee
      ? 'gg-marquee-display text-[10px] tracking-wide'
      : layout.isEmerald
        ? 'gg-font-fantasy text-xs'
        : layout.isMono
          ? 'text-[10px] font-medium tracking-wide'
          : 'retro text-[9px]',
  );

  const valueClass = cn(
    'tabular-nums',
    layout.isMarquee
      ? 'gg-marquee-display text-sm'
      : layout.isEmerald
        ? 'gg-font-fantasy text-sm'
        : layout.isMono
          ? 'text-sm font-semibold'
          : 'retro text-xs',
  );

  const stats = [
    {
      label: 'Wins',
      value: wins,
      className: 'text-[color:var(--chart-3)] drop-shadow-[0_0_8px_color-mix(in_srgb,var(--chart-3)_70%,transparent)]',
    },
    { label: 'Losses', value: losses, className: 'text-destructive' },
    { label: 'Win Ratio', value: `${ratio}%`, className: 'text-foreground' },
    {
      label: 'Streak',
      value: streak,
      className: 'text-primary drop-shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_70%,transparent)]',
    },
  ] as const;

  const gridClass =
    variant === 'inline'
      ? 'flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-6'
      : 'grid grid-cols-2 gap-3 sm:grid-cols-4';

  return (
    <div className={gridClass} data-testid="game-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="flex min-w-[4.5rem] flex-col items-center gap-1">
          <span className={labelClass}>{stat.label}</span>
          <span className={cn(valueClass, stat.className)}>{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
