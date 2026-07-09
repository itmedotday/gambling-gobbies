import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/kit';
import type { LeaderboardEntry, LeaderboardKind } from '@gobbies/shared';
import { apiLeaderboard } from '@/net/apiClient';
import { avatarSpriteUrl } from '@/stores/sessionStore';
import { NeonCard } from '@/components/game/NeonCard';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

const TABS: { kind: LeaderboardKind; label: string; valueLabel: string }[] = [
  { kind: 'balance', label: 'Richest', valueLabel: 'Gold' },
  { kind: 'biggest_win', label: 'Biggest win', valueLabel: 'Win' },
  { kind: 'best_multiplier', label: 'Best multiplier', valueLabel: 'Multiplier' },
  { kind: 'versus_wins', label: 'Versus wins', valueLabel: 'Wins' },
];

function formatValue(kind: LeaderboardKind, value: number): string {
  if (kind === 'best_multiplier') return `${value.toFixed(2)}x`;
  return value.toLocaleString();
}

export default function LeaderboardPage() {
  const layout = useThemeLayout();
  const [kind, setKind] = useState<LeaderboardKind>('balance');
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const activeTab = TABS.find((t) => t.kind === kind) ?? TABS[0]!;
  const tabClass = layout.isMarquee
    ? 'gg-marquee-display border border-border bg-card/60 px-4 py-2.5 text-xs text-muted-foreground shadow-none data-[state=active]:border-primary/50 data-[state=active]:bg-primary/15 data-[state=active]:text-primary'
    : layout.isEmerald
      ? 'gg-font-fantasy border border-border bg-card/60 px-4 py-2.5 text-sm text-muted-foreground shadow-none data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
      : layout.isMono
        ? 'border border-border bg-card/60 px-4 py-2.5 text-xs text-muted-foreground shadow-none data-[state=active]:border-foreground data-[state=active]:bg-foreground/10 data-[state=active]:text-foreground'
        : 'retro border border-border bg-card/60 px-4 py-2.5 text-[11px] text-muted-foreground shadow-none data-[state=active]:border-primary/50 data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-[0_0_14px_rgba(99,102,241,.3)]';

  useEffect(() => {
    let cancelled = false;
    void apiLeaderboard(kind)
      .then((res) => {
        if (!cancelled) {
          setEntries(res.entries);
          setError(null);
        }
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Could not load ranks');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [kind]);

  return (
    <div
      className="mx-auto flex w-full max-w-4xl flex-col gap-6"
      style={layout.pageGlowStyle}
    >
      <h1 className={layout.pageTitleClass}>Leaderboard</h1>

      <Tabs
        value={kind}
        onValueChange={(v) => {
          setKind(v as LeaderboardKind);
          setLoading(true);
          setError(null);
        }}
      >
        <TabsList className="flex h-auto flex-wrap gap-2 bg-transparent p-0">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.kind} value={tab.kind} className={tabClass}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((tab) => (
          <TabsContent key={tab.kind} value={tab.kind} className="mt-4">
            <NeonCard className="overflow-hidden">
              <div
                className={cn(
                  'hidden gap-3 border-b border-border px-4 py-3.5 text-muted-foreground sm:grid sm:grid-cols-[64px_1fr_120px] sm:px-6',
                  layout.sectionLabelClass,
                )}
              >
                <span>#</span>
                <span>Goblin</span>
                <span className="text-right">{activeTab.valueLabel}</span>
              </div>

              {loading ? (
                <div className="flex flex-col gap-0 divide-y divide-border">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-14 animate-pulse bg-muted/20 px-4 sm:px-6" />
                  ))}
                </div>
              ) : error ? (
                <p className="px-4 py-8 text-center text-sm text-destructive sm:px-6" role="alert">
                  {error}
                </p>
              ) : entries.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
                  No entries yet — go lose some Gobbie Gold and claim a spot.
                </p>
              ) : (
                <div className="divide-y divide-border">
                  {entries.map((row) => {
                    const rank = row.rank ?? 0;
                    const tone =
                      rank === 1
                        ? layout.isMono
                          ? 'text-foreground font-semibold'
                          : 'text-[color:var(--gold)] drop-shadow-[0_0_10px_rgba(236,194,78,.8)]'
                        : rank === 2
                          ? 'text-foreground/90'
                          : rank === 3
                            ? layout.isMono
                              ? 'text-muted-foreground'
                              : 'text-[color:var(--gold-dark)]'
                            : 'text-foreground';

                    return (
                      <div
                        key={row.playerId}
                        className={cn(
                          'flex flex-col gap-2 px-4 py-3.5 sm:grid sm:grid-cols-[64px_1fr_120px] sm:items-center sm:gap-3 sm:px-6',
                          rank === 1 &&
                            !layout.isMono &&
                            'bg-gradient-to-r from-[rgba(236,194,78,.08)] to-transparent',
                          rank === 2 &&
                            !layout.isMono &&
                            'bg-gradient-to-r from-[rgba(212,212,216,.06)] to-transparent',
                          rank === 3 &&
                            !layout.isMono &&
                            'bg-gradient-to-r from-[rgba(251,146,60,.06)] to-transparent',
                        )}
                      >
                        <span className={cn(layout.isMono ? 'text-sm font-medium' : 'retro text-xs', tone)}>
                          #{rank}
                        </span>
                        <span className="flex items-center gap-3">
                          <img
                            src={avatarSpriteUrl(row.avatar)}
                            alt=""
                            width={34}
                            height={34}
                            className="h-[34px] w-[34px] object-contain image-pixelated"
                          />
                          <span
                            className={cn(
                              layout.isEmerald ? 'gg-font-fantasy text-base' : layout.isMono ? 'text-sm font-medium' : 'retro text-[10px]',
                              'text-foreground',
                            )}
                          >
                            {layout.isMono ? row.name : row.name.toUpperCase()}
                          </span>
                        </span>
                        <span className={cn('font-mono text-sm tabular-nums sm:text-right', tone)}>
                          {formatValue(tab.kind, row.value)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </NeonCard>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
