import { useRef, useState } from 'react';
import { resolveWheelSpin, wheelMultiplier } from '@gobbies/engine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Label } from '@/components/ui/8bit/label';
import { Slider } from '@/components/ui/8bit/slider';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';

const SPIN_MS = 2400;
const BASE_SPINS = 4;

export default function WheelPage() {
  const [winChance, setWinChance] = useState(50);
  const [rotation, setRotation] = useState(0);
  const [status, setStatus] = useState<'idle' | 'spinning' | 'win' | 'loss'>('idle');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotationRef = useRef(0);
  const bet = useConsoleBet('wheel', 1);

  const params = { winChance };
  const multiplier = wheelMultiplier(params);
  const arcDegrees = (winChance / 100) * 360;

  const handleBet = async () => {
    const floats = await bet.beginBet();
    if (!floats) return;
    const outcome = resolveWheelSpin(params, floats);
    // Rotate so the outcome angle ends up under the pointer (top).
    const current = rotationRef.current % 360;
    const targetRotation =
      rotationRef.current + BASE_SPINS * 360 + ((360 - outcome.angle - current + 720) % 360);
    rotationRef.current = targetRotation;
    setStatus('spinning');
    setRotation(targetRotation);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setStatus(outcome.isWin ? 'win' : 'loss');
      bet.settleOutcome({
        detail: outcome.isWin ? 'Hit the gold zone' : 'Missed the gold zone',
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
      });
    }, SPIN_MS);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Wheel</h1>
      <GameStatsHeader game="wheel" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 flex-col items-center justify-center gap-4 p-8">
            <div className="relative" data-testid="wheel-visual">
              <div
                className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 text-gold"
                aria-hidden
              >
                ▼
              </div>
              <div
                className="pixelated h-56 w-56 rounded-full border-4 border-border"
                style={{
                  background: `conic-gradient(var(--gold) 0deg ${arcDegrees / 2}deg, var(--muted) ${arcDegrees / 2}deg ${360 - arcDegrees / 2}deg, var(--gold) ${360 - arcDegrees / 2}deg 360deg)`,
                  transform: `rotate(${rotation}deg)`,
                  transition: status === 'spinning' ? `transform ${SPIN_MS}ms cubic-bezier(0.15, 0.6, 0.25, 1)` : 'none',
                }}
              />
            </div>
            <span
              className={`retro text-sm ${status === 'win' ? 'text-primary' : status === 'loss' ? 'text-destructive' : 'text-muted-foreground'}`}
              data-testid="wheel-status"
              aria-live="polite"
            >
              {status === 'spinning' ? 'Spinning...' : status === 'win' ? 'WIN!' : status === 'loss' ? 'MISS' : 'Place a bet'}
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Win zone</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="wheel-chance">
                  Win chance <span className="text-gold">{winChance}%</span>
                </Label>
                <span className="text-xs text-muted-foreground">{multiplier.toFixed(2)}x payout</span>
              </div>
              <Slider
                id="wheel-chance"
                min={1}
                max={98}
                step={1}
                value={[winChance]}
                onValueChange={([v]) => setWinChance(v ?? 50)}
                disabled={bet.busy}
                data-testid="wheel-chance"
              />
            </div>
            <BetControls
              amount={bet.amount}
              onAmountChange={bet.setAmount}
              multiplier={multiplier}
              onBet={() => void handleBet()}
              busy={bet.busy}
              betLabel="Spin"
            />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">History</CardTitle>
        </CardHeader>
        <CardContent>
          <LedgerTable game="wheel" />
        </CardContent>
      </Card>
    </div>
  );
}
