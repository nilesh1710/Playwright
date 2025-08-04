import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');
 await page.locator('[name="username"]').fill('ats434@yopmail.com');
await page.locator('[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('load');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Click' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://meet.google.com/jvc-zbhp-hxe');
});