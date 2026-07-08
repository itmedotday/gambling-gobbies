import type { ReactNode } from 'react';
import type { GameId } from '@gobbies/shared';
import { accentForGame, accentTokens } from '@/game/accent';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export interface GamePageFrameProps {
  game: GameId;
  title: string;
  rightHeader?: ReactNode;
  children: ReactNode;
}

export function GamePageFrame({ game, title, rightHeader, children }: GamePageFrameProps) {
  const accent = accentTokens(accentForGame(game));
  const layout = useThemeLayout();

  return (
    <div
      className="flex w-full flex-col gap-6"
      style={
        {
          backgroundImage: `radial-gradient(at 50% 0%, ${accent.radial} 0, transparent 50%)`,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <h1
          className={cn(layout.gameTitleClass, 'text-foreground')}
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
