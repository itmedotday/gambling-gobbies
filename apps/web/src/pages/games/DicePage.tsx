import { useEffect, useRef, useState } from 'react';
import { resolveDice, diceMultiplier, diceWinChance } from '@gobbies/engine';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Label } from '@/components/ui/8bit/label';
import { Slider } from '@/components/ui/8bit/slider';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';
import { PhaserGame } from '@/phaser/PhaserGame';
import { DiceScene } from '@/phaser/scenes/DiceScene';
import { EventBus } from '@/phaser/events';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';

export default function DicePage() {
  const [target, setTarget] = useState(50);
  const [rollOver, setRollOver] = useState(true);
  const sceneReady = usePhaserSceneReady('dice');
  const themeKey = useThemeKey();
  const bet = useConsoleBet('dice', 1);
  const pendingRef = useRef<{ detail: string; isWin: boolean; multiplier: number } | null>(null);

  const params = { target, rollOver };
  const multiplier = diceMultiplier(params);

  useEffect(() => {
    EventBus.emit('dice-preview', { target, rollOver });
  }, [target, rollOver]);

  useEffect(() => {
    return EventBus.on('dice-anim-done', () => {
      const pending = pendingRef.current;
      if (!pending) return;
      pendingRef.current = null;
      bet.settleOutcome(pending);
    });
  }, [bet]);

  const handleBet = async () => {
    const floats = await bet.beginBet();
    if (!floats) return;
    const outcome = resolveDice(params, floats);
    pendingRef.current = {
      detail: `Rolled ${outcome.roll.toFixed(2)}`,
      isWin: outcome.isWin,
      multiplier: outcome.multiplier,
    };
    EventBus.emit('dice-animate', {
      roll: outcome.roll,
      isWin: outcome.isWin,
      target,
      rollOver,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Dice Slider</h1>
      <GameStatsHeader game="dice" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-4">
            <div data-testid="dice-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
              <PhaserGame scenes={[DiceScene]} width={520} height={300} transparent themeKey={themeKey} />
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
                  Roll {rollOver ? 'over' : 'under'} <span className="text-primary">{target}</span>
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
              busy={bet.busy || !sceneReady}
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
