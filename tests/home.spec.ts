import { test, expect } from '@playwright/test';

test('homepage loads and shows Alternapath branding', async ({ page }) => {
  await page.goto('/');

  // Use a unique, role-based locator instead of ambiguous text
  await expect(
    page.getByRole('heading', { name: 'Ready to explore Alternapath?' })
  ).toBeVisible();

  // Search box check (still fine)
  await expect(
    page.getByRole('searchbox', { name: /search remedies or ailments/i })
  ).toBeVisible();
});

