import { test, expect } from '@playwright/test';
import { PomLoginPage } from '../pages/PomLoginPage';

test('Login with POM', async ({ page }) => {
    const pomLoginPage = new PomLoginPage(page);

    await pomLoginPage.goto();
    
    await pomLoginPage.login('standard_user', 'secret_sauce');
    
    await expect(page.locator('.inventory_list')).toBeVisible();
})