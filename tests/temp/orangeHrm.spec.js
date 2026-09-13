import {test, expect} from "@playwright/test"

test('Check Select Option', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.waitForLoadState('domcontentloaded')
    await page.getByRole('textbox', {name:"Username"}).fill('Admin')
    await page.getByRole('textbox', {name:"Password"}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await page.getByRole('link', {name:'Recruitment'}).click()
    await page.locator(`//label[contains(text(), "Job Title")]/../..//div[@class='oxd-select-wrapper']`).click()
    
    await page.locator(`//label[contains(text(), "Job Title")]/../..//div[@class='oxd-select-wrapper']//span[text()="Chief Executive Officer"]`).click()
    await page.waitForTimeout(500000)
})
