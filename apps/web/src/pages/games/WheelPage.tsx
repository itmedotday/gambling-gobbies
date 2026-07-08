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
import { GamePageGrid } from '@/components/game/GamePageGrid';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function WheelPage() {
  const [winChance, setWinChance] = useState(50);
  const [lastAngle, setLastAngle] = useState<number | null>(null);
  const [lastIsWin, setLastIsWin] = useState(false);
  const bet = useConsoleBet('wheel', 1);
  const accent = accentForGame('wheel');
  const layout = useThemeLayout();

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
      <GamePageGrid>
        <NeonCard accent={accent} stage className="p-6">
          <div data-testid="wheel-visual" className="w-full">
            <RngWheelBoard
              winChance={winChance}
              angle={lastAngle}
              isWin={lastIsWin}
              request={bet.request}
              onComplete={handleComplete}
            />
          </div>
        </NeonCard>
        <NeonCard className="gg-game-panel">
          <span className={cn(layout.sectionLabelClass, 'text-foreground')}>Win zone</span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="wheel-chance" className="text-sm text-muted-foreground">
                Win chance{' '}
                <span className="tabular-nums text-primary">{winChance}%</span>
              </Label>
              <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                {multiplier.toFixed(2)}x payout
              </span>
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
      </GamePageGrid>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className={cn(layout.sectionLabelClass, 'shrink-0 text-muted-foreground')}>
          History
        </span>
        <LedgerTable game="wheel" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
