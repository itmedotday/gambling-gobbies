import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Copy, Loader2 } from 'lucide-react';
import { Button, Badge } from '@/components/kit';
import { ProfitChart } from '@/components/game/ProfitChart';
import { NeonCard } from '@/components/game/NeonCard';
import { useVersusStore, useVersusView } from '@/stores/versusStore';
import { VERSUS_INSTANT_GAMES, GAME_META } from '@gobbies/shared';
import { avatarSpriteUrl } from '@/stores/sessionStore';
import { accentForGame, accentTokens } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

function formatTimer(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VersusArenaPage() {
  const layout = useThemeLayout();
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

  const labelClass = layout.sectionLabelClass;

  if (!view) {
    return (
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden />
          Connecting to room {code}…
        </div>
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
  const leaderId =
    view.players.length > 0
      ? [...view.players].sort((a, b) => b.balance - a.balance)[0]!.playerId
      : null;
  const showReady = view.phase === 'waiting' || view.phase === 'live';
  const showForfeit = view.phase === 'live';

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
      style={layout.pageGlowStyle}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <h1 className={cn(layout.pageTitleClass, 'text-lg sm:text-xl')}>
            Versus · <span className="text-primary">{view.code}</span>
          </h1>
          <span className="text-xs text-muted-foreground capitalize">
            Phase:{' '}
            <span
              className={
                view.phase === 'live' && !layout.isMono
                  ? 'text-[color:var(--chart-3)] [text-shadow:0_0_8px_rgba(16,185,129,.7)]'
                  : view.phase === 'live'
                    ? 'text-foreground font-medium'
                    : ''
              }
            >
              {view.phase}
            </span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {showReady ? (
            <Button
              variant="secondary"
              className={cn(
                'border border-primary/50 bg-primary/10 text-primary',
                layout.isMono ? 'text-xs' : 'retro text-[10px] shadow-[0_0_16px_rgba(99,102,241,.25)]',
              )}
              onClick={() => send({ type: 'ready' })}
            >
              Ready up
            </Button>
          ) : null}
          {showForfeit ? (
            <Button
              variant="destructive"
              className={cn(
                'border border-destructive/50 bg-destructive/10 text-destructive',
                layout.isMono ? 'text-xs' : 'retro text-[10px] shadow-[0_0_16px_rgba(244,63,94,.25)]',
              )}
              onClick={() => send({ type: 'forfeit' })}
            >
              Forfeit
            </Button>
          ) : null}
          <Button
            variant="outline"
            className={cn(
              'border-border bg-transparent text-muted-foreground',
              layout.isMono ? 'text-xs' : 'retro text-[10px]',
            )}
            onClick={() => leave()}
          >
            Leave
          </Button>
        </div>
      </div>

      {waitingForOpponent && (
        <NeonCard className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className={cn(labelClass, 'text-primary')}>Room code</span>
            <span className="text-xs text-muted-foreground">
              Share this code (or the link) so a friend can join. Waiting for an opponent…
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                layout.isMarquee ? 'gg-marquee-display text-2xl' : layout.isEmerald ? 'gg-font-fantasy text-2xl' : layout.isMono ? 'font-mono text-2xl font-bold' : 'retro text-2xl',
                'tracking-widest text-primary',
              )}
              data-testid="room-code"
            >
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
          <span className={cn(labelClass, 'text-muted-foreground')}>Timer</span>
          <span
            className={cn(
              layout.isMarquee ? 'gg-marquee-display text-lg' : layout.isMono ? 'font-mono text-base font-semibold' : 'retro text-base',
              view.timerRemainingMs < 30_000
                ? 'text-destructive drop-shadow-[0_0_12px_rgba(244,63,94,.8)]'
                : layout.isMono
                  ? 'text-foreground'
                  : 'text-[color:var(--chart-3)] drop-shadow-[0_0_12px_rgba(16,185,129,.8)]',
            )}
          >
            {formatTimer(view.timerRemainingMs)}
          </span>
        </div>
        <div className="h-2.5 border border-border bg-background">
          <div
            className={cn(
              'h-full',
              layout.isMono ? 'bg-foreground' : 'bg-gradient-to-r from-[#4f46e5] to-[#818cf8] shadow-[0_0_14px_rgba(99,102,241,.7)]',
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      </NeonCard>

      <div className="grid gap-4 sm:grid-cols-2">
        {view.players.map((p) => {
          const start = view.snapshots[0]?.balances[p.playerId] ?? p.balance;
          const delta = Math.round((p.balance - start) * 100) / 100;
          const leading = view.phase !== 'waiting' && p.playerId === leaderId && view.players.length > 1;
          return (
            <NeonCard
              key={p.sessionId}
              className={cn(
                'flex items-center gap-3.5 p-5',
                leading && !layout.isMono
                  ? 'border-primary/50 shadow-[0_0_18px_rgba(99,102,241,.2)]'
                  : leading
                    ? 'border-foreground/40'
                    : 'border-border',
              )}
            >
              <img
                src={avatarSpriteUrl(p.avatar)}
                alt=""
                className={cn(
                  'h-12 w-12 image-pixelated',
                  !layout.isMono && 'drop-shadow-[0_0_8px_rgba(99,102,241,.5)]',
                )}
              />
              <div className="flex flex-col gap-1">
                <p
                  className={cn(
                    labelClass,
                    leading ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {layout.isMono ? p.name : p.name.toUpperCase()}
                </p>
                <p className="text-[15px] text-foreground">
                  {p.balance.toLocaleString()} GG{' '}
                  {delta !== 0 && (
                    <span
                      className={cn(
                        'text-xs',
                        delta > 0
                          ? layout.isMono
                            ? 'text-foreground'
                            : 'text-[color:var(--chart-3)]'
                          : 'text-destructive',
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
                <Badge
                  className={cn(
                    'ml-auto',
                    layout.isMono ? 'text-[10px]' : 'retro text-[8px]',
                    layout.isMono
                      ? 'border-foreground/40 bg-foreground/10 text-foreground'
                      : 'border-[color:var(--chart-3)]/50 bg-[color:var(--chart-3)]/10 text-[color:var(--chart-3)]',
                  )}
                >
                  LEADING
                </Badge>
              )}
            </NeonCard>
          );
        })}
      </div>

      <NeonCard className="flex flex-col gap-3.5 px-6 py-5">
        <span className={cn(labelClass, 'text-muted-foreground')}>Profit race</span>
        <ProfitChart snapshots={view.snapshots} playerIds={playerIds} names={names} />
      </NeonCard>

      <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
        <NeonCard className="flex max-h-44 flex-col gap-2.5 overflow-y-auto px-6 py-5">
          <span className={cn(labelClass, 'text-muted-foreground')}>Event feed</span>
          <div className="flex flex-col gap-1.5 font-mono text-xs">
            {view.events.length === 0 ? (
              <p className="text-muted-foreground">No events yet.</p>
            ) : (
              view.events.map((ev, i) => (
                <p
                  key={i}
                  className={
                    ev.message.toLowerCase().includes('won') || ev.message.includes('+')
                      ? layout.isMono
                        ? 'text-foreground'
                        : 'text-[color:var(--chart-3)]'
                      : ev.message.toLowerCase().includes('bust') ||
                          ev.message.toLowerCase().includes('forfeit')
                        ? 'text-destructive'
                        : 'text-muted-foreground'
                  }
                >
                  {ev.message}
                </p>
              ))
            )}
          </div>
        </NeonCard>

        {view.phase === 'live' && (
          <NeonCard className="flex flex-col gap-3 px-6 py-5">
            <span className={cn(labelClass, 'text-muted-foreground')}>Play a game</span>
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
                      className={cn(
                        'border hover:brightness-110',
                        layout.isMono ? 'text-xs' : 'retro text-[8px]',
                      )}
                      style={
                        layout.isMono
                          ? undefined
                          : {
                              borderColor: `${tokens.border}80`,
                              color: tokens.text,
                              boxShadow: `0 0 12px rgba(${tokens.glowRgb}, .25)`,
                            }
                      }
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
          <p className={cn(labelClass, 'text-lg text-primary')}>
            {view.winnerId ? `Winner: ${names[view.winnerId] ?? view.winnerId}` : 'Match ended'}
          </p>
          <p className="text-xs text-muted-foreground">{view.endedReason}</p>
          <Button
            className={cn(
              'gg-neon-btn-primary mt-4',
              layout.isMarquee ? 'gg-marquee-display text-base' : layout.isMono ? 'text-sm' : 'retro',
            )}
            onClick={() => send({ type: 'rematch_accept' })}
          >
            Rematch
          </Button>
        </NeonCard>
      )}
    </div>
  );
}
