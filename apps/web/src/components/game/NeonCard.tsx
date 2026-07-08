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

/** Flat neon-tavern card shell from the redesign (bypasses 8-bit thick borders). */
export function NeonCard({ children, className, accent, stage, stageClip, 'data-testid': testId }: NeonCardProps) {
  const tokens = accent ? accentTokens(accent) : null;

  return (
    <div
      data-testid={testId}
      className={cn(
        'bg-card text-card-foreground border border-border',
        'shadow-[0_4px_20px_rgba(0,0,0,.4)]',
        accent && 'border-t-2',
        stage && 'relative flex w-full min-h-[min(360px,50vh)] flex-col items-center justify-center',
        stage && (stageClip ? 'overflow-hidden' : 'overflow-visible'),
        className,
      )}
      style={
        tokens
          ? {
              borderTopColor: tokens.border,
              boxShadow: `${tokens.insetShadow}, 0 4px 20px rgba(0,0,0,.4)`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
