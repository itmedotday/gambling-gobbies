import { useState } from 'react';
import { resolveDice, diceMultiplier, diceWinChance } from '@gobbies/engine';
import { Button, Slider, Input } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { RngDiceBoard } from '@/components/game/RngDiceBoard';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { GamePageGrid } from '@/components/game/GamePageGrid';
import { VisualStage } from '@/components/game/VisualStage';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function DicePage() {
  const [target, setTarget] = useState(50);
  const [rollOver, setRollOver] = useState(true);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [lastIsWin, setLastIsWin] = useState(false);
  const bet = useConsoleBet('dice', 1);
  const accent = accentForGame('dice');
  const layout = useThemeLayout();

  const params = { target, rollOver };
  const multiplier = diceMultiplier(params);
  const winChance = diceWinChance(params);

  const clampTarget = (value: number) => Math.max(1, Math.min(99, Math.round(value)));
  const setTargetSafe = (value: number) =>
    setTarget(clampTarget(Number.isFinite(value) ? value : 50));

  const { handleBet, handleComplete } = useConsoleBetFlow(
    bet,
    () => ({ target, rollOver }),
    (floats) => {
      const outcome = resolveDice(params, floats);
      setLastRoll(outcome.roll);
      setLastIsWin(outcome.isWin);
      return {
        detail: `Rolled ${outcome.roll.toFixed(2)}`,
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
      };
    },
  );

  return (
    <GamePageFrame game="dice" title="Dice Slider">
      <VersusPlayBanner />
      <GamePageGrid>
        <NeonCard accent={accent} stage className="p-6">
          <VisualStage width={480} height={360} data-testid="dice-visual">
            <RngDiceBoard
              target={target}
              rollOver={rollOver}
              roll={lastRoll}
              isWin={lastIsWin}
              request={bet.request}
              onComplete={handleComplete}
            />
          </VisualStage>
        </NeonCard>
        <NeonCard className="gg-game-panel">
          <div className="flex items-baseline justify-between gap-3">
            <span className={cn(layout.sectionLabelClass, 'text-foreground')}>
              Roll {rollOver ? 'over' : 'under'}{' '}
              <span className="tabular-nums text-[color:var(--chart-3)] [text-shadow:0_0_8px_color-mix(in_srgb,var(--chart-3)_80%,transparent)]">
                {target}
              </span>
            </span>
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
              {winChance.toFixed(0)}% chance
            </span>
          </div>
          <Slider
            id="dice-target"
            min={1}
            max={99}
            step={1}
            value={[target]}
            onValueChange={([v]) => setTargetSafe(v ?? 50)}
            disabled={bet.busy}
            data-testid="dice-target"
          />
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={rollOver ? 'default' : 'outline'}
              size="sm"
              disabled={bet.busy}
              onClick={() => setRollOver(true)}
              data-testid="dice-mode-over"
              className="retro text-[9px]"
            >
              Over
            </Button>
            <Button
              type="button"
              variant={!rollOver ? 'default' : 'outline'}
              size="sm"
              disabled={bet.busy}
              onClick={() => setRollOver(false)}
              data-testid="dice-mode-under"
              className="retro text-[9px]"
            >
              Under
            </Button>
            {[25, 50, 75].map((v) => (
              <Button
                key={v}
                type="button"
                variant="outline"
                size="sm"
                disabled={bet.busy}
                onClick={() => setTargetSafe(v)}
                className="retro text-[9px]"
              >
                {v}
              </Button>
            ))}
            <Input
              id="dice-target-input"
              type="number"
              inputMode="numeric"
              min={1}
              max={99}
              value={target}
              onChange={(e) => setTargetSafe(Number(e.target.value))}
              disabled={bet.busy}
              className="retro ml-auto w-20 tabular-nums"
              data-testid="dice-target-input"
            />
          </div>
          <BetControls
            amount={bet.amount}
            onAmountChange={bet.setAmount}
            multiplier={multiplier}
            onBet={() => void handleBet()}
            busy={bet.busy}
            betLabel="Roll"
            balance={bet.versusBetting ? bet.balance : undefined}
            accent={accent}
          />
        </NeonCard>
      </GamePageGrid>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className={cn(layout.sectionLabelClass, 'shrink-0 text-muted-foreground')}>
          History
        </span>
        <LedgerTable game="dice" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
