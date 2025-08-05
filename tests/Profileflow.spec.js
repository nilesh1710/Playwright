import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://surecafe.tiuconsulting.us/frontend/auth/login');
  await page.locator('input[name="username"]').fill('ats434@yopmail.com');
  await page.locator('input[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle');
   // Wait for and click Profile
 await page.goto('https://surecafe.tiuconsulting.us/frontend/profile/dashboard');
  await page.waitForLoadState('networkidle');

await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const nextButton = buttons.find(btn => btn.textContent.trim() === 'Next');
  if (nextButton) nextButton.click();
});    await page.waitForLoadState('networkidle');

await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const nextButton = buttons.find(btn => btn.textContent.trim() === 'Next');
  if (nextButton) nextButton.click();
});    await page.waitForLoadState('networkidle');
//submit click
await page.evaluate(() => {
  const buttons = Array.from(document.querySelectorAll('button'));
  const submitButton = buttons.find(btn => btn.textContent.trim() === 'Submit');
  if (submitButton) submitButton.click();
});});