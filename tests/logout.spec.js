import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');
 await page.locator('[name="username"]').fill('ats434@yopmail.com');
await page.locator('[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('load'); 
   await page.getByRole('link', { name: 'SM' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

  