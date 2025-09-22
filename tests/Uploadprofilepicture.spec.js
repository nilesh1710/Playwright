import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('Login and upload profile picture', async ({ page }) => {
   const filePath = 'C:\\Users\\Admin\\Desktop\\Tesst Data\\surecafetest.jpg';
  // 1. Login
  await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');
 await page.locator('[name="username"]').fill('ats434@yopmail.com');
await page.locator('[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('load');


  // 2. Wait for dashboard to fully load
await page.goto('https://surecafe.tiuconsulting.us/frontend/profile/home');
 await page.goto('https://surecafe.tiuconsulting.us/frontend/profile/dashboard');
  // 3. Optional: wait for known dashboard element
  await page.waitForSelector('text=Welcome', { timeout: 5000 }); // change text as needed

  // 4. Try broader locator for file input
 await page.evaluate(() => {
  const fileInput = document.querySelector('input[type="file"]');
  if (fileInput) {
    fileInput.click(); // Optional: only if clicking is needed before uploading
  }
});
  // 6. Optional: Confirm success or wait for image preview
  await page.waitForTimeout(1000);
});