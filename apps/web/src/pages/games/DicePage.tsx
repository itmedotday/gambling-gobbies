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
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';

export default function DicePage() {
  const [target, setTarget] = useState(50);
  const [rollOver, setRollOver] = useState(true);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [lastIsWin, setLastIsWin] = useState(false);
  const bet = useConsoleBet('dice', 1);
  const accent = accentForGame('dice');

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
      <div className="grid gap-[18px] lg:grid-cols-[1fr_380px]">
        <NeonCard accent={accent} stage className="gap-8 p-9">
          <div data-testid="dice-visual">
            <RngDiceBoard
              target={target}
              rollOver={rollOver}
              roll={lastRoll}
              isWin={lastIsWin}
              request={bet.request}
              onComplete={handleComplete}
            />
          </div>
        </NeonCard>
        <NeonCard className="flex flex-col gap-[18px] p-6">
          <div className="flex items-baseline justify-between">
            <span className="retro text-[10px] text-foreground">
              Roll {rollOver ? 'over' : 'under'}{' '}
              <span className="text-[color:var(--chart-3)] [text-shadow:0_0_8px_rgba(16,185,129,.8)]">
                {target}
              </span>
            </span>
            <span className="text-xs text-muted-foreground">{winChance.toFixed(0)}% chance</span>
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
      </div>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className="retro shrink-0 text-[9px] text-muted-foreground">History</span>
        <LedgerTable game="dice" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
