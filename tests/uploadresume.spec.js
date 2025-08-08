import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

test('Resume upload test', async ({ page }) => {
  await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');

  await page.locator('input[name="username"]').fill('ats434@yopmail.com');
  await page.locator('input[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('.ngx-overlay').waitFor({ state: 'hidden' });



await page.evaluate(() => {
  const elements = Array.from(document.querySelectorAll('*'));
  const browseBtn = elements.find(el => el.textContent.trim() === 'Browse Files');
  if (browseBtn) browseBtn.click();
});
await page.evaluate(() => {
  const uploadInput = document.querySelector('input[type="file"]#template_ducument');
  if (uploadInput) {
    uploadInput.click();
  }
});;
});