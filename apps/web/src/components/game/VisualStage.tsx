import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface VisualStageProps {
  /** Intrinsic width used for aspect-ratio reservation (prevents CLS). */
  width: number;
  /** Intrinsic height used for aspect-ratio reservation. */
  height: number;
  children: ReactNode;
  className?: string;
  /** When true, shows an overlay without changing layout size. */
  loading?: boolean;
  loadingLabel?: string;
  'data-testid'?: string;
  'data-scene-ready'?: 'true' | 'false';
}

/**
 * Stable visual viewport: reserves space before Phaser/RNG content mounts so the
 * page does not jump when scenes load or fonts swap.
 */
export function VisualStage({
  width,
  height,
  children,
  className,
  loading = false,
  loadingLabel = 'Loading…',
  'data-testid': testId,
  'data-scene-ready': sceneReady,
}: VisualStageProps) {
  return (
    <div
      className={cn('gg-visual-stage relative mx-auto w-full', className)}
      style={{
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
      }}
      data-testid={testId}
      data-scene-ready={sceneReady}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      {loading ? (
        <div
          className="absolute inset-0 z-10 grid place-items-center bg-card/50 text-sm text-muted-foreground backdrop-blur-[1px]"
          aria-live="polite"
          aria-busy="true"
        >
          {loadingLabel}
        </div>
      ) : null}
    </div>
  );
}
