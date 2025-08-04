import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname support for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

test('Resume upload test', async ({ page }) => {
  await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');

  await page.locator('input[name="username"]').fill('ats434@yopmail.com');
  await page.locator('input[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();

  // Instead of waiting for exact URL, wait for a known dashboard element
  await page.locator('.ngx-overlay').waitFor({ state: 'hidden' });

  // Optional: check URL if needed
  // await expect(page).toHaveURL(/dashboard/);

await page.evaluate(() => {
  const elements = Array.from(document.querySelectorAll('*'));
  const browseBtn = elements.find(el => el.textContent.trim() === 'Browse Files');
  if (browseBtn) browseBtn.click();
});
const fileInput = page.locator('input[type="file"]');
const filePath = path.resolve('C:/Users/Admin/Downloads/Smith-David.docx');
await fileInput.setInputFiles(filePath, { force: true });
});