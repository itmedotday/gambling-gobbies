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
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="retro text-lg text-foreground drop-shadow-[0_0_12px_rgba(99,102,241,.55)]">
            Versus · <span className="text-primary">{view.code}</span>
          </h1>
          <p className="text-xs text-muted-foreground capitalize">
            Phase:{' '}
            <span className={view.phase === 'live' ? 'text-[color:var(--chart-3)]' : 'text-muted-foreground'}>
              {view.phase}
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="retro border border-primary/50 bg-primary/10 text-primary shadow-[0_0_16px_rgba(99,102,241,.25)]"
            onClick={() => send({ type: 'ready' })}
          >
            Ready up
          </Button>
          <Button
            variant="destructive"
            className="retro border border-destructive/50 bg-destructive/10 text-destructive shadow-[0_0_16px_rgba(244,63,94,.22)]"
            onClick={() => send({ type: 'forfeit' })}
          >
            Forfeit
          </Button>
          <Button variant="outline" className="retro border border-border bg-transparent text-muted-foreground" onClick={() => leave()}>
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

      <Card className="border border-border bg-card">
        <CardHeader>
          <CardTitle className="retro text-xs flex items-center justify-between">
            <span>Timer</span>
            <span
              className={[
                'retro text-base',
                view.timerRemainingMs < 30_000
                  ? 'text-destructive drop-shadow-[0_0_12px_rgba(244,63,94,.35)]'
                  : 'text-[color:var(--chart-3)] drop-shadow-[0_0_12px_rgba(16,185,129,.35)]',
              ].join(' ')}
            >
              {formatTimer(view.timerRemainingMs)}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress
            value={progress}
            className="h-3 border border-border bg-background"
          />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {view.players.map((p, idx) => (
          <Card
            key={p.sessionId}
            className={[
              'border bg-card',
              idx === 0 ? 'border-primary/50 shadow-[0_0_18px_rgba(99,102,241,.16)]' : 'border-destructive/50 shadow-[0_0_18px_rgba(244,63,94,.12)]',
            ].join(' ')}
          >
            <CardContent className="flex items-center gap-3 p-4">
              <img src={avatarSpriteUrl(p.avatar)} alt="" className="h-10 w-10 image-pixelated" />
              <div>
                <p className={['retro text-[10px]', idx === 0 ? 'text-primary' : 'text-destructive'].join(' ')}>
                  {p.name}
                </p>
                <p className="text-sm text-foreground">
                  {p.balance.toLocaleString()} GG{' '}
                  <span className="text-xs text-muted-foreground">
                    {(() => {
                      const start = view.snapshots[0]?.balances[p.playerId] ?? p.balance;
                      const delta = Math.round((p.balance - start) * 100) / 100;
                      if (delta === 0) return null;
                      const up = delta > 0;
                      return (
                        <span className={up ? 'text-[color:var(--chart-3)]' : 'text-destructive'}>
                          {up ? '+' : '−'}
                          {Math.abs(delta)}
                        </span>
                      );
                    })()}
                  </span>
                </p>
                {p.disconnected && <Badge variant="destructive">Reconnecting…</Badge>}
              </div>
              <div className="ml-auto">
                {idx === 0 && <Badge className="retro text-[8px] border border-[color:var(--chart-3)]/50 bg-[color:var(--chart-3)]/10 text-[color:var(--chart-3)]">LEADING</Badge>}
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

      <Card className="border border-border bg-card">
        <CardHeader>
          <CardTitle className="retro text-xs">Event feed</CardTitle>
        </CardHeader>
        <CardContent className="max-h-44 space-y-1 overflow-y-auto font-mono text-xs">
          {view.events.map((ev, i) => (
            <p
              key={i}
              className={
                ev.message.toLowerCase().includes('won') || ev.message.toLowerCase().includes('+')
                  ? 'text-[color:var(--chart-3)]'
                  : ev.message.toLowerCase().includes('bust') || ev.message.toLowerCase().includes('forfeit')
                    ? 'text-destructive'
                    : 'text-muted-foreground'
              }
            >
              {ev.message}
            </p>
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
