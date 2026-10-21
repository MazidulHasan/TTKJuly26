import {test, expect} from '@playwright/test'

const testDatas = JSON.parse(JSON.stringify(require('../Data/testData_json.json')))


test.describe("MultiTest Login" ,()=>{
    for (const testdata of testDatas) {

        const data = Object.values(testdata)[0]
        console.log("data",data);
        

        test(`Testing with ${data.Interests}`, async({page})=>{
            await page.goto('https://freelance-learn-automation.vercel.app/signup')
            const InterestT = data.Interests;
            console.log("InterestT",InterestT);
            await page.locator(`.interest:has-text("${InterestT}")`).click()
        })
    }
})