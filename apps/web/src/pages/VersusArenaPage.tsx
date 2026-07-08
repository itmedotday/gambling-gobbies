import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { Button, Badge } from '@/components/kit';
import { ProfitChart } from '@/components/game/ProfitChart';
import { NeonCard } from '@/components/game/NeonCard';
import { useVersusStore, useVersusView } from '@/stores/versusStore';
import { VERSUS_INSTANT_GAMES, GAME_META } from '@gobbies/shared';
import { avatarSpriteUrl } from '@/stores/sessionStore';
import { accentForGame, accentTokens } from '@/game/accent';
import { cn } from '@/lib/utils';

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
    <div
      className="mx-auto flex w-full max-w-5xl flex-col gap-5"
      style={{
        backgroundImage:
          'radial-gradient(at 50% 0%, rgba(99,102,241,.16) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(244,63,94,.07) 0, transparent 50%)',
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <h1 className="retro text-[17px] text-foreground drop-shadow-[0_0_12px_rgba(99,102,241,.9)]">
            Versus · <span className="text-primary">{view.code}</span>
          </h1>
          <span className="text-xs text-muted-foreground capitalize">
            Phase:{' '}
            <span
              className={
                view.phase === 'live'
                  ? 'text-[color:var(--chart-3)] [text-shadow:0_0_8px_rgba(16,185,129,.7)]'
                  : ''
              }
            >
              {view.phase}
            </span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Button
            variant="secondary"
            className="retro border border-primary/50 bg-primary/10 text-[10px] text-primary shadow-[0_0_16px_rgba(99,102,241,.25)]"
            onClick={() => send({ type: 'ready' })}
          >
            Ready up
          </Button>
          <Button
            variant="destructive"
            className="retro border border-destructive/50 bg-destructive/10 text-[10px] text-destructive shadow-[0_0_16px_rgba(244,63,94,.25)]"
            onClick={() => send({ type: 'forfeit' })}
          >
            Forfeit
          </Button>
          <Button
            variant="outline"
            className="retro border-border bg-transparent text-[10px] text-muted-foreground"
            onClick={() => leave()}
          >
            Leave
          </Button>
        </div>
      </div>

      {waitingForOpponent && (
        <NeonCard className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
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
        </NeonCard>
      )}

      <NeonCard className="flex flex-col gap-3 px-6 py-5">
        <div className="flex items-baseline justify-between">
          <span className="retro text-[10px] text-muted-foreground">Timer</span>
          <span
            className={cn(
              'retro text-base',
              view.timerRemainingMs < 30_000
                ? 'text-destructive drop-shadow-[0_0_12px_rgba(244,63,94,.8)]'
                : 'text-[color:var(--chart-3)] drop-shadow-[0_0_12px_rgba(16,185,129,.8)]',
            )}
          >
            {formatTimer(view.timerRemainingMs)}
          </span>
        </div>
        <div className="h-2.5 border border-border bg-background">
          <div
            className="h-full bg-gradient-to-r from-[#4f46e5] to-[#818cf8] shadow-[0_0_14px_rgba(99,102,241,.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </NeonCard>

      <div className="grid gap-4 sm:grid-cols-2">
        {view.players.map((p, idx) => {
          const start = view.snapshots[0]?.balances[p.playerId] ?? p.balance;
          const delta = Math.round((p.balance - start) * 100) / 100;
          const leading = idx === 0;
          return (
            <NeonCard
              key={p.sessionId}
              className={cn(
                'flex items-center gap-3.5 p-5',
                leading
                  ? 'border-primary/50 shadow-[0_0_18px_rgba(99,102,241,.2)]'
                  : 'border-destructive/50 shadow-[0_0_18px_rgba(244,63,94,.15)]',
              )}
            >
              <img
                src={avatarSpriteUrl(p.avatar)}
                alt=""
                className="h-12 w-12 image-pixelated drop-shadow-[0_0_8px_rgba(99,102,241,.5)]"
              />
              <div className="flex flex-col gap-1">
                <p
                  className={cn('retro text-[10px]', leading ? 'text-primary' : 'text-destructive')}
                >
                  {p.name.toUpperCase()}
                </p>
                <p className="text-[15px] text-foreground">
                  {p.balance.toLocaleString()} GG{' '}
                  {delta !== 0 && (
                    <span
                      className={cn(
                        'text-xs',
                        delta > 0 ? 'text-[color:var(--chart-3)]' : 'text-destructive',
                      )}
                    >
                      {delta > 0 ? '+' : '−'}
                      {Math.abs(delta)}
                    </span>
                  )}
                </p>
                {p.disconnected && <Badge variant="destructive">Reconnecting…</Badge>}
              </div>
              {leading && (
                <Badge className="retro ml-auto border border-[color:var(--chart-3)]/50 bg-[color:var(--chart-3)]/10 text-[8px] text-[color:var(--chart-3)]">
                  LEADING
                </Badge>
              )}
            </NeonCard>
          );
        })}
      </div>

      <NeonCard className="flex flex-col gap-3.5 px-6 py-5">
        <span className="retro text-[10px] text-muted-foreground">Profit race</span>
        <ProfitChart snapshots={view.snapshots} playerIds={playerIds} names={names} />
      </NeonCard>

      <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
        <NeonCard className="flex max-h-44 flex-col gap-2.5 overflow-y-auto px-6 py-5">
          <span className="retro text-[10px] text-muted-foreground">Event feed</span>
          <div className="flex flex-col gap-1.5 font-mono text-xs">
            {view.events.map((ev, i) => (
              <p
                key={i}
                className={
                  ev.message.toLowerCase().includes('won') || ev.message.includes('+')
                    ? 'text-[color:var(--chart-3)]'
                    : ev.message.toLowerCase().includes('bust') ||
                        ev.message.toLowerCase().includes('forfeit')
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                }
              >
                {ev.message}
              </p>
            ))}
          </div>
        </NeonCard>

        {view.phase === 'live' && (
          <NeonCard className="flex flex-col gap-3 px-6 py-5">
            <span className="retro text-[10px] text-muted-foreground">Play a game</span>
            <p className="text-xs text-muted-foreground">
              Instant games debit your versus balance via the server.
            </p>
            <div className="flex flex-wrap gap-2">
              {VERSUS_INSTANT_GAMES.map((id) => {
                const tokens = accentTokens(accentForGame(id));
                return (
                  <Link key={id} to={`/versus/${roomCode}/play/${id}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="retro border text-[8px] hover:brightness-110"
                      style={{
                        borderColor: `${tokens.border}80`,
                        color: tokens.text,
                        boxShadow: `0 0 12px rgba(${tokens.glowRgb}, .25)`,
                      }}
                    >
                      {GAME_META[id].name}
                    </Button>
                  </Link>
                );
              })}
            </div>
            <p className="text-[10px] text-muted-foreground">
              Mines and Crash use solo wallet — session games are not yet wired for versus.
            </p>
          </NeonCard>
        )}
      </div>

      {view.phase === 'finished' && (
        <NeonCard className="p-6 text-center">
          <p className="retro text-sm text-primary">
            {view.winnerId ? `Winner: ${names[view.winnerId] ?? view.winnerId}` : 'Match ended'}
          </p>
          <p className="text-xs text-muted-foreground">{view.endedReason}</p>
          <Button
            className="gg-neon-btn-primary retro mt-4"
            onClick={() => send({ type: 'rematch_accept' })}
          >
            Rematch
          </Button>
        </NeonCard>
      )}
    </div>
  );
}
