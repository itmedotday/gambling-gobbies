import { Button, Label, Slider } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { PhaserGame } from '@/phaser/PhaserGame';
import { MinesScene } from '@/phaser/scenes/MinesScene';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';
import { useMinesGame } from '@/game/useMinesGame';
import { MINES_MAX, MINES_MIN } from '@gobbies/engine';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';

export default function MinesPage() {
  const sceneReady = usePhaserSceneReady('mines');
  const themeKey = useThemeKey();
  const game = useMinesGame();
  const playing = game.phase === 'playing';
  const accent = accentForGame('mines');

  return (
    <GamePageFrame game="mines" title="Goblin Mines">
      <div className="grid gap-[18px] lg:grid-cols-[1fr_380px]">
        <NeonCard accent={accent} className="flex flex-col items-center gap-4 p-6">
          <div data-testid="mines-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
            <PhaserGame
              scenes={[MinesScene]}
              width={340}
              height={360}
              transparent
              themeKey={themeKey}
            />
          </div>
          {playing && (
            <div className="flex w-full flex-col items-center gap-1 text-center">
              <span className="retro text-xs text-muted-foreground">Current multiplier</span>
              <span
                className="retro text-xl text-[color:var(--chart-3)] drop-shadow-[0_0_14px_rgba(70,200,210,.45)]"
                data-testid="mines-multiplier"
              >
                {game.currentMultiplier.toFixed(2)}x
              </span>
              {game.nextMultiplier !== null && (
                <span className="text-xs text-muted-foreground">
                  Next pick: {game.nextMultiplier.toFixed(2)}x
                </span>
              )}
            </div>
          )}
        </NeonCard>
        <NeonCard className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[10px] text-foreground">Loot the chests</span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="mine-count" className="text-[13px] text-muted-foreground">
                Bombs
              </Label>
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
              className="retro w-full border border-[color:var(--chart-3)]/45 bg-[color:var(--chart-3)]/10 py-[18px] text-xs text-[color:var(--chart-3)] shadow-[0_0_16px_rgba(70,200,210,.25)] hover:shadow-[0_0_30px_rgba(70,200,210,.45)]"
              onClick={game.cashOut}
              disabled={game.safePicks === 0}
              data-testid="mines-cashout"
            >
              Cash out{' '}
              {(Math.floor(game.amount * game.currentMultiplier * 100) / 100).toLocaleString()} GG
            </Button>
          ) : (
            <BetControls
              amount={game.amount}
              onAmountChange={game.setAmount}
              multiplier={1}
              onBet={() => void game.start()}
              busy={playing || !sceneReady}
              betLabel="Enter the minefield"
              accent={accent}
            />
          )}
        </NeonCard>
      </div>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className="retro shrink-0 text-[9px] text-muted-foreground">History</span>
        <LedgerTable game="mines" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
