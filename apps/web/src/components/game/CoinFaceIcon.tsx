import { cn } from '@/lib/utils';

export type CoinFace = 'gold' | 'moon';

export interface CoinFaceIconProps {
  side: CoinFace;
  className?: string;
  selected?: boolean;
}

/** Flat icon matching Coin3D face art (amber ring + circle vs blue ring + diamond). */
export function CoinFaceIcon({ side, className, selected = false }: CoinFaceIconProps) {
  const isGold = side === 'gold';

  return (
    <svg viewBox="0 0 64 64" className={cn('shrink-0', className)} aria-hidden="true">
      <defs>
        <filter id={`coin-glow-${side}`} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation={selected ? 3 : 1.5}
            floodColor={isGold ? 'rgba(245,158,11,0.65)' : 'rgba(59,130,246,0.65)'}
          />
        </filter>
      </defs>
      <g filter={`url(#coin-glow-${side})`}>
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="#09090b"
          stroke={isGold ? '#f59e0b' : '#3b82f6'}
          strokeWidth="5"
        />
        {isGold ? (
          <circle
            cx="32"
            cy="32"
            r="13"
            fill="#09090b"
            stroke="rgba(217,119,6,0.55)"
            strokeWidth="3"
          />
        ) : (
          <rect
            x="21"
            y="21"
            width="22"
            height="22"
            rx="2"
            fill="#09090b"
            stroke="rgba(37,99,235,0.55)"
            strokeWidth="3"
            transform="rotate(45 32 32)"
          />
        )}
      </g>
    </svg>
  );
}
