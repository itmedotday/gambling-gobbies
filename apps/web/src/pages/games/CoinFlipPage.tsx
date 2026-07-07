import { useState } from 'react';
import { CoinFlip, type CoinSide } from '@itme.day/rng-react-components';
import { COINFLIP_WIN_MULTIPLIER } from '@gobbies/engine';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';

const SIDE_LABELS: Record<CoinSide, string> = { orange: 'Gold', blue: 'Moon' };

export default function CoinFlipPage() {
  const [prediction, setPrediction] = useState<CoinSide>('orange');
  const bet = useConsoleBet('coinflip', 1);

  const handleFlipComplete = (landed: CoinSide) => {
    const isWin = landed === prediction;
    bet.settleOutcome({
      detail: `Landed ${SIDE_LABELS[landed]}`,
      isWin,
      multiplier: COINFLIP_WIN_MULTIPLIER,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Coin Flip</h1>
      <GameStatsHeader game="coinflip" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-8">
            <div className="pointer-events-none" data-testid="coin-visual">
              <CoinFlip flipRequest={bet.request} rng={bet.rng} onFlipComplete={handleFlipComplete} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Your call</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4" data-testid="prediction-selector">
              {(['orange', 'blue'] as const).map((side) => (
                <Button
                  key={side}
                  variant={prediction === side ? 'default' : 'outline'}
                  disabled={bet.busy}
                  onClick={() => setPrediction(side)}
                  data-testid={`predict-${side}`}
                >
                  {SIDE_LABELS[side]}
                </Button>
              ))}
            </div>
            <BetControls
              amount={bet.amount}
              onAmountChange={bet.setAmount}
              multiplier={COINFLIP_WIN_MULTIPLIER}
              onBet={() => void bet.placeBet()}
              busy={bet.busy}
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
