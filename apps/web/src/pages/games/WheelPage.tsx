import { useEffect, useRef, useState } from 'react';
import { resolveWheelSpin, wheelMultiplier } from '@gobbies/engine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Label } from '@/components/ui/8bit/label';
import { Slider } from '@/components/ui/8bit/slider';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';
import { PhaserGame } from '@/phaser/PhaserGame';
import { WheelScene } from '@/phaser/scenes/WheelScene';
import { EventBus } from '@/phaser/events';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';

export default function WheelPage() {
  const [winChance, setWinChance] = useState(50);
  const sceneReady = usePhaserSceneReady('wheel');
  const themeKey = useThemeKey();
  const bet = useConsoleBet('wheel', 1);
  const pendingRef = useRef<{ detail: string; isWin: boolean; multiplier: number } | null>(null);

  const params = { winChance };
  const multiplier = wheelMultiplier(params);

  useEffect(() => {
    EventBus.emit('wheel-preview', { winChance });
  }, [winChance]);

  useEffect(() => {
    return EventBus.on('wheel-anim-done', () => {
      const pending = pendingRef.current;
      if (!pending) return;
      pendingRef.current = null;
      bet.settleOutcome(pending);
    });
  }, [bet]);

  const handleBet = async () => {
    const floats = await bet.beginBet();
    if (!floats) return;
    const outcome = resolveWheelSpin(params, floats);
    pendingRef.current = {
      detail: outcome.isWin ? 'Hit the win zone' : 'Missed the win zone',
      isWin: outcome.isWin,
      multiplier: outcome.multiplier,
    };
    EventBus.emit('wheel-animate', {
      angle: outcome.angle,
      isWin: outcome.isWin,
      winChance,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Wheel</h1>
      <GameStatsHeader game="wheel" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-4">
            <div data-testid="wheel-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
              <PhaserGame scenes={[WheelScene]} width={520} height={300} transparent themeKey={themeKey} />
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
              busy={bet.busy || !sceneReady}
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
