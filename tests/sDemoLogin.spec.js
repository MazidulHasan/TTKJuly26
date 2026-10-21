import { test, expect } from '@playwright/test';
import {sdemoLoginPage} from '../pages/sdemoLoginPage.js' ;
import { LOGIN_MESSAGE } from '../constansts/messages.js';
import { expectErrorMessage } from '../utils/assertions.js'

test('Demo Login for standard_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Demo Login for locked_out_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');
    // await expect(loginPage.loginErrorMessage).toBeVisible();
    // await expect(LOGIN_MESSAGE.LOCKED_OUT).toBeVisible();

    await expectErrorMessage(loginPage.errorMessage,LOGIN_MESSAGE.LOCKED_OUT)

});
//incomplete.
test('Demo Login for problem_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('problem_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(loginPage.problemImg).toHaveAttribute('src','/assets/sl-404-Cq1a9k9X.jpg')

    //// advanced assertion to be worked on future projects.
    // // await expect(loginPage.backpackImage).toBeVisible();
    // const backpackImageUrl = await loginPage.backpackImage.evaluate(image => image.getAttribute('src')); //getting a timeout.

    // // await loginPage.bikeLightImage.waitFor({ state: 'visible' });
    // const bikeLightImageUrl = await loginPage.bikeLightImage.evaluate(image => image.getAttribute('src'));
    // // expect(bikeLightImageUrl).toBe(loginPage.bikeLightImageUrl);

    // await expect(backpackImageUrl).toContain('https://www.saucedemo.com/assets/sl-404-Cq1a9k9X.jpg');
});

test('Demo Login for performance_glitch_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Demo Login for error_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('error_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Demo Login for visual_user', async ({ page }) => {
    const loginPage = new sdemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('visual_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});