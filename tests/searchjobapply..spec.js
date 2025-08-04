import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://surecafe.tiuconsulting.us/frontend/');
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('ats51@yopmail.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('surecafe');
  await page.getByRole('button', { name: 'Login' }).click();

// Locate the search input field and ensure it's visible
  const searchInput = page.locator('input[type="text"]:visible');
  await expect(searchInput).toBeVisible({ timeout: 10000 });

  // Fill in the search field with the job title
  await searchInput.fill('Laravel Programmer');

  // Locate and click on the 'Laravel Programmer' job link
await page.evaluate(() => {
  const xpath = `//a[text()="Laravel Programmer"]`;
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const element = result.singleNodeValue;
  if (element) element.click();
})

  // Wait for navigation to complete
  //await page.waitForLoadState('networkidle');

  // Locate and click the logo to return to the homepage
const logo = page.locator('img[src="assets/image/logo.svg"]');
await logo.click();
await page.evaluate(() => {
  const xpath = '//img[@src="assets/image/logo.svg"]';
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const logo = result.singleNodeValue;
  if (logo) logo.click();
});
  // Wait for navigation to complete
  //await page.waitForLoadState('networkidle');

  // Locate and click on the 'Data engineer' job link
 const dataEngineerLink = page.locator('section.jobs-list a:has-text("Data engineer")');
 // await expect(dataEngineerLink).toBeVisible({ timeout: 10000 });
  //await dataEngineerLink.click({ timeout: 60000 });


  //await page.waitForLoadState('networkidle');

  await logo.click();
});
