import { useState } from 'react';
import { resolveWheelSpin, wheelMultiplier } from '@gobbies/engine';
import { Card, CardContent, CardHeader, CardTitle, Label, Slider } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { RngWheelBoard } from '@/components/game/RngWheelBoard';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';

export default function WheelPage() {
  const [winChance, setWinChance] = useState(50);
  const [lastAngle, setLastAngle] = useState<number | null>(null);
  const [lastIsWin, setLastIsWin] = useState(false);
  const bet = useConsoleBet('wheel', 1);

  const params = { winChance };
  const multiplier = wheelMultiplier(params);

  const { handleBet, handleComplete } = useConsoleBetFlow(
    bet,
    () => ({ winChance }),
    (floats) => {
      const outcome = resolveWheelSpin(params, floats);
      setLastAngle(outcome.angle);
      setLastIsWin(outcome.isWin);
      return {
        detail: outcome.isWin ? 'Hit the win zone' : 'Missed the win zone',
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
      };
    },
  );

  return (
    <div className="flex flex-col gap-6">
      <VersusPlayBanner />
      <h1 className="retro text-lg text-primary">Wheel</h1>
      <GameStatsHeader game="wheel" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-4">
            <div data-testid="wheel-visual">
              <RngWheelBoard
                winChance={winChance}
                angle={lastAngle}
                isWin={lastIsWin}
                request={bet.request}
                onComplete={handleComplete}
              />
            </div>
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
                  Win chance <span className="text-primary">{winChance}%</span>
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
              balance={bet.versusBetting ? bet.balance : undefined}
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
