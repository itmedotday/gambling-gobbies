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
import { GamePageGrid } from '@/components/game/GamePageGrid';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function MinesPage() {
  const sceneReady = usePhaserSceneReady('mines');
  const themeKey = useThemeKey();
  const game = useMinesGame();
  const playing = game.phase === 'playing';
  const accent = accentForGame('mines');
  const layout = useThemeLayout();

  return (
    <GamePageFrame game="mines" title="Goblin Mines">
      <GamePageGrid>
        <NeonCard accent={accent} stage stageClip className="gap-4 p-6">
          <div data-testid="mines-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
            <PhaserGame
              scenes={[MinesScene]}
              width={340}
              height={360}
              transparent
              themeKey={themeKey}
            />
          </div>
          {!sceneReady && (
            <p className="text-sm text-muted-foreground" aria-live="polite">
              Loading minefield…
            </p>
          )}
          {playing && (
            <div className="flex w-full flex-col items-center gap-1 text-center">
              <span className={cn(layout.sectionLabelClass, 'text-muted-foreground')}>
                Current multiplier
              </span>
              <span
                className={cn(
                  layout.sectionLabelClass,
                  'text-xl tabular-nums text-[color:var(--chart-3)] drop-shadow-[0_0_14px_color-mix(in_srgb,var(--chart-3)_45%,transparent)]',
                )}
                data-testid="mines-multiplier"
              >
                {game.currentMultiplier.toFixed(2)}x
              </span>
              {game.nextMultiplier !== null && (
                <span className="text-xs tabular-nums text-muted-foreground">
                  Next pick: {game.nextMultiplier.toFixed(2)}x
                </span>
              )}
            </div>
          )}
        </NeonCard>
        <NeonCard className="gg-game-panel">
          <span className={cn(layout.sectionLabelClass, 'text-foreground')}>Loot the chests</span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="mine-count" className="text-sm text-muted-foreground">
                Bombs
              </Label>
              <span className="text-xs tabular-nums text-muted-foreground" data-testid="mine-count">
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
              className={cn(
                layout.sectionLabelClass,
                'w-full border border-[color:var(--chart-3)]/45 bg-[color:var(--chart-3)]/10 py-4 text-xs text-[color:var(--chart-3)] shadow-[0_0_16px_color-mix(in_srgb,var(--chart-3)_25%,transparent)] hover:shadow-[0_0_30px_color-mix(in_srgb,var(--chart-3)_45%,transparent)]',
              )}
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
              betLabel={sceneReady ? 'Enter the minefield' : 'Loading minefield…'}
              accent={accent}
            />
          )}
        </NeonCard>
      </GamePageGrid>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className={cn(layout.sectionLabelClass, 'shrink-0 text-muted-foreground')}>
          History
        </span>
        <LedgerTable game="mines" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
