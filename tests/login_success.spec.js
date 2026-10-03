import {test, expect} from '@playwright/test'

test('Valid User login with playwright locators', async ({ page }) => {
    await page.goto('https://qa.taltektc.com/index.html')
    await page.getByRole('textbox',{name:'Email address or Student ID'}).click()
    await page.getByRole('textbox',{name:'Email address or Student ID'}).fill('test1212@gmail.com')

    await page.getByRole('textbox',{name:'Password'}).click()
    await page.getByRole('textbox',{name:'Password'}).fill('test1212')

    await page.getByRole('button',{name:'Log In'}).click()

    // assertion
    await expect(page).toHaveURL('https://qa.taltektc.com/home.html')
})


test('Valid User login with CSS', async ({ page }) => {
    await page.goto('https://qa.taltektc.com/index.html')
    
    await page.locator('input[name="email"]').click()
    await page.locator('input[name="email"]').fill('test1212@gmail.com')

    await page.locator('input[name="password"]').click()
    await page.locator('input[name="password"]').fill('test1212')

    await page.locator('input.my-login').click()

    
    await expect(page).toHaveURL('https://qa.taltektc.com/home.html')
    
})


test('Valid User login with Xpath', async ({ page }) => {
    await page.goto('https://qa.taltektc.com/index.html')
    
    await page.locator('//input[@name="email"]').click()
    await page.locator('//input[@name="email"]').fill('test1212@gmail.com')

    await page.locator('//input[@name="password"]').click()
    await page.locator('//input[@name="password"]').fill('test1212')

    await page.locator('//input[@value="Log In"]').click()
    

    
    // await page.locator(p)

    await expect(page).toHaveURL('https://qa.taltektc.com/home.html')
    
})
