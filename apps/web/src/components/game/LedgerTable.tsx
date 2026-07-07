import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/8bit/table';
import { GAME_META, type GameId } from '@gobbies/shared';
import { useLedgerStore } from '@/stores/ledgerStore';

export interface LedgerTableProps {
  /** Restrict to a single game's entries (game pages); omit for all games. */
  game?: GameId;
  limit?: number;
}

export function LedgerTable({ game, limit = 10 }: LedgerTableProps) {
  const entries = useLedgerStore((s) => s.entries);
  const rows = (game ? entries.filter((e) => e.game === game) : entries).slice(0, limit);

  if (rows.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-muted-foreground" data-testid="ledger-empty">
        No bets yet. The goblins are waiting.
      </p>
    );
  }

  return (
    <Table data-testid="ledger-table">
      <TableHeader>
        <TableRow>
          {!game && <TableHead>Game</TableHead>}
          <TableHead>Outcome</TableHead>
          <TableHead className="text-right">Bet</TableHead>
          <TableHead className="text-right">Mult</TableHead>
          <TableHead className="text-right">Payout</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((entry) => (
          <TableRow key={entry.id} data-testid="ledger-row">
            {!game && <TableCell className="text-xs">{GAME_META[entry.game].name}</TableCell>}
            <TableCell className="text-xs">{entry.detail}</TableCell>
            <TableCell className="text-right text-xs">{entry.bet.toLocaleString()}</TableCell>
            <TableCell className="text-right text-xs">
              {entry.multiplier > 0 ? `${entry.multiplier.toFixed(2)}x` : '—'}
            </TableCell>
            <TableCell
              className={`text-right text-xs ${entry.isWin ? 'text-primary' : 'text-destructive'}`}
            >
              {entry.isWin ? `+${(entry.payout - entry.bet).toLocaleString()}` : `-${entry.bet.toLocaleString()}`}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
