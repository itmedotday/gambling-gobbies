import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle, Badge, Progress } from '@/components/kit';
import { ProfitChart } from '@/components/game/ProfitChart';
import { useVersusStore, useVersusView } from '@/stores/versusStore';
import { VERSUS_INSTANT_GAMES, GAME_META } from '@gobbies/shared';
import { avatarSpriteUrl } from '@/stores/sessionStore';

function formatTimer(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VersusArenaPage() {
  const { code } = useParams<{ code: string }>();
  const view = useVersusView();
  const room = useVersusStore((s) => s.room);
  const connectJoin = useVersusStore((s) => s.connectJoin);
  const send = useVersusStore((s) => s.send);
  const leave = useVersusStore((s) => s.leave);

  useEffect(() => {
    if (!code || room) return;
    void connectJoin(code);
  }, [code, room, connectJoin]);

  if (!view) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">Connecting to room {code}…</p>
        <Link to="/versus">
          <Button variant="secondary">Back</Button>
        </Link>
      </div>
    );
  }

  const playerIds = view.players.map((p) => p.playerId);
  const names = Object.fromEntries(view.players.map((p) => [p.playerId, p.name]));
  const progress =
    view.config.durationMs > 0
      ? ((view.config.durationMs - view.timerRemainingMs) / view.config.durationMs) * 100
      : 0;
  const roomCode = view.code || code || '';
  const waitingForOpponent = view.phase === 'waiting' && view.players.length < 2;

  const copyInvite = async () => {
    const shareUrl = `${window.location.origin}/versus/${roomCode}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Invite link copied — send it to a friend.');
    } catch {
      toast.error(`Copy failed. Room code: ${roomCode}`);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="retro text-lg text-primary">Versus · {view.code}</h1>
          <p className="text-xs text-muted-foreground capitalize">Phase: {view.phase}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => send({ type: 'ready' })}>
            Ready up
          </Button>
          <Button variant="destructive" onClick={() => send({ type: 'forfeit' })}>
            Forfeit
          </Button>
          <Button variant="outline" onClick={() => leave()}>
            Leave
          </Button>
        </div>
      </div>

      {waitingForOpponent && (
        <Card>
          <CardContent className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <span className="retro text-[11px] text-primary">Room code</span>
              <span className="text-xs text-muted-foreground">
                Share this code (or the link) so a friend can join. Waiting for an opponent…
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="retro text-2xl tracking-widest text-primary" data-testid="room-code">
                {roomCode}
              </span>
              <Button variant="secondary" size="sm" onClick={() => void copyInvite()}>
                <Copy className="mr-1 size-3.5" /> Copy invite
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs flex items-center justify-between">
            <span>Timer</span>
            <span className={view.timerRemainingMs < 30_000 ? 'text-destructive' : 'text-primary'}>
              {formatTimer(view.timerRemainingMs)}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {view.players.map((p) => (
          <Card key={p.sessionId}>
            <CardContent className="flex items-center gap-3 p-4">
              <img src={avatarSpriteUrl(p.avatar)} alt="" className="h-10 w-10 image-pixelated" />
              <div>
                <p className="retro text-xs">{p.name}</p>
                <p className="text-sm">{p.balance.toLocaleString()} GG</p>
                {p.disconnected && <Badge variant="destructive">Reconnecting…</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">Profit race</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfitChart snapshots={view.snapshots} playerIds={playerIds} names={names} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">Event feed</CardTitle>
        </CardHeader>
        <CardContent className="max-h-40 space-y-1 overflow-y-auto text-xs text-muted-foreground">
          {view.events.map((ev, i) => (
            <p key={i}>{ev.message}</p>
          ))}
        </CardContent>
      </Card>

      {view.phase === 'live' && (
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Play a game</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 text-xs text-muted-foreground">
            <p>Instant games debit your versus balance via the server.</p>
            <div className="flex flex-wrap gap-2">
            {VERSUS_INSTANT_GAMES.map((id) => (
              <Link key={id} to={`/versus/${roomCode}/play/${id}`}>
                <Button size="sm" variant="secondary">
                  {GAME_META[id].name}
                </Button>
              </Link>
            ))}
            </div>
            <p className="text-[10px]">
              Mines and Crash use solo wallet — session games are not yet wired for versus.
            </p>
          </CardContent>
        </Card>
      )}

      {view.phase === 'finished' && (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="retro text-sm text-primary">
              {view.winnerId ? `Winner: ${names[view.winnerId] ?? view.winnerId}` : 'Match ended'}
            </p>
            <p className="text-xs text-muted-foreground">{view.endedReason}</p>
            <Button className="mt-4" onClick={() => send({ type: 'rematch_accept' })}>
              Rematch
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
