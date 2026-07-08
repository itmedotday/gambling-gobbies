import { test, expect } from '@playwright/test';

const GAMES = [
  { path: 'coinflip', title: 'Coin Flip', testId: 'coin-visual', sceneReady: 'true' },
  { path: 'dice', title: 'Dice Slider', testId: 'dice-visual' },
  { path: 'wheel', title: 'Wheel', testId: 'wheel-visual' },
  { path: 'd20', title: 'D20 Roll', testId: 'd20-visual' },
  { path: 'crash', title: 'Goblin Crash', testId: 'crash-visual', sceneReady: 'true' },
  { path: 'mines', title: 'Goblin Mines', testId: 'mines-visual', sceneReady: 'true' },
] as const;

test.describe('Game pages render', () => {
  for (const game of GAMES) {
    test(`${game.path} visual stage mounts`, async ({ page }) => {
      await page.goto(`/play/${game.path}`);
      await expect(page.getByRole('heading', { name: game.title })).toBeVisible();
      const visual = page.getByTestId(game.testId);
      await expect(visual).toBeVisible({ timeout: 20_000 });
      if ('sceneReady' in game && game.sceneReady) {
        await expect(visual).toHaveAttribute('data-scene-ready', game.sceneReady, {
          timeout: 20_000,
        });
      }
      await expect(page.getByTestId('bet-button')).toBeVisible();
    });
  }
});
