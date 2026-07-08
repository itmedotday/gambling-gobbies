import { useState } from 'react';
import { resolveDice, diceMultiplier, diceWinChance } from '@gobbies/engine';
import { Card, CardContent, CardHeader, CardTitle, Button, Label, Slider, Input, Badge } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { RngDiceBoard } from '@/components/game/RngDiceBoard';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';

export default function DicePage() {
  const [target, setTarget] = useState(50);
  const [rollOver, setRollOver] = useState(true);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [lastIsWin, setLastIsWin] = useState(false);
  const bet = useConsoleBet('dice', 1);

  const params = { target, rollOver };
  const multiplier = diceMultiplier(params);
  const winChance = diceWinChance(params);

  const clampTarget = (value: number) => Math.max(1, Math.min(99, Math.round(value)));
  const setTargetSafe = (value: number) => setTarget(clampTarget(Number.isFinite(value) ? value : 50));

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
    <div className="flex flex-col gap-6">
      <VersusPlayBanner />
      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="retro text-lg text-primary">Dice Slider</h1>
          <p className="text-sm text-muted-foreground">
            Tune your target, then roll {rollOver ? 'over' : 'under'} to chase the multiplier.
          </p>
        </div>
        <Badge variant="outline" className="tabular-nums">
          {winChance.toFixed(0)}% win chance
        </Badge>
      </div>
      <GameStatsHeader game="dice" />
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="retro text-xs">Live roll</CardTitle>
          </CardHeader>
          <CardContent className="flex min-h-72 items-center justify-center p-4 pt-0">
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
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Bet setup</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="dice-target" className="text-sm">
                    Target
                  </Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Roll</span>
                    <div className="flex items-center gap-1 rounded-md border bg-background p-1">
                      <Button
                        type="button"
                        variant={rollOver ? 'default' : 'outline'}
                        size="sm"
                        disabled={bet.busy}
                        onClick={() => setRollOver(true)}
                        data-testid="dice-mode-over"
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
                      >
                        Under
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Target</span>
                  <Input
                    id="dice-target-input"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={99}
                    value={target}
                    onChange={(e) => setTargetSafe(Number(e.target.value))}
                    disabled={bet.busy}
                    className="w-24 tabular-nums"
                    data-testid="dice-target-input"
                  />
                </div>
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

              <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                <span className="tabular-nums">{winChance.toFixed(2)}% chance</span>
                <span className="tabular-nums">{multiplier.toFixed(4)}x payout</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={bet.busy}
                  onClick={() => setTargetSafe(25)}
                >
                  25
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={bet.busy}
                  onClick={() => setTargetSafe(50)}
                >
                  50
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={bet.busy}
                  onClick={() => setTargetSafe(75)}
                >
                  75
                </Button>
                <div className="ml-auto flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    disabled={bet.busy}
                    onClick={() => setRollOver((v) => !v)}
                    data-testid="dice-mode-toggle"
                  >
                    Switch
                  </Button>
                </div>
              </div>
            </div>
            <BetControls
              amount={bet.amount}
              onAmountChange={bet.setAmount}
              multiplier={multiplier}
              onBet={() => void handleBet()}
              busy={bet.busy}
              betLabel="Roll"
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
          <LedgerTable game="dice" />
        </CardContent>
      </Card>
    </div>
  );
}
