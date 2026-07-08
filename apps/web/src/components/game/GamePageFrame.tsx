import type { ReactNode } from 'react';
import type { GameId } from '@gobbies/shared';
import { accentForGame, accentTokens } from '@/game/accent';
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
      className={cn(
        'flex flex-col gap-6',
        'mx-auto w-full max-w-6xl',
        'bg-background',
      )}
      style={
        {
          backgroundImage: `radial-gradient(at 50% 0%, ${accent.radial} 0, transparent 50%)`,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1
          className="retro text-lg text-foreground"
          style={{
            textShadow: `0 0 12px rgba(${accent.glowRgb}, .9)`,
          }}
        >
          {title}
        </h1>
        {rightHeader}
      </div>
      {children}
    </div>
  );
}

