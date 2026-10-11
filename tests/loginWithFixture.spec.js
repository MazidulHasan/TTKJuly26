import { test } from "./fixtures";


test('Valid User login with playwright locators _ iframe', async ({  logIn: page }) => {
    await page.locator('//a[@href="iframe.html"]').click();
    const talentTekiFrame  = await page.locator('//iframe[@title="TALENT TEK"]').contentFrame();
    await talentTekiFrame.getByRole('button',{name:'Play video'}).click()
    await page.waitForTimeout(3000) //3 sec
    await talentTekiFrame.getByRole('button',{name:'Pause video'}).click()
})