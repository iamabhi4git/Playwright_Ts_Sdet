//import built in function comes from playwright
import { test, expect } from '@playwright/test';

test('Open Google and verify title', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');

  // Verify page title
  await expect(page).toHaveTitle(/Google/);

});