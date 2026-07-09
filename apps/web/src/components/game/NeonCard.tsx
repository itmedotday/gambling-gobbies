import type { ReactNode } from 'react';
import type { GameAccent } from '@/game/accent';
import { accentTokens } from '@/game/accent';
import { cn } from '@/lib/utils';

export interface NeonCardProps {
  children: ReactNode;
  className?: string;
  /** Top accent stripe color (game accent key). */
  accent?: GameAccent;
  /** Visual stage panel (taller min-height, centered). */
  stage?: boolean;
  /** Clip overflow on stage (Phaser scenes). Default false so decorations aren't clipped. */
  stageClip?: boolean;
  'data-testid'?: string;
}

/** Flat neon-tavern card shell from the redesign. */
export function NeonCard({ children, className, accent, stage, stageClip, 'data-testid': testId }: NeonCardProps) {
  const tokens = accent ? accentTokens(accent) : null;

  return (
    <div
      data-testid={testId}
      className={cn(
        'bg-card text-card-foreground border border-border',
        'shadow-[var(--gg-card-shadow)]',
        accent && 'border-t-2',
        stage && 'relative flex w-full min-h-[min(360px,50vh)] flex-col items-center justify-center',
        stage && (stageClip ? 'overflow-hidden' : 'overflow-visible'),
        className,
      )}
      style={
        tokens
          ? {
              borderTopColor: tokens.border,
              boxShadow: `${tokens.insetShadow}, var(--gg-card-shadow)`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
