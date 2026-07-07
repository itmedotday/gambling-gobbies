import { Line, LineChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/8bit/chart';
import type { BalanceSnapshot } from '@gobbies/shared';
import { useSessionStore } from '@/stores/sessionStore';

export interface ProfitChartProps {
  snapshots: BalanceSnapshot[];
  playerIds: string[];
  names: Record<string, string>;
}

const COLORS = ['#d4a017', '#4ade80', '#60a5fa', '#f472b6'];

export function ProfitChart({ snapshots, playerIds, names }: ProfitChartProps) {
  const myId = useSessionStore((s) => s.player?.id);
  const data = snapshots.map((snap, i) => {
    const row: Record<string, number | string> = { tick: i };
    for (const id of playerIds) {
      const balance = snap.balances[id] ?? 0;
      const start = snapshots[0]?.balances[id] ?? balance;
      row[id] = Math.round((balance - start) * 100) / 100;
    }
    return row;
  });

  const config = Object.fromEntries(
    playerIds.map((id, index) => [
      id,
      { label: names[id] ?? id.slice(0, 6), color: id === myId ? COLORS[0] : COLORS[(index + 1) % COLORS.length] },
    ]),
  );

  return (
    <ChartContainer config={config} className="h-64 w-full">
      <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-border/40" />
        <XAxis dataKey="tick" hide />
        <YAxis tickFormatter={(v) => `${v} GG`} width={56} />
        <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" strokeDasharray="4 4" />
        <ChartTooltip content={<ChartTooltipContent />} />
        {playerIds.map((id) => (
          <Line key={id} type="monotone" dataKey={id} stroke={`var(--color-${id})`} dot={false} strokeWidth={2} />
        ))}
      </LineChart>
    </ChartContainer>
  );
}
