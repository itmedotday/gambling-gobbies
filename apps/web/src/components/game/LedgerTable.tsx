import { GAME_META, type GameId } from '@gobbies/shared';
import { useLedgerStore } from '@/stores/ledgerStore';
import { cn } from '@/lib/utils';

export interface LedgerTableProps {
  game?: GameId;
  limit?: number;
  variant?: 'table' | 'chips';
}

export function LedgerTable({ game, limit = 10, variant = 'table' }: LedgerTableProps) {
  const entries = useLedgerStore((s) => s.entries);
  const rows = (game ? entries.filter((e) => e.game === game) : entries).slice(0, limit);

  if (rows.length === 0) {
    return (
      <p className="py-4 text-center text-sm text-muted-foreground" data-testid="ledger-empty">
        No bets yet. The goblins are waiting.
      </p>
    );
  }

  if (variant === 'chips') {
    return (
      <div className="flex flex-wrap gap-2 font-mono text-xs" data-testid="ledger-table">
        {rows.map((entry) => {
          const delta = entry.isWin ? entry.payout - entry.bet : -entry.bet;
          const up = delta > 0;
          return (
            <span
              key={entry.id}
              data-testid="ledger-row"
              className={cn(
                'border px-2.5 py-1',
                up
                  ? 'border-[color:var(--chart-3)]/40 text-[color:var(--chart-3)] [text-shadow:0_0_6px_rgba(16,185,129,.6)]'
                  : 'border-destructive/40 text-destructive',
              )}
            >
              {up ? '+' : ''}
              {delta.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto" data-testid="ledger-table">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border text-muted-foreground">
            {!game && <th className="py-2 text-left font-normal">Game</th>}
            <th className="py-2 text-left font-normal">Outcome</th>
            <th className="py-2 text-right font-normal">Bet</th>
            <th className="py-2 text-right font-normal">Mult</th>
            <th className="py-2 text-right font-normal">Payout</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((entry) => (
            <tr key={entry.id} className="border-b border-border/60" data-testid="ledger-row">
              {!game && <td className="py-2">{GAME_META[entry.game].name}</td>}
              <td className="py-2">{entry.detail}</td>
              <td className="py-2 text-right tabular-nums">{entry.bet.toLocaleString()}</td>
              <td className="py-2 text-right tabular-nums">
                {entry.multiplier > 0 ? `${entry.multiplier.toFixed(2)}x` : '—'}
              </td>
              <td
                className={cn(
                  'py-2 text-right tabular-nums',
                  entry.isWin ? 'text-[color:var(--chart-3)]' : 'text-destructive',
                )}
              >
                {entry.isWin
                  ? `+${(entry.payout - entry.bet).toLocaleString()}`
                  : `-${entry.bet.toLocaleString()}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
