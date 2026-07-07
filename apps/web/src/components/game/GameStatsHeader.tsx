import { Card, CardContent } from '@/components/ui/8bit/card';
import type { GameId } from '@gobbies/shared';
import { useLedgerStore } from '@/stores/ledgerStore';

/** Wins / Losses / Win Ratio / Win Streak header (RngWheel-aligned layout). */
export function GameStatsHeader({ game }: { game: GameId }) {
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
    { label: 'Wins', value: wins, className: 'text-primary' },
    { label: 'Losses', value: losses, className: 'text-destructive' },
    { label: 'Win Ratio', value: `${ratio}%`, className: 'text-foreground' },
    { label: 'Win Streak', value: streak, className: 'text-primary' },
  ] as const;

  return (
    <Card>
      <CardContent className="grid grid-cols-4 gap-2 p-4" data-testid="game-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </span>
            <span className={`retro text-sm ${stat.className}`}>{stat.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
