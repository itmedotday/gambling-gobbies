import { useState } from 'react';
import { CoinFlip } from '@itme.day/rng-react-components';
import { resolveCoinFlip, COINFLIP_WIN_MULTIPLIER } from '@gobbies/engine';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';

type Pick = 'gold' | 'moon';

const SIDE_LABELS: Record<Pick, string> = { gold: 'Heads', moon: 'Tails' };

export default function CoinFlipPage() {
  const [prediction, setPrediction] = useState<Pick>('gold');
  const bet = useConsoleBet('coinflip', 1);

  const { handleBet, handleComplete } = useConsoleBetFlow(
    bet,
    () => ({ pick: prediction === 'gold' ? 'heads' : 'tails' }),
    (floats) => {
      const pick = prediction === 'gold' ? 'heads' : 'tails';
      const outcome = resolveCoinFlip({ pick }, floats);
      const landed: Pick = outcome.landed === 'heads' ? 'gold' : 'moon';
      return {
        detail: `Landed ${SIDE_LABELS[landed]}`,
        isWin: outcome.isWin,
        multiplier: COINFLIP_WIN_MULTIPLIER,
      };
    },
  );

  return (
    <div className="flex flex-col gap-6">
      <VersusPlayBanner />
      <h1 className="retro text-lg text-primary">Coin Flip</h1>
      <GameStatsHeader game="coinflip" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-4">
            <div
              data-testid="coin-visual"
              data-scene-ready="true"
              className="pointer-events-none [perspective:1200px]"
            >
              <CoinFlip
                rng={bet.rng}
                flipRequest={bet.request}
                onFlipComplete={handleComplete}
              />
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
              busy={bet.busy}
              betLabel="Flip"
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
          <LedgerTable game="coinflip" />
        </CardContent>
      </Card>
    </div>
  );
}
