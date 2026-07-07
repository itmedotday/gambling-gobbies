import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Input } from '@/components/ui/8bit/input';
import { Label } from '@/components/ui/8bit/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/8bit/select';
import { ALL_AVATAR_IDS, AVATAR_NAMES } from '@gobbies/shared';
import { useSessionStore, avatarSpriteUrl } from '@/stores/sessionStore';
import { apiGetBets, apiPatchProfile } from '@/net/apiClient';
import type { BetRecord } from '@gobbies/shared';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/8bit/table';

export default function ProfilePage() {
  const token = useSessionStore((s) => s.token);
  const player = useSessionStore((s) => s.player);
  const ensureSession = useSessionStore((s) => s.ensureSession);
  const setPlayer = useSessionStore((s) => s.setPlayer);
  const [bets, setBets] = useState<BetRecord[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    void ensureSession().then((p) => setName(p.name));
  }, [ensureSession]);

  useEffect(() => {
    if (!token) return;
    void apiGetBets(token).then((res) => setBets(res.bets));
  }, [token]);

  const save = async () => {
    if (!token || !player) return;
    const { player: updated } = await apiPatchProfile(token, { name });
    setPlayer(updated);
  };

  if (!player) {
    return <p className="text-sm text-muted-foreground">Loading goblin profile…</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">Your goblin</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <img
            src={avatarSpriteUrl(player.avatar)}
            alt={player.name}
            className="h-16 w-16 object-contain image-pixelated"
          />
          <div className="flex flex-col gap-2">
            <Label htmlFor="profile-name">Display name</Label>
            <Input id="profile-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Avatar</Label>
            <Select
              value={player.avatar}
              onValueChange={(avatar) => {
                if (!token) return;
                void apiPatchProfile(token, { avatar: avatar as typeof player.avatar }).then(({ player: p }) =>
                  setPlayer(p),
                );
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ALL_AVATAR_IDS.map((id) => (
                  <SelectItem key={id} value={id}>
                    {AVATAR_NAMES[id]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-muted-foreground">
            Balance: {player.balance.toLocaleString()} GG · Versus wins: {player.versusWins}
          </p>
          <Button onClick={() => void save()}>Save name</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">Recent bets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Game</TableHead>
                <TableHead>Bet</TableHead>
                <TableHead>Payout</TableHead>
                <TableHead>Detail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bets.map((bet) => (
                <TableRow key={bet.id}>
                  <TableCell>{bet.game}</TableCell>
                  <TableCell>{bet.amount}</TableCell>
                  <TableCell>{bet.payout}</TableCell>
                  <TableCell className="text-xs">{bet.detail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link to="/fairness" className="mt-4 inline-block text-xs text-primary underline">
            Verify outcomes on the Fairness page
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
