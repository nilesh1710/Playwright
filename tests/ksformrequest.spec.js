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
  await page.waitForTimeout(1000);  // brief pause if needed
await page.waitForSelector('#facility_name', { timeout: 10000 });
await page.locator('#facility_name').fill(facilityName);

await page.waitForSelector('#contact_person', { timeout: 10000 });
await page.locator('#contact_person').fill(contactPerson);

await page.waitForSelector('#email', { timeout: 10000 });
await page.locator('#email').fill(email);

await page.waitForSelector('#phone', { timeout: 10000 });
await page.locator('#phone').fill(phone);

await page.waitForSelector('textarea[name="address"]', { timeout: 10000 });
await page.locator('textarea[name="address"]').fill(address);

  const filePath = path.resolve('C:/Users/Admin/Downloads/Dice_Resume_CV_Akash_Patel.pdf');
  const fileInput = page.locator('input[type="file"]');
  await expect(fileInput).toBeVisible({ timeout: 5000 });
  await fileInput.setInputFiles(filePath);

  await page.evaluate(() => {
    const el = document.evaluate('//*[@id="submit_form"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (el) {
      el.scrollIntoView();
      el.click();
    }
  });

  await page.keyboard.press('PageDown');
});
