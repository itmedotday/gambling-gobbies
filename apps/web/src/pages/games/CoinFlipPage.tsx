import { useEffect, useRef, useState } from 'react';
import { resolveCoinFlip, COINFLIP_WIN_MULTIPLIER } from '@gobbies/engine';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';
import { PhaserGame } from '@/phaser/PhaserGame';
import { CoinScene } from '@/phaser/scenes/CoinScene';
import { EventBus } from '@/phaser/events';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';

type Pick = 'gold' | 'moon';

const SIDE_LABELS: Record<Pick, string> = { gold: 'Heads', moon: 'Tails' };

export default function CoinFlipPage() {
  const [prediction, setPrediction] = useState<Pick>('gold');
  const sceneReady = usePhaserSceneReady('coin');
  const themeKey = useThemeKey();
  const bet = useConsoleBet('coinflip', 1);
  const pendingRef = useRef<{ detail: string; isWin: boolean; multiplier: number } | null>(null);

  useEffect(() => {
    return EventBus.on('coin-anim-done', () => {
      const pending = pendingRef.current;
      if (!pending) return;
      pendingRef.current = null;
      bet.settleOutcome(pending);
    });
  }, [bet]);

  const handleBet = async () => {
    const floats = await bet.beginBet();
    if (!floats) return;
    const pick = prediction === 'gold' ? 'heads' : 'tails';
    const outcome = resolveCoinFlip({ pick }, floats);
    const landed: Pick = outcome.landed === 'heads' ? 'gold' : 'moon';
    pendingRef.current = {
      detail: `Landed ${SIDE_LABELS[landed]}`,
      isWin: outcome.isWin,
      multiplier: COINFLIP_WIN_MULTIPLIER,
    };
    EventBus.emit('coin-animate', { landed, isWin: outcome.isWin });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Coin Flip</h1>
      <GameStatsHeader game="coinflip" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-4">
            <div data-testid="coin-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
              <PhaserGame scenes={[CoinScene]} width={520} height={300} transparent themeKey={themeKey} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Your call</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4" data-testid="prediction-selector">
              {(['gold', 'moon'] as const).map((side) => (
                <Button
                  key={side}
                  variant={prediction === side ? 'default' : 'outline'}
                  disabled={bet.busy}
                  onClick={() => setPrediction(side)}
                  data-testid={`predict-${side === 'gold' ? 'orange' : 'blue'}`}
                >
                  {SIDE_LABELS[side]}
                </Button>
              ))}
            </div>
            <BetControls
              amount={bet.amount}
              onAmountChange={bet.setAmount}
              multiplier={COINFLIP_WIN_MULTIPLIER}
              onBet={() => void handleBet()}
              busy={bet.busy || !sceneReady}
              betLabel="Flip"
            />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">History</CardTitle>
        </CardHeader>
        <CardContent>
          <LedgerTable game="coinflip" />
        </CardContent>
      </Card>
    </div>
  );
}
