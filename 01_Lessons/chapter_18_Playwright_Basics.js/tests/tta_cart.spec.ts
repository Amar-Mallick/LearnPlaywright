import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('Amar Kumar');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('1234566');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});