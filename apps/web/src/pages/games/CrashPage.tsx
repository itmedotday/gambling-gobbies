import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { PhaserGame } from '@/phaser/PhaserGame';
import { CrashScene } from '@/phaser/scenes/CrashScene';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';
import { useCrashGame } from '@/game/useCrashGame';
import { GamePageFrame } from '@/components/game/GamePageFrame';

export default function CrashPage() {
  const sceneReady = usePhaserSceneReady('crash');
  const themeKey = useThemeKey();
  const game = useCrashGame();
  const running = game.phase === 'running';

  return (
    <GamePageFrame game="crash" title="Goblin Crash">
      <GameStatsHeader game="crash" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <div data-testid="crash-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
              <PhaserGame scenes={[CrashScene]} width={640} height={340} transparent themeKey={themeKey} />
            </div>
            {game.history.length > 0 && (
              <div className="flex w-full flex-wrap gap-2" data-testid="crash-history">
                {game.history.map((round, i) => (
                  <Badge
                    key={i}
                    className={`text-[10px] ${round.cashedAt !== null ? 'text-[color:var(--chart-3)]' : 'text-destructive'}`}
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
                <div className="retro text-center text-3xl text-destructive drop-shadow-[0_0_18px_rgba(244,63,94,.55)] animate-pulse" data-testid="crash-multiplier">
                  {game.multiplier.toFixed(2)}x
                </div>
                <Button
                  size="lg"
                  className="retro w-full bg-gradient-to-b from-[color:var(--destructive)] to-[color:var(--destructive)] shadow-[0_0_36px_rgba(244,63,94,.55)] hover:shadow-[0_0_60px_rgba(244,63,94,.9)]"
                  onClick={game.cashOut}
                  data-testid="cashout-button"
                >
                  Cash out {(Math.floor(game.amount * game.multiplier * 100) / 100).toLocaleString()} GG
                </Button>
                <span className="text-center text-xs text-muted-foreground">
                  {Math.floor(game.amount * 100) / 100} GG riding · started at 1.00x
                </span>
              </div>
            ) : (
              <BetControls
                amount={game.amount}
                onAmountChange={game.setAmount}
                multiplier={1}
                onBet={() => void game.start()}
                busy={running || !sceneReady}
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
    </GamePageFrame>
  );
}
