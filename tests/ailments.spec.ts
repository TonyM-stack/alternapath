// tests/ailments.spec.ts
import { test, expect } from '@playwright/test';

test('user can navigate from Common Ailments to an ailment detail page and then into a remedy', 
 async ({ page }) => {
  await page.goto('/');

  // Section heading exists
  await expect(
    page.getByRole('heading', { name: 'Common Ailments',exact: true })
  ).toBeVisible();

  // Click "Back Pain" from the grid
  const backPainLink = page.getByRole('link', { name: 'Back Pain' });
  await expect(backPainLink).toBeVisible();

  await Promise.all([
    page.waitForURL(/\/ailments\/back-pain/),
    backPainLink.click(),
  ]);

  // On ailment detail page, heading includes "Back Pain"
  await expect(
    page.getByRole('heading', { name: /back pain/i })
  ).toBeVisible();

  // Remedies list should exist somewhere on the page
  await expect(page.getByText(/suggested remedies with symptoms/i)).toBeVisible();


  // Click a known remedy in that list
  const remedyLink = page.getByRole('link', { name: /arnica montana/i });
  await expect(remedyLink).toBeVisible();

  await Promise.all([
    page.waitForURL(/\/remedies\//),
    remedyLink.click(),
  ]);

  // On remedy detail page
  await expect(
    page.getByRole('heading', { name: /arnica montana/i })
  ).toBeVisible();
 }
);

