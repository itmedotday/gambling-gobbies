import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/kit';
import type { LeaderboardEntry, LeaderboardKind } from '@gobbies/shared';
import { apiLeaderboard } from '@/net/apiClient';
import { avatarSpriteUrl } from '@/stores/sessionStore';
import { NeonCard } from '@/components/game/NeonCard';
import { cn } from '@/lib/utils';

const TABS: { kind: LeaderboardKind; label: string }[] = [
  { kind: 'balance', label: 'Richest' },
  { kind: 'biggest_win', label: 'Biggest win' },
  { kind: 'best_multiplier', label: 'Best multiplier' },
  { kind: 'versus_wins', label: 'Versus wins' },
];

export default function LeaderboardPage() {
  const [kind, setKind] = useState<LeaderboardKind>('balance');
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    void apiLeaderboard(kind).then((res) => setEntries(res.entries));
  }, [kind]);

  return (
    <div
      className="mx-auto flex w-full max-w-4xl flex-col gap-6"
      style={{
        backgroundImage: 'radial-gradient(at 50% 0%, rgba(99,102,241,.16) 0, transparent 50%)',
      }}
    >
      <h1 className="gg-hero-title retro text-xl text-foreground">Leaderboard</h1>

      <Tabs value={kind} onValueChange={(v) => setKind(v as LeaderboardKind)}>
        <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.kind}
              value={tab.kind}
              className="retro border border-border bg-card/60 px-4 py-2.5 text-[9px] text-muted-foreground shadow-none data-[state=active]:border-primary/50 data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_14px_rgba(99,102,241,.3)]"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((tab) => (
          <TabsContent key={tab.kind} value={tab.kind} className="mt-4">
            <NeonCard className="overflow-hidden">
              <div className="grid grid-cols-[80px_1fr_200px] gap-3 border-b border-border px-6 py-3.5 retro text-[8px] uppercase tracking-wider text-muted-foreground">
                <span>#</span>
                <span>Goblin</span>
                <span className="text-right">Gold</span>
              </div>
              <div className="divide-y divide-border">
                {entries.map((row) => {
                  const rank = row.rank ?? 0;
                  const tone =
                    rank === 1
                      ? 'text-[color:var(--gold)] drop-shadow-[0_0_10px_rgba(236,194,78,.8)]'
                      : rank === 2
                        ? 'text-foreground/90'
                        : rank === 3
                          ? 'text-[color:var(--gold-dark)]'
                          : 'text-foreground';

                  return (
                    <div
                      key={row.playerId}
                      className={cn(
                        'grid grid-cols-[80px_1fr_200px] items-center gap-3 px-6 py-3.5',
                        rank === 1 && 'bg-gradient-to-r from-[rgba(236,194,78,.08)] to-transparent',
                        rank === 2 &&
                          'bg-gradient-to-r from-[rgba(212,212,216,.06)] to-transparent',
                        rank === 3 && 'bg-gradient-to-r from-[rgba(251,146,60,.06)] to-transparent',
                      )}
                    >
                      <span className={cn('retro text-xs', tone)}>{rank}</span>
                      <span className="flex items-center gap-3">
                        <img
                          src={avatarSpriteUrl(row.avatar)}
                          alt=""
                          className="h-[34px] w-[34px] object-contain image-pixelated"
                        />
                        <span className="retro text-[10px] text-foreground">
                          {row.name.toUpperCase()}
                        </span>
                      </span>
                      <span className={cn('text-right font-mono text-sm tabular-nums', tone)}>
                        {row.value.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </NeonCard>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
