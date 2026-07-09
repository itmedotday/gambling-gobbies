import { useState } from 'react';
import { D20Roll } from '@itme.day/rng-react-components';
import { resolveD20, d20Multiplier, d20WinChance, D20_CRIT_BONUS } from '@gobbies/engine';
import { Button } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { VersusPlayBanner } from '@/components/game/VersusPlayBanner';
import { useConsoleBet } from '@/game/useConsoleBet';
import { useConsoleBetFlow } from '@/game/useConsoleBetFlow';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { GamePageGrid } from '@/components/game/GamePageGrid';
import { VisualStage } from '@/components/game/VisualStage';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function D20Page() {
  const [dc, setDc] = useState(11);
  const bet = useConsoleBet('d20', 1);
  const accent = accentForGame('d20');
  const layout = useThemeLayout();
  const multiplier = d20Multiplier({ dc });

  const { handleBet, handleComplete } = useConsoleBetFlow(
    bet,
    () => ({ dc }),
    (floats) => {
      const outcome = resolveD20({ dc }, floats);
      const effective = outcome.isCritical ? multiplier * D20_CRIT_BONUS : multiplier;
      return {
        detail: outcome.isCritical
          ? 'Nat 20! Critical!'
          : outcome.isFumble
            ? 'Nat 1. Fumble.'
            : `Rolled ${outcome.roll}`,
        isWin: outcome.isWin,
        multiplier: effective,
      };
    },
  );

  return (
    <GamePageFrame game="d20" title="D20 Roll">
      <VersusPlayBanner />
      <GamePageGrid>
        <NeonCard accent={accent} stage className="p-6">
          <VisualStage width={320} height={280} data-testid="d20-visual">
            <div className="pointer-events-none flex w-full items-center justify-center [perspective:1200px]">
              <D20Roll rng={bet.rng} rollRequest={bet.request} onRollComplete={handleComplete} />
            </div>
          </VisualStage>
        </NeonCard>
        <NeonCard className="gg-game-panel">
          <span className={cn(layout.sectionLabelClass, 'text-foreground')}>Difficulty</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">DC (roll {dc}+ to win)</span>
              <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                {(d20WinChance({ dc }) * 100).toFixed(0)}% chance
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                disabled={bet.busy || dc <= 2}
                onClick={() => setDc((v) => Math.max(2, v - 1))}
                aria-label="Lower DC"
                className={layout.sectionLabelClass}
              >
                -
              </Button>
              <span
                id="dc-value"
                className={cn(layout.sectionLabelClass, 'flex-1 text-center text-lg tabular-nums')}
                data-testid="dc-value"
              >
                {dc}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={bet.busy || dc >= 20}
                onClick={() => setDc((v) => Math.min(20, v + 1))}
                aria-label="Raise DC"
                className={layout.sectionLabelClass}
              >
                +
              </Button>
            </div>
            <span className="text-xs text-muted-foreground">
              Nat 20 pays {D20_CRIT_BONUS}x extra. Nat 1 always loses.
            </span>
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
      </GamePageGrid>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className={cn(layout.sectionLabelClass, 'shrink-0 text-muted-foreground')}>
          History
        </span>
        <LedgerTable game="d20" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
