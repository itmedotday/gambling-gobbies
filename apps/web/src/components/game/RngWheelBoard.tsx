import { useCallback, useEffect, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';
import { WheelVisual } from '@itme.day/rng-react-components';

const SPIN_MS = 1500;

export interface RngWheelBoardProps {
  /** Win chance 1-98, owned by the page. */
  winChance: number;
  /** Engine-resolved landing angle in degrees [0, 360). */
  angle: number | null;
  /** Engine-resolved win flag for the current spin. */
  isWin: boolean;
  /** Increment to trigger a new spin animation. */
  request: number;
  /** Fired when the spin animation settles. */
  onComplete: () => void;
}

/**
 * Wheel visual built from the rng-react-components WheelVisual primitive. The page
 * stays the source of truth (win chance + engine outcome); this component only
 * animates to the already-resolved angle so the display always matches the payout.
 */
export function RngWheelBoard({
  winChance,
  angle,
  isWin,
  request,
  onComplete,
}: RngWheelBoardProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinStatus, setSpinStatus] = useState<'idle' | 'win' | 'loss'>('idle');

  const prevRequest = useRef(request);
  const cumulativeRotation = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const [wheelStyles, wheelApi] = useSpring(() => ({
    rotate: 0,
    config: { mass: 1.8, tension: 100, friction: 20 },
  }));

  const [centerStyles, centerApi] = useSpring(() => ({
    scale: 1,
    boxShadow: '0 0 15px rgba(99, 102, 241, 0.1), inset 0 0 4px rgba(255, 255, 255, 0.1)',
    config: { tension: 300, friction: 12 },
  }));

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  useEffect(() => {
    if (prevRequest.current === request) return;
    prevRequest.current = request;
    if (angle === null) return;

    clearTimer();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional state reset per request
    setIsSpinning(true);
    setSpinStatus('idle');

    const targetAngle = (360 - angle) % 360;
    const baseSpins = 720;
    const currentAngle = cumulativeRotation.current % 360;
    let angleDiff = targetAngle - currentAngle;
    if (angleDiff <= 0) angleDiff += 360;
    const nextRotation = cumulativeRotation.current + baseSpins + angleDiff;
    cumulativeRotation.current = nextRotation;

    wheelApi.start({
      to: { rotate: nextRotation },
      config: { mass: 2, tension: 80, friction: 22 },
    });

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      const outcomeStatus = isWin ? 'win' : 'loss';
      setSpinStatus(outcomeStatus);
      setIsSpinning(false);

      if (isWin) {
        centerApi.start({
          to: [
            {
              scale: 1.15,
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.3)',
            },
            {
              scale: 1,
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.2), inset 0 0 4px rgba(255, 255, 255, 0.1)',
            },
          ],
          config: { tension: 350, friction: 12 },
        });
      } else {
        centerApi.start({
          to: [
            {
              scale: 0.95,
              boxShadow: '0 0 10px rgba(225, 29, 72, 0.4), inset 0 0 4px rgba(255, 255, 255, 0.1)',
            },
            {
              scale: 1,
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.1), inset 0 0 4px rgba(255, 255, 255, 0.1)',
            },
          ],
          config: { tension: 200, friction: 15 },
        });
      }

      onCompleteRef.current();
    }, SPIN_MS);
  }, [request, angle, isWin, wheelApi, centerApi, clearTimer]);

  const glow =
    spinStatus === 'win'
      ? 'animate-pulse-glow-win border-primary/40'
      : spinStatus === 'loss'
        ? 'animate-pulse-glow-loss border-destructive/40'
        : '';

  return (
    <div
      className={`w-full max-w-xl glass-panel rounded-3xl p-4 sm:p-5 flex flex-col items-center transition-[box-shadow,transform] duration-300 ${glow}`}
    >
      <WheelVisual
        wheelStyles={wheelStyles}
        pointerStyles={centerStyles}
        centerStyles={centerStyles}
        isSpinning={isSpinning}
        spinStatus={spinStatus}
        multiplierDisplay=""
        winChance={winChance}
      />
    </div>
  );
}
