import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Two-column game layout: stage left, controls right on large screens. */
export function GamePageGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('gg-game-grid', className)}>{children}</div>;
}

/** Controls column stack inside a game page. */
export function GameControlsPanel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('gg-game-panel', className)}>{children}</div>;
}
