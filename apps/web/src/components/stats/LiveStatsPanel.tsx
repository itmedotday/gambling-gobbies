import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { GripHorizontal, RefreshCw, X, TrendingUp } from 'lucide-react';
import { ALL_GAME_IDS, GAME_META, type GameId } from '@gobbies/shared';
import { useLedgerStore, type LedgerEntry } from '@/stores/ledgerStore';
import { cn } from '@/lib/utils';

const PROFIT_UP = 'var(--chart-1)';
const PROFIT_DOWN = 'var(--destructive)';

type GameFilter = GameId | 'all';

export interface LiveStatsPanelProps {
  open: boolean;
  onClose: () => void;
}

const fmt = (n: number) =>
  n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });

/**
 * Floating, draggable "Live Stats" panel — a Stake-style session summary with a
 * cumulative profit graph (green above zero, red below). Data is derived from
 * the ledger; the refresh button re-baselines the graph to the current moment.
 */
export function LiveStatsPanel({ open, onClose }: LiveStatsPanelProps) {
  const entries = useLedgerStore((s) => s.entries);
  const [filter, setFilter] = useState<GameFilter>('all');
  const [resetAt, setResetAt] = useState(0);
  const [pos, setPos] = useState<{ x: number; y: number }>(() => ({
    x: typeof window !== 'undefined' ? Math.max(8, window.innerWidth - 384) : 24,
    y: 88,
  }));
  const panelRef = useRef<HTMLDivElement>(null);

  const rows = useMemo<LedgerEntry[]>(() => {
    return entries
      .filter((e) => e.timestamp >= resetAt && (filter === 'all' || e.game === filter))
      .slice()
      .sort((a, b) => a.timestamp - b.timestamp);
  }, [entries, filter, resetAt]);

  const stats = useMemo(() => {
    let profit = 0;
    let wagered = 0;
    let wins = 0;
    for (const e of rows) {
      profit += e.payout - e.bet;
      wagered += e.bet;
      if (e.isWin) wins += 1;
    }
    return { profit, wagered, wins, losses: rows.length - wins };
  }, [rows]);

  const chart = useMemo(() => {
    const data: { i: number; profit: number }[] = [{ i: 0, profit: 0 }];
    let running = 0;
    rows.forEach((e, idx) => {
      running += e.payout - e.bet;
      data.push({ i: idx + 1, profit: Math.round(running * 100) / 100 });
    });
    const values = data.map((d) => d.profit);
    const max = Math.max(...values);
    const min = Math.min(...values);
    // Fraction of the vertical range that sits above zero → gradient split point.
    let offset = 0.5;
    if (max <= 0) offset = 0;
    else if (min >= 0) offset = 1;
    else offset = max / (max - min);
    return { data, offset };
  }, [rows]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const panel = panelRef.current;
    if (!panel) return;
    e.preventDefault();
    const rect = panel.getBoundingClientRect();
    const dx = e.clientX - rect.left;
    const dy = e.clientY - rect.top;
    const move = (ev: PointerEvent) => {
      const w = panel.offsetWidth;
      const h = panel.offsetHeight;
      const x = Math.min(Math.max(8, ev.clientX - dx), window.innerWidth - w - 8);
      const y = Math.min(Math.max(8, ev.clientY - dy), window.innerHeight - h - 8);
      setPos({ x, y });
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }, []);

  if (!open) return null;

  const profitUp = stats.profit >= 0;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Live Stats"
      className="fixed z-50 flex w-[92vw] max-w-[360px] flex-col border-4 border-border bg-card text-card-foreground shadow-2xl"
      style={{ left: pos.x, top: pos.y, '--gg-up': PROFIT_UP, '--gg-down': PROFIT_DOWN } as React.CSSProperties}
    >
      {/* Drag handle / header */}
      <div
        onPointerDown={onPointerDown}
        className="flex cursor-grab touch-none items-center gap-2 border-b-4 border-border bg-secondary/60 px-3 py-2 active:cursor-grabbing select-none"
      >
        <GripHorizontal className="size-4 text-muted-foreground" aria-hidden />
        <TrendingUp className="size-4" aria-hidden />
        <span className="retro text-[10px] uppercase tracking-tight">Live Stats</span>
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            aria-label="Reset stats"
            onClick={() => setResetAt(Date.now())}
            className="grid size-7 place-items-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RefreshCw className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Close live stats"
            onClick={onClose}
            className="grid size-7 place-items-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3">
        {/* Game filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as GameFilter)}
          aria-label="Filter by game"
          className="w-full rounded-sm border-2 border-border bg-background px-2 py-1.5 text-xs outline-none focus:border-ring"
        >
          <option value="all">All games</option>
          {ALL_GAME_IDS.map((id) => (
            <option key={id} value={id}>
              {GAME_META[id].name}
            </option>
          ))}
        </select>

        {/* Stat grid */}
        <div className="grid grid-cols-2 gap-3 border-2 border-border bg-background/50 p-3 text-sm">
          <Stat label="Profit">
            <span className={cn('font-semibold tabular-nums', profitUp ? 'text-[color:var(--gg-up)]' : 'text-[color:var(--gg-down)]')}>
              {profitUp ? '+' : '-'}
              {fmt(Math.abs(stats.profit))} GG
            </span>
          </Stat>
          <Stat label="Wins">
            <span className="font-semibold tabular-nums text-[color:var(--gg-up)]">{stats.wins}</span>
          </Stat>
          <Stat label="Wagered">
            <span className="font-semibold tabular-nums">{fmt(stats.wagered)} GG</span>
          </Stat>
          <Stat label="Losses">
            <span className="font-semibold tabular-nums text-[color:var(--gg-down)]">{stats.losses}</span>
          </Stat>
        </div>

        {/* Profit graph */}
        <div className="h-40 border-2 border-border bg-background/50 p-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chart.data} margin={{ top: 6, right: 6, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="ggProfitStroke" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={chart.offset} stopColor={PROFIT_UP} />
                  <stop offset={chart.offset} stopColor={PROFIT_DOWN} />
                </linearGradient>
                <linearGradient id="ggProfitFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset={0} stopColor={PROFIT_UP} stopOpacity={0.35} />
                  <stop offset={chart.offset} stopColor={PROFIT_UP} stopOpacity={0.05} />
                  <stop offset={chart.offset} stopColor={PROFIT_DOWN} stopOpacity={0.05} />
                  <stop offset={1} stopColor={PROFIT_DOWN} stopOpacity={0.35} />
                </linearGradient>
              </defs>
              <XAxis dataKey="i" hide />
              <YAxis hide domain={['dataMin', 'dataMax']} />
              <ReferenceLine y={0} stroke="var(--muted-foreground)" strokeDasharray="3 3" />
              <Tooltip
                cursor={{ stroke: 'var(--muted-foreground)', strokeDasharray: '3 3' }}
                contentStyle={{
                  background: 'var(--popover)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  fontSize: 12,
                  color: 'var(--popover-foreground)',
                }}
                labelFormatter={() => 'Profit'}
                formatter={(value) => [`${fmt(Number(value))} GG`, 'Profit']}
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="url(#ggProfitStroke)"
                strokeWidth={2}
                fill="url(#ggProfitFill)"
                dot={false}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}
