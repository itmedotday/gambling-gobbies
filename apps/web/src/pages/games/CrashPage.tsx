import { Badge } from '@/components/ui/8bit/badge';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Input } from '@/components/ui/8bit/input';
import { Label } from '@/components/ui/8bit/label';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { PhaserGame } from '@/phaser/PhaserGame';
import { CrashScene } from '@/phaser/scenes/CrashScene';
import { useCrashGame } from '@/game/useCrashGame';

export default function CrashPage() {
  const game = useCrashGame();
  const running = game.phase === 'running';

  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">Goblin Crash</h1>
      <GameStatsHeader game="crash" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <PhaserGame scenes={[CrashScene]} width={640} height={340} transparent />
            {game.history.length > 0 && (
              <div className="flex w-full flex-wrap gap-2" data-testid="crash-history">
                {game.history.map((round, i) => (
                  <Badge
                    key={i}
                    className={`text-[10px] ${round.cashedAt !== null ? 'text-primary' : 'text-destructive'}`}
                  >
                    {round.crashPoint.toFixed(2)}x
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Run it</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="auto-cashout">Auto cash-out (optional)</Label>
              <Input
                id="auto-cashout"
                type="number"
                inputMode="decimal"
                min={1.01}
                step={0.5}
                placeholder="e.g. 2.00"
                value={game.autoCashout ?? ''}
                onChange={(e) =>
                  game.setAutoCashout(e.target.value === '' ? null : Number(e.target.value))
                }
                disabled={running}
                data-testid="auto-cashout"
              />
            </div>
            {running ? (
              <div className="flex flex-col gap-3">
                <div className="retro text-center text-2xl text-gold" data-testid="crash-multiplier">
                  {game.multiplier.toFixed(2)}x
                </div>
                <Button
                  size="lg"
                  className="w-full"
                  onClick={game.cashOut}
                  data-testid="cashout-button"
                >
                  Cash out {(Math.floor(game.amount * game.multiplier * 100) / 100).toLocaleString()} GG
                </Button>
              </div>
            ) : (
              <BetControls
                amount={game.amount}
                onAmountChange={game.setAmount}
                multiplier={1}
                onBet={() => void game.start()}
                busy={running}
                betLabel="Start the run"
              />
            )}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="retro text-xs">History</CardTitle>
        </CardHeader>
        <CardContent>
          <LedgerTable game="crash" />
        </CardContent>
      </Card>
    </div>
  );
}
