import { test, expect } from '@playwright/test';

test('Login and click target link', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');

  // Fill login form
  await page.locator('[name="username"]').fill('ats434@yopmail.com');
  await page.locator('[name="password"]').fill('surecafe');

  // Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for the page to fully load
  await page.waitForLoadState('load');

  // Click the link with text 'Click' using evaluate
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    const targetLink = links.find(link => link.textContent.trim() === 'Click');
    if (targetLink) {
      targetLink.click();
    }
  });
});