import type { ReactNode } from 'react';
import type { GameId } from '@gobbies/shared';
import { accentForGame, accentTokens } from '@/game/accent';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { cn } from '@/lib/utils';

export interface GamePageFrameProps {
  game: GameId;
  title: string;
  rightHeader?: ReactNode;
  children: ReactNode;
}

export function GamePageFrame({ game, title, rightHeader, children }: GamePageFrameProps) {
  const accent = accentTokens(accentForGame(game));

  return (
    <div
      className={cn('mx-auto flex w-full max-w-6xl flex-col gap-5')}
      style={
        {
          backgroundImage: `radial-gradient(at 50% 0%, ${accent.radial} 0, transparent 50%)`,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1
          className="retro text-[17px] text-foreground"
          style={{ textShadow: `0 0 12px rgba(${accent.glowRgb}, .9)` }}
        >
          {title}
        </h1>
        {rightHeader ?? <GameStatsHeader game={game} variant="inline" />}
      </div>
      {children}
    </div>
  );
}
