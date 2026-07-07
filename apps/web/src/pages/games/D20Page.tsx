import { useState } from 'react';
import { D20Roll, type ClickToRollD20Result } from '@itme.day/rng-react-components';
import { d20Multiplier, d20WinChance, D20_CRIT_BONUS } from '@gobbies/engine';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Label } from '@/components/ui/8bit/label';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { useConsoleBet } from '@/game/useConsoleBet';

export default function D20Page() {
  const [dc, setDc] = useState(11);
  const bet = useConsoleBet('d20', 1);
  const multiplier = d20Multiplier({ dc });

  const handleRollComplete = (result: ClickToRollD20Result) => {
    const isWin = result.roll >= dc;
    const effective = result.isCritical ? multiplier * D20_CRIT_BONUS : multiplier;
    bet.settleOutcome({
      detail: result.isCritical
        ? 'Nat 20! Critical!'
        : result.isFumble
          ? 'Nat 1. Fumble.'
          : `Rolled ${result.roll}`,
      isWin,
      multiplier: effective,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">D20 Roll</h1>
      <GameStatsHeader game="d20" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex min-h-72 items-center justify-center p-8">
            <div className="pointer-events-none" data-testid="d20-visual">
              <D20Roll rollRequest={bet.request} rng={bet.rng} onRollComplete={handleRollComplete} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Difficulty</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="dc-value">DC (roll {dc}+ to win)</Label>
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
                >
                  -
                </Button>
                <span id="dc-value" className="retro flex-1 text-center text-lg" data-testid="dc-value">
                  {dc}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={bet.busy || dc >= 20}
                  onClick={() => setDc((v) => Math.min(20, v + 1))}
                  aria-label="Raise DC"
                >
                  +
                </Button>
              </div>
              <span className="text-xs text-muted-foreground">Nat 20 pays {D20_CRIT_BONUS}x extra. Nat 1 always loses.</span>
            </div>
            <BetControls
              amount={bet.amount}
              onAmountChange={bet.setAmount}
              multiplier={multiplier}
              onBet={() => void bet.placeBet()}
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
          <LedgerTable game="d20" />
        </CardContent>
      </Card>
    </div>
  );
}
