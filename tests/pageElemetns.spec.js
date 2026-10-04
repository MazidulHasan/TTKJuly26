import {test, expect} from '@playwright/test'


test.beforeEach(async ({page})  =>{
    await page.goto('https://qa.taltektc.com/index.html')
    await page.getByRole('textbox',{name:'Email address or Student ID'}).fill('test1212@gmail.com')
    await page.getByRole('textbox',{name:'Password'}).fill('test1212')
    await page.getByRole('button',{name:'Log In'}).click()
    await expect(page).toHaveURL('https://qa.taltektc.com/home.html')
})

test('Valid User login with playwright locators', async ({ page }) => {
    await page.locator('//a[@href="alert.html"]').click();
    page.once('dialog', dialog =>{
        console.log(`Dailog message:::::: ${dialog.message()}`);
        dialog.dismiss()
    })
    // await page.getByRole('button',{name:'Try it'}).click();
    await page.getByRole('button', {name:'Open Small Modal'}).click()
})

test('Valid User login with playwright locators _ iframe', async ({ page }) => {
    await page.locator('//a[@href="iframe.html"]').click();
    const talentTekiFrame  = await page.locator('//iframe[@title="TALENT TEK"]').contentFrame();
    await talentTekiFrame.getByRole('button',{name:'Play video'}).click()
    await page.waitForTimeout(3000) //3 sec
    await talentTekiFrame.getByRole('button',{name:'Pause video'}).click()
})

test('Valid User login with playwright locators _ dropdown', async ({ page }) => {
  await page.locator('//a[@href="drop-down.html"]').click();  
  await page.locator('#cars').selectOption('Tesla');
    // manual  div will  show next class
})

test('Valid User login with playwright locators _ Drag and Drop', async ({ page }) => {
    await page.locator('//a[@href="drag-drop.html"]').click();  
    const dragElemnt = page.locator('#drag1')
    const targetDiv = page.locator('#div2')
    await dragElemnt.dragTo(targetDiv);
})

test('Valid User login with playwright locators _ Slider', async ({ page }) => {
    await page.locator('//a[@href="slider.html"]').click();  
    await page.locator('#myRange').fill('75')
})
