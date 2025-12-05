// tests/remedies.spec.ts
import { test, expect } from '@playwright/test';

test('user can navigate to the remedies list from the homepage', async ({ page }) => {
  await page.goto('/');

  const exploreRemediesCard = page.getByRole('link', {
    name: /explore remedies/i,
  });

  await expect(exploreRemediesCard).toBeVisible();

  await Promise.all([
    page.waitForURL(/\/remedies/),
    exploreRemediesCard.click(),
  ]);

  // Adjust the heading text to match your /remedies page
  await expect(
    page.getByRole('heading', { name: /remedies/i })
  ).toBeVisible();

  // At least one ailment link should be visible
  await expect(
    page.getByRole('link', { name: /aesculus/i }).first()
  ).toBeVisible();

  // Click a known ailment in that list
  const remedyLink = page.getByRole('link', { name: /hemorrhoids/i });
  await expect(remedyLink).toBeVisible();

  await Promise.all([
    page.waitForURL(/\/remedies\//),
    remedyLink.click(),
  ]);

  // On remedy detail page
  await expect(
    page.getByRole('heading', { name: /hemorrhoids/i })
  ).toBeVisible();
 }
);
