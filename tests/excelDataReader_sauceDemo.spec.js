import {test, expect} from '@playwright/test'

const path = require('path');
const XLSX = require('xlsx');

// Pre Process the excel to json
const excelFile = path.join(__dirname,'../Data/testData_MultiLogin.xlsx');
const workBook = XLSX.readFile(excelFile);
const workSheet = workBook.Sheets[workBook.SheetNames[0]];
const testDatas = XLSX.utils.sheet_to_json(workSheet);

test.describe("MultiTest Login" ,()=>{
    for (const testdata of testDatas) {
        test(`Testing with ${testdata.userName}`, async({page})=>{
            await page.goto('https://www.saucedemo.com/')
            await page.locator('#user-name').fill(testdata.userName)
            await page.locator('#password').fill(testdata.password)
            await page.locator('#login-button').click()

            if (testdata.testStatus === 'pass') {
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
            }
            else{
                await expect(page.locator('.error-message-container')).toBeVisible()
            }
        })
    }
})