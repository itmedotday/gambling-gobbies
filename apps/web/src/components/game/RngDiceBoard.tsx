import { useCallback, useEffect, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';
import { InteractiveTrack, OutcomeBadge } from '@itme.day/rng-react-components';

const ANIMATION_MS = 650;
const CYCLE_MS = 30;

export interface RngDiceBoardProps {
  /** Win threshold 0-100, owned by the page. */
  target: number;
  /** true = win rolling over the target. */
  rollOver: boolean;
  /** Engine-resolved roll to animate to; null before the first bet. */
  roll: number | null;
  /** Engine-resolved win flag for the current roll. */
  isWin: boolean;
  /** Increment to trigger a new roll animation. */
  request: number;
  /** Fired when the roll animation settles. */
  onComplete: () => void;
}

/**
 * Dice visual built from the rng-react-components track + badge primitives. The
 * page stays the source of truth (target + engine outcome); this component only
 * animates to the already-resolved roll so the display always matches the payout.
 */
export function RngDiceBoard({
  target,
  rollOver,
  roll,
  isWin,
  request,
  onComplete,
}: RngDiceBoardProps) {
  const [isRolling, setIsRolling] = useState(false);
  const [cyclingNumber, setCyclingNumber] = useState('50.00');
  const [displayRoll, setDisplayRoll] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'win' | 'loss'>('idle');

  const trackRef = useRef<HTMLDivElement>(null);
  const prevRequest = useRef(request);
  const previousRoll = useRef<number | null>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const [badgeStyles, badgeApi] = useSpring(() => ({
    leftPercent: 50,
    scale: 0,
    opacity: 0,
    y: -44,
    config: { mass: 1.2, tension: 140, friction: 22 },
  }));

  const thumbStyles = useSpring({
    scale: isRolling ? 1.1 : 1,
    boxShadow: '0 0 0 2px color-mix(in srgb, var(--primary) 18%, transparent), inset 0 0 0 1px var(--border)',
    config: { tension: 300, friction: 15 },
  });

  const clearTimers = useCallback(() => {
    if (cycleRef.current !== null) {
      clearInterval(cycleRef.current);
      cycleRef.current = null;
    }
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  useEffect(() => {
    if (prevRequest.current === request) return;
    prevRequest.current = request;
    if (roll === null) return;

    clearTimers();
    // Animation kickoff when a new bet request arrives.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional state reset per request
    setIsRolling(true);
    setStatus('idle');
    setDisplayRoll(null);

    cycleRef.current = setInterval(() => {
      setCyclingNumber((Math.random() * 100).toFixed(2));
    }, CYCLE_MS);

    const startPos = previousRoll.current ?? 50;
    badgeApi.start({
      from: { leftPercent: startPos, scale: 0.8, opacity: previousRoll.current !== null ? 1 : 0 },
      to: { leftPercent: roll, scale: 1, opacity: 1 },
      config: { mass: 0.8, tension: 220, friction: 22 },
    });

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      if (cycleRef.current !== null) {
        clearInterval(cycleRef.current);
        cycleRef.current = null;
      }
      setCyclingNumber(roll.toFixed(2));
      setDisplayRoll(roll);
      setStatus(isWin ? 'win' : 'loss');
      setIsRolling(false);
      previousRoll.current = roll;
      onCompleteRef.current();
    }, ANIMATION_MS);
  }, [request, roll, isWin, badgeApi, clearTimers]);

  const glow =
    status === 'win'
      ? 'animate-pulse-glow-win border-primary/40'
      : status === 'loss'
        ? 'animate-pulse-glow-loss border-destructive/40'
        : '';

  return (
    <div
      className={`w-full max-w-xl glass-panel rounded-3xl p-4 sm:p-5 flex flex-col items-center transition-[box-shadow,transform] duration-300 ${glow}`}
    >
      {/* Display only: the target is driven by the control panel Slider, not
          this track. Wrapping in pointer-events-none neutralises the package's
          built-in grab/pointer affordances, and aria-hidden keeps the real
          slider (right panel) as the single accessible control. */}
      <div className="w-full pointer-events-none select-none" aria-hidden="true">
        <InteractiveTrack
          rollTarget={target}
          isRollOver={rollOver}
          isRolling={isRolling}
          onMouseDown={() => {}}
          onTouchStart={() => {}}
          trackRef={trackRef}
          thumbStyles={thumbStyles}
        >
          <OutcomeBadge
            style={{
              left: badgeStyles.leftPercent.to((p) => `${p}%`),
              transform: 'translateX(-50%)',
              opacity: badgeStyles.opacity,
              scale: badgeStyles.scale,
              top: badgeStyles.y,
            }}
            isRolling={isRolling}
            cyclingNumber={cyclingNumber}
            rollOutcome={displayRoll}
            rollStatus={status}
          />
        </InteractiveTrack>
      </div>
    </div>
  );
}
