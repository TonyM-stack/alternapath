import { test, expect } from '@playwright/test';

test('user can search for an ailment and view its remedies', async ({ page }) => {
  // Go to homepage
  await page.goto('/');

  // Type into search bar
  const searchInput = page.getByPlaceholder(/search/i);
  await searchInput.fill('headache');
  await page.getByRole('button', {name: /search/i}).click();

  // Wait for search results and click first ailment
  const ailmentResult = page.getByRole('link', { name: /headache/i }).first();
  await expect(ailmentResult).toBeVisible();
  await ailmentResult.click();

  // We should now be on the ailment detail page
  await expect(page).toHaveURL(/\/ailments\//);

  // Check that ailment title is visible
  await expect(page.getByRole('heading', { name: /headache/i })).toBeVisible();

  // Check remedies list exists
  await expect(page.getByText(/remedy/i)).toBeVisible();
});
