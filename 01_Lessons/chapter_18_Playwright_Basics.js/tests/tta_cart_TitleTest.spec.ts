import{test,expect} from '@playwright/test'
test("Verify title should be TTA Cart",async({page})=>{
 await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
 await expect(page).toHaveTitle("TTACart - Login");
});