import { useRef, useState } from 'react';
import { resolveDice, diceMultiplier, diceWinChance } from '@gobbies/engine';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Label } from '@/components/ui/8bit/label';
import { Slider } from '@/components/ui/8bit/slider';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';

const ROLL_ANIMATION_MS = 900;

export default function DicePage() {
  const [target, setTarget] = useState(50);
  const [rollOver, setRollOver] = useState(true);
  const [display, setDisplay] = useState<{ roll: number; isWin: boolean } | null>(null);
  const [rolling, setRolling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bet = useConsoleBet('dice', 1);

  const params = { target, rollOver };
  const multiplier = diceMultiplier(params);

  const handleBet = async () => {
    const floats = await bet.beginBet();
    if (!floats) return;
    const outcome = resolveDice(params, floats);
    setRolling(true);
    setDisplay(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setRolling(false);
      setDisplay({ roll: outcome.roll, isWin: outcome.isWin });
      bet.settleOutcome({
        detail: `Rolled ${outcome.roll.toFixed(2)}`,
        isWin: outcome.isWin,
        multiplier: outcome.multiplier,
      });
    }, ROLL_ANIMATION_MS);
  };

  const winZoneStyle = rollOver
    ? { left: `${target}%`, width: `${100 - target}%` }
    : { left: '0%', width: `${target}%` };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Dice Slider</h1>
      <GameStatsHeader game="dice" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 flex-col justify-center gap-8 p-8">
            <div
              className="retro text-center text-3xl"
              data-testid="dice-outcome"
              aria-live="polite"
            >
              {rolling ? (
                <span className="animate-pulse text-muted-foreground">??.??</span>
              ) : display ? (
                <span className={display.isWin ? 'text-primary' : 'text-destructive'}>
                  {display.roll.toFixed(2)}
                </span>
              ) : (
                <span className="text-muted-foreground">--.--</span>
              )}
            </div>
            <div className="relative h-6 w-full border-2 border-border bg-destructive/40">
              <div className="absolute inset-y-0 bg-primary/70" style={winZoneStyle} />
              {display && !rolling && (
                <div
                  className="absolute -top-2 h-10 w-1.5 bg-gold transition-all duration-300"
                  style={{ left: `calc(${display.roll}% - 3px)` }}
                  data-testid="dice-marker"
                />
              )}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Target</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="dice-target">
                  Roll {rollOver ? 'over' : 'under'} <span className="text-gold">{target}</span>
                </Label>
                <span className="text-xs text-muted-foreground">
                  {diceWinChance(params).toFixed(0)}% chance
                </span>
              </div>
              <Slider
                id="dice-target"
                min={1}
                max={99}
                step={1}
                value={[target]}
                onValueChange={([v]) => setTarget(v ?? 50)}
                disabled={bet.busy}
                data-testid="dice-target"
              />
              <Button
                variant="outline"
                size="sm"
                disabled={bet.busy}
                onClick={() => setRollOver((v) => !v)}
                data-testid="dice-mode-toggle"
              >
                Switch to roll {rollOver ? 'under' : 'over'}
              </Button>
            </div>
            <BetControls
              amount={bet.amount}
              onAmountChange={bet.setAmount}
              multiplier={multiplier}
              onBet={() => void handleBet()}
              busy={bet.busy}
              betLabel="Roll"
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
