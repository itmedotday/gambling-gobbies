import { useState } from 'react';
import { resolveWheelSpin, wheelMultiplier } from '@gobbies/engine';
import { Label, Slider } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { RngWheelBoard } from '@/components/game/RngWheelBoard';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';

export default function WheelPage() {
  const [winChance, setWinChance] = useState(50);
  const [lastAngle, setLastAngle] = useState<number | null>(null);
  const [lastIsWin, setLastIsWin] = useState(false);
  const bet = useConsoleBet('wheel', 1);
  const accent = accentForGame('wheel');

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
    <GamePageFrame game="wheel" title="Wheel">
      <VersusPlayBanner />
      <div className="grid gap-[18px] lg:grid-cols-[1fr_380px]">
        <NeonCard accent={accent} stage className="p-4">
          <div data-testid="wheel-visual">
            <RngWheelBoard
              winChance={winChance}
              angle={lastAngle}
              isWin={lastIsWin}
              request={bet.request}
              onComplete={handleComplete}
            />
          </div>
        </NeonCard>
        <NeonCard className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[10px] text-foreground">Win zone</span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="wheel-chance" className="text-[13px] text-muted-foreground">
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
            accent={accent}
          />
        </NeonCard>
      </div>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className="retro shrink-0 text-[9px] text-muted-foreground">History</span>
        <LedgerTable game="wheel" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
