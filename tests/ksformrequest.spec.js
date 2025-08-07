import { test, expect } from '@playwright/test';
import path from 'path';

test('Fill and submit facility request form', async ({ page }) => {
  const fillField = async (selector, value) => {
    const el = page.locator(selector);
    await expect(el).toBeVisible({ timeout: 10000 });
    await el.fill(value);
  };

  const facilityName = 'Roger';
  const contactPerson = 'Damc';
  const email = 'formtest@yopmail.com';
  const phone = '1233217654';
  const address = 'New York US';

  await page.goto('https://dev.kredsafe.net/login');
  await fillField('input[name="email"]', 'hrd786@yopmail.com');
  await fillField('input[name="password"]', 'Nilesh@2025');
  await page.locator('#id_frm_submit').click();

  await page.goto('https://dev.kredsafe.net/user/es_forms/request-form');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000); // brief pause if needed

  // Set facility name via JS
  await page.evaluate((value) => {
    const input = document.querySelector('#facility_name');
    if (input) input.value = value;
  }, facilityName);

  // Set contact person and dispatch input/change events
  await page.evaluate((value) => {
    const input = document.querySelector('#contact_person');
    if (input) {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, contactPerson);

  await page.waitForSelector('#email', { timeout: 10000 });
  await page.locator('#email').fill(email);

  // Set phone with events
  await page.evaluate((value) => {
    const input = document.querySelector('#phone');
    if (input) {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, phone);

  // Set address textarea with events
  await page.evaluate((value) => {
    const textarea = document.querySelector('textarea[name="address"]');
    if (textarea) {
      textarea.value = value;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, address);

 const filePath = path.resolve('C:/Users/Admin/Downloads/Dice_Resume_CV_Akash_Patel.pdf');
  const fileInput = page.locator('input[type="file"]');
 await page.evaluate(() => {
   const elements = Array.from(document.querySelectorAll('*'));
   const browseBtn = elements.find(el => el.textContent.trim() === 'Browse Files');
   if (browseBtn) browseBtn.click();
 });


await page.waitForSelector('input[type="file"]', { timeout: 30000 });
  // Optional: Scroll page down (if needed)
  await page.keyboard.press('PageDown');
});
