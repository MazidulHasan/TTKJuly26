import {test, expect} from '@playwright/test'

test('Multiple tabs', async ({ page,context }) => {
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages  = context.pages();
    console.log("Total Tabs:", allPages);
    

    await page1.goto('https://google.com')
    await page2.goto('https://github.com')

    await page1.bringToFront();
    await page2.bringToFront();
})

test('Multitab after click', async ({ page,context }) => {
    await page.goto('https://the-internet.herokuapp.com/windows')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', {name:'Click Here'}).click()
    ])

    await newPage.waitForLoadState();
    await expect(newPage.getByRole('heading', {name:'New Window'})).toBeVisible()
    await expect(newPage.locator('h3')).toHaveText('New Window')

    await expect(page.locator('//div[@class="example"]//h3')).toHaveText('Opening a new window')
    
})

