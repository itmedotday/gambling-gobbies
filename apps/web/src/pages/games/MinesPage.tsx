import { Button, Card, CardContent, CardHeader, CardTitle, Label, Slider } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { GameStatsHeader } from '@/components/game/GameStatsHeader';
import { LedgerTable } from '@/components/game/LedgerTable';
import { PhaserGame } from '@/phaser/PhaserGame';
import { MinesScene } from '@/phaser/scenes/MinesScene';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';
import { useMinesGame } from '@/game/useMinesGame';
import { MINES_MAX, MINES_MIN } from '@gobbies/engine';
import { GamePageFrame } from '@/components/game/GamePageFrame';

export default function MinesPage() {
  const sceneReady = usePhaserSceneReady('mines');
  const themeKey = useThemeKey();
  const game = useMinesGame();
  const playing = game.phase === 'playing';

  return (
    <GamePageFrame game="mines" title="Goblin Mines">
      <GameStatsHeader game="mines" />
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <div data-testid="mines-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
              <PhaserGame scenes={[MinesScene]} width={340} height={360} transparent themeKey={themeKey} />
            </div>
            {playing && (
              <div className="flex w-full flex-col items-center gap-1 text-center">
                <span className="retro text-xs text-muted-foreground">Current multiplier</span>
                <span className="retro text-xl text-[color:var(--chart-3)] drop-shadow-[0_0_14px_rgba(70,200,210,.45)]" data-testid="mines-multiplier">
                  {game.currentMultiplier.toFixed(2)}x
                </span>
                {game.nextMultiplier !== null && (
                  <span className="text-xs text-muted-foreground">
                    Next pick: {game.nextMultiplier.toFixed(2)}x
                  </span>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="retro text-xs">Loot the chests</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="mine-count">Bombs</Label>
                <span className="text-xs text-muted-foreground" data-testid="mine-count">
                  {game.mineCount}
                </span>
              </div>
              <Slider
                id="mine-count"
                min={MINES_MIN}
                max={MINES_MAX}
                step={1}
                value={[game.mineCount]}
                onValueChange={([v]) => game.setMineCount(v ?? MINES_MIN)}
                disabled={playing}
              />
            </div>
            {playing ? (
              <Button
                size="lg"
                className="retro w-full border border-[color:var(--chart-3)]/45 bg-[color:var(--chart-3)]/10 text-[color:var(--chart-3)] shadow-[0_0_16px_rgba(70,200,210,.25)] hover:shadow-[0_0_30px_rgba(70,200,210,.45)]"
                onClick={game.cashOut}
                disabled={game.safePicks === 0}
                data-testid="mines-cashout"
              >
                Cash out{' '}
                {(
                  Math.floor(game.amount * game.currentMultiplier * 100) / 100
                ).toLocaleString()}{' '}
                GG
              </Button>
            ) : (
              <BetControls
                amount={game.amount}
                onAmountChange={game.setAmount}
                multiplier={1}
                onBet={() => void game.start()}
                busy={playing || !sceneReady}
                betLabel="Enter the minefield"
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
          <LedgerTable game="mines" />
        </CardContent>
      </Card>
    </GamePageFrame>
  );
}
