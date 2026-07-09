import { test, expect } from '@playwright/test';

test.describe('Gambling Gobbies smoke', () => {
  test('landing and lobby navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Gambling/i })).toBeVisible();
    await page.getByRole('link', { name: /Lobby/i }).first().click();
    await expect(page.getByRole('heading', { name: 'Lobby' })).toBeVisible();
    await expect(page.getByTestId('game-grid')).toBeVisible();
    await expect(page.getByTestId('game-card-crash')).toBeVisible();
  });

  test('coin flip places a bet', async ({ page }) => {
    await page.goto('/play/coinflip');
    await expect(page.getByRole('heading', { name: 'Coin Flip' })).toBeVisible();
    await expect(page.locator('[data-testid="coin-visual"][data-scene-ready="true"]')).toBeVisible({
      timeout: 15_000,
    });
    const balanceBefore = await page.getByText(/Balance:/).first().textContent();
    await page.getByTestId('bet-button').click();
    await expect(page.getByTestId('ledger-row').first()).toBeVisible({ timeout: 15_000 });
    const balanceAfter = await page.getByText(/Balance:/).first().textContent();
    expect(balanceAfter).not.toEqual(balanceBefore);
  });

  test('settings persist reduced motion toggle', async ({ page }) => {
    await page.goto('/settings');
    const toggle = page.getByTestId('setting-reduced-motion');
    await toggle.click();
    await page.reload();
    await expect(toggle).toBeChecked();
  });

  test('theme toggle switches light and dark', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByTestId('theme-toggle');
    await expect(toggle).toBeVisible();
    const html = page.locator('html');
    const wasDark = await html.evaluate((el) => el.classList.contains('dark'));
    await toggle.click();
    if (wasDark) {
      await expect(html).not.toHaveClass(/dark/, { timeout: 5_000 });
    } else {
      await expect(html).toHaveClass(/dark/, { timeout: 5_000 });
    }
    await page.goto('/settings');
    await expect(page.getByTestId('setting-dark-mode')).toBeVisible();
  });

  test('settings select does not shift page when opened', async ({ page }) => {
    await page.goto('/settings');
    await page.setViewportSize({ width: 1280, height: 720 });
    const trigger = page.getByTestId('setting-ui-skin');
    const boxBefore = await trigger.boundingBox();
    await trigger.click();
    await expect(page.getByRole('option', { name: 'Modern' })).toBeVisible();
    const bodyMargin = await page.evaluate(() => getComputedStyle(document.body).marginRight);
    expect(bodyMargin).toBe('0px');
    const boxAfter = await trigger.boundingBox();
    expect(boxAfter?.x).toBeCloseTo(boxBefore?.x ?? 0, 0);
  });
});
