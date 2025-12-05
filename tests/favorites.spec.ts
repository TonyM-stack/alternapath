import { test, expect, type Page } from '@playwright/test';

const TEST_USER = {
  emailOrUsername: 'testuser@example.com',
  password: 'Password123!',
};

async function login(page: Page) {
  await page.goto('/login');

  await page.getByLabel(/email|username/i).fill(TEST_USER.emailOrUsername);
  await page.getByLabel(/password/i).fill(TEST_USER.password);

  await Promise.all([
    page.waitForURL(/\/(profile|)$/), // tweak if you redirect elsewhere
    page.getByRole('button', { name: /submit/i }).click(),
  ]);
}

test('user is logged in and can access their list', async ({ page }) => {
  await login(page);

  await expect(page).toHaveURL(/\/(profile|)$/); // or your real post-login URL

  const listLink = page.getByRole('link', {
    name: /view your list of ailments\/remedies/i,
  });
  await expect(listLink).toBeVisible();

  await Promise.all([
    page.waitForURL(/\profile\/favorites/i), // put real route here
    listLink.click(),
  ]);

  await expect(
    page.getByRole('button', { name: /log out/i })
  ).toBeVisible();
});


