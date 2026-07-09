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
import { GamePageGrid } from '@/components/game/GamePageGrid';
import { VisualStage } from '@/components/game/VisualStage';
import { NeonCard } from '@/components/game/NeonCard';
import { CoinFaceIcon } from '@/components/game/CoinFaceIcon';
import { accentForGame, accentTokens } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

type Pick = 'gold' | 'moon';

const SIDE_LABELS: Record<Pick, string> = { gold: 'Heads', moon: 'Tails' };

export default function CoinFlipPage() {
  const [prediction, setPrediction] = useState<Pick>('gold');
  const bet = useConsoleBet('coinflip', 1);
  const accent = accentForGame('coinflip');
  const tokens = accentTokens(accent);
  const layout = useThemeLayout();

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
      <GamePageGrid>
        <NeonCard accent={accent} stage className="p-6">
          <VisualStage width={320} height={280} data-testid="coin-visual" data-scene-ready="true">
            <div className="pointer-events-none flex w-full items-center justify-center [perspective:1200px]">
              <CoinFlip rng={bet.rng} flipRequest={bet.request} onFlipComplete={handleComplete} />
            </div>
          </VisualStage>
          <img
            src="/assets/sprites/royal-goblin/jump.webp"
            alt=""
            width={104}
            height={104}
            className="pointer-events-none absolute bottom-4 right-4 hidden h-[88px] w-[88px] pixelated drop-shadow-[0_0_10px_rgba(99,102,241,.6)] sm:block sm:h-[104px] sm:w-[104px]"
          />
        </NeonCard>
        <NeonCard className="gg-game-panel">
          <span className={cn(layout.sectionLabelClass, 'text-foreground')}>Your call</span>
          <div className="grid grid-cols-2 gap-3" data-testid="prediction-selector">
            {(['gold', 'moon'] as const).map((side) => (
              <Button
                key={side}
                variant={prediction === side ? 'default' : 'outline'}
                disabled={bet.busy}
                onClick={() => setPrediction(side)}
                data-testid={`predict-${side === 'gold' ? 'orange' : 'blue'}`}
                aria-label={SIDE_LABELS[side]}
                aria-pressed={prediction === side}
                className={cn(
                  'h-auto py-3',
                  prediction === side
                    ? 'border-0 text-white'
                    : 'border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary',
                )}
                style={
                  prediction === side
                    ? {
                        background: `linear-gradient(180deg, ${tokens.gradientFrom}, ${tokens.gradientTo})`,
                        boxShadow: tokens.hoverGlow,
                      }
                    : undefined
                }
              >
                <CoinFaceIcon
                  side={side}
                  selected={prediction === side}
                  className="size-11 sm:size-12"
                />
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
      </GamePageGrid>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className={cn(layout.sectionLabelClass, 'shrink-0 text-muted-foreground')}>
          History
        </span>
        <LedgerTable game="coinflip" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
