import { Badge, Button, Input, Label } from '@/components/kit';
import { BetControls } from '@/components/game/BetControls';
import { LedgerTable } from '@/components/game/LedgerTable';
import { PhaserGame } from '@/phaser/PhaserGame';
import { CrashScene } from '@/phaser/scenes/CrashScene';
import { usePhaserSceneReady } from '@/phaser/usePhaserSceneReady';
import { useThemeKey } from '@/components/theme/useThemeKey';
import { useCrashGame } from '@/game/useCrashGame';
import { GamePageFrame } from '@/components/game/GamePageFrame';
import { NeonCard } from '@/components/game/NeonCard';
import { accentForGame } from '@/game/accent';

export default function CrashPage() {
  const sceneReady = usePhaserSceneReady('crash');
  const themeKey = useThemeKey();
  const game = useCrashGame();
  const running = game.phase === 'running';
  const accent = accentForGame('crash');

  return (
    <GamePageFrame game="crash" title="Goblin Crash">
      <div className="grid gap-[18px] lg:grid-cols-[1fr_380px]">
        <NeonCard accent={accent} className="flex flex-col items-center gap-4 p-6">
          <div data-testid="crash-visual" data-scene-ready={sceneReady ? 'true' : 'false'}>
            <PhaserGame
              scenes={[CrashScene]}
              width={640}
              height={340}
              transparent
              themeKey={themeKey}
            />
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
        </NeonCard>
        <NeonCard className="flex flex-col gap-[18px] p-6">
          <span className="retro text-[10px] text-foreground">Run it</span>
          <div className="flex flex-col gap-2">
            <Label htmlFor="auto-cashout" className="text-[13px] text-muted-foreground">
              Auto cash-out (optional)
            </Label>
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
              className="retro h-10 border-border bg-background text-[11px]"
              data-testid="auto-cashout"
            />
          </div>
          {running ? (
            <div className="flex flex-col gap-3">
              <div
                className="retro animate-pulse text-center text-3xl text-destructive drop-shadow-[0_0_18px_rgba(244,63,94,.55)]"
                data-testid="crash-multiplier"
              >
                {game.multiplier.toFixed(2)}x
              </div>
              <Button
                size="lg"
                className="retro w-full py-[18px] text-xs"
                onClick={game.cashOut}
                data-testid="cashout-button"
                style={{
                  background: 'linear-gradient(180deg, #fb7185, #e11d48)',
                  color: '#fff',
                  boxShadow: '0 0 36px rgba(244,63,94,.55)',
                }}
              >
                Cash out {(Math.floor(game.amount * game.multiplier * 100) / 100).toLocaleString()}{' '}
                GG
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
              accent={accent}
            />
          )}
        </NeonCard>
      </div>
      <NeonCard className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center">
        <span className="retro shrink-0 text-[9px] text-muted-foreground">History</span>
        <LedgerTable game="crash" variant="chips" />
      </NeonCard>
    </GamePageFrame>
  );
}
