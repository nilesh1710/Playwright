import { chromium } from 'playwright';
import { expect } from '@playwright/test';

(async () => {
  const capabilities = {
    browserName: 'Chrome',
    browserVersion: 'latest',
    'LT:Options': {
      platform: 'Windows 10',
      build: 'My Playwright Build',
      name: 'Single Test on LambdaTest',
      user: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
      network: true,
      video: true,
      console: true
    }
  };

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  try {
    expect(title).toContain('Example Domain');
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments: {status: 'passed', remark: 'Title matched'}})}`);
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: 'setTestStatus', arguments: {status: 'failed', remark: 'Title mismatch'}})}`);
  }

  await browser.close();
})();