import { Link } from 'react-router-dom';
import type { GameId } from '@gobbies/shared';
import { ALL_GAME_IDS, GAME_META } from '@gobbies/shared';
import { accentForGame, accentTokens } from '@/game/accent';
import { cn } from '@/lib/utils';
import { useThemeStyle } from '@/stores/settingsStore';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const;

export interface GameLobbyCardProps {
  gameId: GameId;
  className?: string;
}

function gameIndex(gameId: GameId): number {
  const idx = ALL_GAME_IDS.indexOf(gameId);
  return idx >= 0 ? idx : 0;
}

/** Color-coded lobby tile from redesign 2a. */
function NeonTavernCard({ gameId, className }: GameLobbyCardProps) {
  const meta = GAME_META[gameId];
  const tokens = accentTokens(accentForGame(gameId));

  return (
    <Link
      to={`/play/${gameId}`}
      className={cn('group block', className)}
      data-testid={`game-card-${gameId}`}
    >
      <div
        className={cn(
          'flex h-full flex-col gap-2.5 border border-border bg-card p-5 transition-all duration-200',
          'border-t-2 group-hover:-translate-y-1 group-hover:shadow-[0_0_26px_rgba(99,102,241,.2)]',
        )}
        style={{
          borderTopColor: tokens.border,
          boxShadow: tokens.insetShadow,
        }}
      >
        <span
          className="size-2.5 shrink-0"
          style={{
            background: tokens.dot,
            boxShadow: `0 0 12px ${tokens.dot}`,
          }}
          aria-hidden
        />
        <span className="retro text-[11px] leading-snug text-foreground">{meta.name}</span>
        <span className="text-[13px] leading-snug text-muted-foreground">{meta.tagline}</span>
      </div>
    </Link>
  );
}

/** Torch-lit row card from redesign 2b. */
function EmeraldDenCard({ gameId, className }: GameLobbyCardProps) {
  const meta = GAME_META[gameId];
  const numeral = ROMAN_NUMERALS[gameIndex(gameId)] ?? 'I';

  return (
    <Link
      to={`/play/${gameId}`}
      className={cn('group block', className)}
      data-testid={`game-card-${gameId}`}
    >
      <div
        className={cn(
          'flex items-center gap-[18px] border border-[rgba(132,155,73,.28)] border-l-[3px] border-l-primary',
          'bg-[rgba(24,27,19,.85)] px-[22px] py-[18px] transition-all duration-200',
          'group-hover:border-[rgba(132,155,73,.6)] group-hover:bg-[rgba(33,38,25,.95)] group-hover:shadow-[0_0_22px_rgba(132,155,73,.25)]',
        )}
      >
        <span className="gg-font-fantasy w-[34px] shrink-0 text-center text-[22px] text-gold [text-shadow:0_0_10px_rgba(236,194,78,.6)]">
          {numeral}
        </span>
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="gg-font-fantasy text-xl text-foreground">{meta.name}</span>
          <span className="text-[13px] text-muted-foreground">{meta.tagline}</span>
        </div>
        <span className="gg-font-fantasy ml-auto shrink-0 text-lg text-primary" aria-hidden>
          ›
        </span>
      </div>
    </Link>
  );
}

/** Centered table card from redesign 2c — rose/violet alternating. */
function MarqueeTableCard({ gameId, className }: GameLobbyCardProps) {
  const meta = GAME_META[gameId];
  const rose = gameIndex(gameId) % 2 === 0;
  const border = rose ? 'rgba(244,63,94,.45)' : 'rgba(139,92,246,.45)';
  const titleColor = rose ? '#fda4af' : '#c4b5fd';
  const titleGlow = rose ? 'rgba(244,63,94,.8)' : 'rgba(139,92,246,.8)';
  const insetGlow = rose ? 'rgba(244,63,94,.1)' : 'rgba(139,92,246,.1)';

  return (
    <Link
      to={`/play/${gameId}`}
      className={cn('group block', className)}
      data-testid={`game-card-${gameId}`}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-2 bg-[rgba(24,15,32,.85)] px-5 py-[26px] text-center transition-all duration-200',
          'group-hover:-translate-y-1',
        )}
        style={{
          border: `1px solid ${border}`,
          boxShadow: `inset 0 0 30px ${insetGlow}`,
        }}
      >
        <span
          className="gg-marquee-display text-[22px]"
          style={{
            color: titleColor,
            textShadow: `0 0 14px ${titleGlow}`,
          }}
        >
          {meta.name}
        </span>
        <span className="text-[12.5px] text-[#8b8496]">{meta.tagline}</span>
      </div>
    </Link>
  );
}

/** Monochrome lobby tile — flat, no accent glow. */
function MonoCard({ gameId, className }: GameLobbyCardProps) {
  const meta = GAME_META[gameId];

  return (
    <Link
      to={`/play/${gameId}`}
      className={cn('group block', className)}
      data-testid={`game-card-${gameId}`}
    >
      <div className="flex h-full flex-col gap-2 border border-border bg-card p-5 transition-colors group-hover:bg-muted/40">
        <span className="text-sm font-medium text-foreground">{meta.name}</span>
        <span className="text-[13px] leading-snug text-muted-foreground">{meta.tagline}</span>
      </div>
    </Link>
  );
}

/** Theme-aware lobby game tile. */
export function GameLobbyCard(props: GameLobbyCardProps) {
  const style = useThemeStyle();

  switch (style) {
    case 'emeraldDen':
      return <EmeraldDenCard {...props} />;
    case 'highRollerMarquee':
      return <MarqueeTableCard {...props} />;
    case 'mono':
      return <MonoCard {...props} />;
    default:
      return <NeonTavernCard {...props} />;
  }
}
