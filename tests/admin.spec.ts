
import { test, expect, type Page } from '@playwright/test';

const NON_ADMIN_USER = {
  emailOrUsername: 'testuser@example.com',    
  password: 'Password123!',                  
};

const ADMIN_USER = {
  emailOrUsername: 'tmart1221',       // <--  real admin user
  password: '12211221',              // <--  real password
};

async function login(page: Page, user: typeof ADMIN_USER) {
  // 1) Make sure we are logged out for this test
  await page.context().clearCookies();

  await page.goto('/login');

  await page.getByLabel(/email|username/i).fill(user.emailOrUsername);
  await page.getByLabel(/password/i).fill(user.password);

    // Just click the button
  await page.getByRole('button', { name: /Submit/i }).click();

  // Now assert where you actually land (adjust this if needed)
  await expect(page).toHaveURL(/\/profile\b/);

//   await Promise.all([
//     page.waitForURL(/\/(profile|)$/), // adjust if you redirect elsewhere
//     page.getByRole('button', { name: /submit/i }).click(),
//   ]);

  // Instead of toHaveURL, wait for profile UI
  // Profile page shows "Your profile" and a Log out button.
//   await expect(
//     page.getByRole('heading', { name: /your profile/i })
//   ).toBeVisible();

//   await expect(
//     page.getByRole('button', { name: /log out/i })
//   ).toBeVisible();

  // OPTIONAL: give the app a moment to navigate/render
//   await page.waitForLoadState('networkidle');

   // TEMP: debug where we actually landed
  console.log('URL after login():', page.url());
}

/**
 * 1) Non-admin should NOT be able to access /admin
 */
test('non-admin user does not see Admin Dashboard', async ({ page }) => {
  await login(page, NON_ADMIN_USER);

  await expect(page).toHaveURL('/profile'); //After login land on profile 

 // Non-admin should not see admin dashboard link
  await expect(page.getByRole('link', { name: /admin dashboard/i })).toHaveCount(0);
});

/**
 * 2) Admin CAN open /admin dashboard
 */
test('admin user can access admin dashboard via link', async ({ page }) => {
  await login(page, ADMIN_USER);

  await expect(page).toHaveURL(/\/profile\b/); //After login land on profile 

  const adminLink = page.getByRole('link', { name: /admin dashboard/i });
  await expect(adminLink).toBeVisible();

  await Promise.all([
    page.waitForURL(/\/admin(\/|\?|$)/),
    adminLink.click(),
  ]);

  // Adjust this to match your actual admin heading
  await expect(
    page.getByRole('heading', { name: /admin dashboard/i })
  ).toBeVisible();
});

/**
 * 3) Admin can create a new ailment from the /admin page */

test('admin can link an existing ailment and remedy from Quick add & link', async ({ page }) => {
  await login(page, ADMIN_USER);

  // Admin uses the "Admin Dashboard" link on profile (if present)
  const adminLink = page.getByRole('link', { name: /admin dashboard/i });

  if (await adminLink.isVisible().catch(() => false)) {
    await adminLink.click();
  } else {
    await page.goto('/admin');   // fallback if you go directly
  }

  // We should see the Admin Dashboard
  await expect(
    page.getByRole('heading', { name: /admin dashboard/i })
  ).toBeVisible();

  // --- Quick add & link form ---

  // Select existing ailment (e.g. "Back Pain")
  const ailmentSelect = page.getByLabel(/ailment$/i);
  await ailmentSelect.selectOption({ label: 'Back Pain' });

  // Select existing remedy (e.g. "Rhus toxicodendron")
  const remedySelect = page.getByLabel(/remedy$/i);

  await expect(remedySelect).toBeVisible();
  await expect(remedySelect).toContainText(/rhus/i);


  await remedySelect.selectOption({ value: '7'});

  // Optional: symptom description
  await page
    .getByLabel(/symptom description/i)
    .fill('E2E: test link for back pain.');

  // Click "Save and link"
  await page
    .getByRole('button', { name: /save and link/i })
    .click();

  await expect(page.getByText(/ailment and remedy linked successfully/i)).toBeVisible();

  // Now verify on the public Back Pain page that "Rhus toxicodendron" shows up
  await page.goto('/ailments/back-pain');

  await expect(
    page.getByRole('heading', { name: /back pain/i })
  ).toBeVisible();

  await expect(
    page.getByText(/suggested remedies with symptoms/i)
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: /rhus toxicodendron/i })
  ).toBeVisible();
});
