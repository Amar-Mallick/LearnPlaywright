import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
     // Navigate to the app
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  // Fill in credentials with redundant clicks or enters
 
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('tta_secret');
  // Click the login button
  await page.locator('[data-test="login-button"]').click();
  // Validate successful landing
  const titleLocator = page.locator('[data-test="title"]');
  await expect(titleLocator).toBeVisible();
  await expect(titleLocator).toHaveText(/Products/i);
});