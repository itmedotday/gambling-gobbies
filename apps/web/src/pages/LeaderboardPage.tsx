import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/8bit/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/8bit/table';
import type { LeaderboardEntry, LeaderboardKind } from '@gobbies/shared';
import { apiLeaderboard } from '@/net/apiClient';
import { avatarSpriteUrl } from '@/stores/sessionStore';

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
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Leaderboard</h1>
      <Tabs value={kind} onValueChange={(v) => setKind(v as LeaderboardKind)}>
        <TabsList className="flex flex-wrap">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.kind} value={tab.kind}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map((tab) => (
          <TabsContent key={tab.kind} value={tab.kind}>
            <Card>
              <CardHeader>
                <CardTitle className="retro text-xs">{tab.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Goblin</TableHead>
                      <TableHead>Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {entries.map((row) => (
                      <TableRow key={row.playerId}>
                        <TableCell>{row.rank}</TableCell>
                        <TableCell className="flex items-center gap-2">
                          <img
                            src={avatarSpriteUrl(row.avatar)}
                            alt=""
                            className="h-8 w-8 object-contain image-pixelated"
                          />
                          {row.name}
                        </TableCell>
                        <TableCell>{row.value.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
