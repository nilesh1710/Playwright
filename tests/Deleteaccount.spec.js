import { test, expect } from '@playwright/test';

test('login and open meeting link', async ({ page }) => {
  await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');

  await page.locator('input[name="username"]').fill('ats434@yopmail.com');
  await page.locator('input[name="password"]').fill('surecafe');

  // Click login and wait for navigation/network idle
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle', timeout: 15000 }),
    page.getByRole('button', { name: 'Login' }).click(),
  ]);

  // Instead of checking URL, wait for some logged-in element
  await expect(page.locator('a[role="link"][name="Profile"]')).toBeVisible({ timeout: 10000 });

  // Proceed with popup and meeting link
//  const popupPromise = page.waitForEvent('popup');
 // await page.getByRole('link', { name: 'Click' }).click();
 // const popup = await popupPromise;

  await popup.waitForLoadState('load');

  const meetingLink = popup.locator('a.meeting-link-selector'); // Replace with actual selector
  await meetingLink.scrollIntoViewIfNeeded();
  await meetingLink.click();
});
