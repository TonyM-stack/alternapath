import { test, expect } from '@playwright/test';

const TEST_USER = {
  emailOrUsername: 'testuser@example.com',
  password: 'Password123!',
};

test('user can log in from the login page', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel(/email or username/i).fill(TEST_USER.emailOrUsername);
  await page.getByLabel(/password/i).fill(TEST_USER.password);

  await Promise.all([
    page.waitForURL(/\/profile$/),
    page.getByRole('button', { name: /submit/i }).click(),
  ]);

  // Confirm we really are on the profile page
  await expect(page).toHaveURL(/\/profile$/);

  // Assert profile UI bits that actually exist:

  // 1) The "View your list of ailments/remedies →" link
  await expect(
    page.getByRole('link', { name: /view your list of ailments\/remedies/i })
  ).toBeVisible();

  // 2) The "Log out" button
  await expect(
    page.getByRole('button', { name: /log out/i })
  ).toBeVisible();
});

test('invalid login shows an error', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel(/email or username/i).fill('wrong@example.com');
  await page.getByLabel(/password/i).fill('wrong-password');

  await page.getByRole('button', { name: /submit/i }).click();

  await expect(
    page.getByText(/invalid credentials/i)
  ).toBeVisible();
});

