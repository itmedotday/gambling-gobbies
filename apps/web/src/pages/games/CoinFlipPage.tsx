import { useState } from 'react';
import { CoinFlip } from '@itme.day/rng-react-components';
import { resolveCoinFlip, COINFLIP_WIN_MULTIPLIER } from '@gobbies/engine';
import { Button } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';
import { cn } from '@/lib/utils';

type Pick = 'gold' | 'moon';

const SIDE_LABELS: Record<Pick, string> = { gold: 'Heads', moon: 'Tails' };

export default function CoinFlipPage() {
  const [prediction, setPrediction] = useState<Pick>('gold');
  const bet = useConsoleBet('coinflip', 1);
  const accent = accentForGame('coinflip');

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
    <GamePageFrame game="coinflip" title="Coin Flip">
      <VersusPlayBanner />
      <div className="grid gap-[18px] lg:grid-cols-[1fr_380px]">
        <NeonCard accent={accent} stage className="p-4">
          <div
            data-testid="coin-visual"
            data-scene-ready="true"
            className="pointer-events-none [perspective:1200px]"
          >
            <CoinFlip rng={bet.rng} flipRequest={bet.request} onFlipComplete={handleComplete} />
          </div>
          <img
            src="/assets/sprites/royal-goblin/jump.webp"
            alt=""
            className="pointer-events-none absolute bottom-6 right-10 h-[104px] image-pixelated drop-shadow-[0_0_10px_rgba(99,102,241,.6)]"
          />
        </NeonCard>
        <NeonCard className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[10px] text-foreground">Your call</span>
          <div className="grid grid-cols-2 gap-3" data-testid="prediction-selector">
            {(['gold', 'moon'] as const).map((side) => (
              <Button
                key={side}
                variant={prediction === side ? 'default' : 'outline'}
                disabled={bet.busy}
                onClick={() => setPrediction(side)}
                data-testid={`predict-${side === 'gold' ? 'orange' : 'blue'}`}
                className={cn(
                  'retro h-auto py-4 text-[10px]',
                  prediction === side
                    ? 'border-0 bg-gradient-to-b from-[#818cf8] to-[#4f46e5] text-white shadow-[0_0_22px_rgba(99,102,241,.55)]'
                    : 'border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary',
                )}
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
            accent={accent}
          />
        </NeonCard>
      </div>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className="retro shrink-0 text-[9px] text-muted-foreground">History</span>
        <LedgerTable game="coinflip" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
