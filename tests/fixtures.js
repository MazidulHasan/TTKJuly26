import { test as base,expect} from '@playwright/test'

export const test = base.extend({
    logIn: async ({page}, use) =>{
        await page.goto('https://qa.taltektc.com/index.html')
        await page.getByRole('textbox',{name:'Email address or Student ID'}).fill('test1212@gmail.com')
        await page.getByRole('textbox',{name:'Password'}).fill('test1212')
        await page.getByRole('button',{name:'Log In'}).click()
        await expect(page).toHaveURL('https://qa.taltektc.com/home.html')

        await use(page);
    },
})