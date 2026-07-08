import { Badge, Button, Input, Label } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { PhaserGame } from '@/phaser/PhaserGame';
import { CrashScene } from '@/phaser/scenes/CrashScene';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';
import { useCrashGame } from '@/game/useCrashGame';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { GamePageGrid } from '@/components/game/GamePageGrid';
import { VisualStage } from '@/components/game/VisualStage';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame, accentTokens } from '@/game/accent';
import { useThemeLayout } from '@/components/theme/useThemeLayout';
import { cn } from '@/lib/utils';

export default function CrashPage() {
  const sceneReady = usePhaserSceneReady('crash');
  const themeKey = useThemeKey();
  const game = useCrashGame();
  const running = game.phase === 'running';
  const accent = accentForGame('crash');
  const tokens = accentTokens(accent);
  const layout = useThemeLayout();

  return (
    <GamePageFrame game="crash" title="Goblin Crash">
      <GamePageGrid>
        <NeonCard accent={accent} stage stageClip className="gap-4 p-6">
          <VisualStage
            width={640}
            height={340}
            loading={!sceneReady}
            loadingLabel="Loading arena…"
            data-testid="crash-visual"
            data-scene-ready={sceneReady ? 'true' : 'false'}
          >
            <PhaserGame
              scenes={[CrashScene]}
              width={640}
              height={340}
              transparent
              themeKey={themeKey}
            />
          </VisualStage>
          {game.history.length > 0 && (
            <div className="flex w-full flex-wrap gap-2" data-testid="crash-history">
              {game.history.map((round, i) => (
                <Badge
                  key={i}
                  className={cn(
                    'text-[10px] tabular-nums',
                    round.cashedAt !== null ? 'text-[color:var(--chart-3)]' : 'text-destructive',
                  )}
                >
                  {round.crashPoint.toFixed(2)}x
                </Badge>
              ))}
            </div>
          )}
        </NeonCard>
        <NeonCard className="gg-game-panel">
          <span className={cn(layout.sectionLabelClass, 'text-foreground')}>Run it</span>
          <div className="flex flex-col gap-2">
            <Label htmlFor="auto-cashout" className="text-sm text-muted-foreground">
              Auto cash-out (optional)
            </Label>
            <Input
              id="auto-cashout"
              name="auto-cashout"
              type="number"
              inputMode="decimal"
              autoComplete="off"
              spellCheck={false}
              min={1.01}
              step={0.5}
              placeholder="e.g. 2.00…"
              value={game.autoCashout ?? ''}
              onChange={(e) =>
                game.setAutoCashout(e.target.value === '' ? null : Number(e.target.value))
              }
              disabled={running}
              className="h-10 border-border bg-background text-sm tabular-nums"
              data-testid="auto-cashout"
            />
          </div>
          {running ? (
            <div className="flex flex-col gap-3">
              <div
                className={cn(
                  layout.sectionLabelClass,
                  'animate-pulse text-center text-3xl tabular-nums text-destructive drop-shadow-[0_0_18px_color-mix(in_srgb,var(--destructive)_55%,transparent)]',
                )}
                data-testid="crash-multiplier"
              >
                {game.multiplier.toFixed(2)}x
              </div>
              <Button
                size="lg"
                className={cn(layout.sectionLabelClass, 'w-full py-4 text-xs')}
                onClick={game.cashOut}
                data-testid="cashout-button"
                style={{
                  background: `linear-gradient(180deg, ${tokens.gradientFrom}, ${tokens.gradientTo})`,
                  color: tokens.buttonText,
                  boxShadow: tokens.hoverGlow,
                }}
              >
                Cash out {(Math.floor(game.amount * game.multiplier * 100) / 100).toLocaleString()}{' '}
                GG
              </Button>
              <span className="text-center text-xs tabular-nums text-muted-foreground">
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
              betLabel={sceneReady ? 'Start the run' : 'Loading arena…'}
              accent={accent}
            />
          )}
        </NeonCard>
      </GamePageGrid>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className={cn(layout.sectionLabelClass, 'shrink-0 text-muted-foreground')}>
          History
        </span>
        <LedgerTable game="crash" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
