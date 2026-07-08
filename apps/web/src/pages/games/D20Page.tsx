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
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';

export default function D20Page() {
  const [dc, setDc] = useState(11);
  const bet = useConsoleBet('d20', 1);
  const accent = accentForGame('d20');
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
      <div className="grid gap-[18px] lg:grid-cols-[1fr_380px]">
        <NeonCard accent={accent} stage className="p-4">
          <div data-testid="d20-visual" className="pointer-events-none [perspective:1200px]">
            <D20Roll rng={bet.rng} rollRequest={bet.request} onRollComplete={handleComplete} />
          </div>
        </NeonCard>
        <NeonCard className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[10px] text-foreground">Difficulty</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[13px]">
              <span className="text-muted-foreground">DC (roll {dc}+ to win)</span>
              <span className="text-xs text-muted-foreground">
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
                className="retro"
              >
                -
              </Button>
              <span
                id="dc-value"
                className="retro flex-1 text-center text-lg"
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
                className="retro"
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
      </div>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className="retro shrink-0 text-[9px] text-muted-foreground">History</span>
        <LedgerTable game="d20" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
