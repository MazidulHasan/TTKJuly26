import { test, expect } from '@playwright/test';

test('Login and verify inventory items', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: "Username" }).fill('standard_user');
    await page.getByRole('textbox', { name: "Password" }).fill('secret_sauce');
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page).toHaveURL(/inventory\.html/);

    // ✅ WAIT for the first product to appear before reading
    const productNameLocator = page.locator('[data-test="inventory-item-name"]');
    await expect(productNameLocator.first()).toBeVisible();

    const allProducts = await productNameLocator.allTextContents();
    console.log('Products found on page:', allProducts);
    console.log('Count:', allProducts.length);

    const expectedProducts = [
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
    ];

    const missingProducts = expectedProducts.filter(p => !allProducts.includes(p));

    expect(missingProducts, `Missing: ${missingProducts.join(', ')}`).toHaveLength(0);
    console.log('✅ All expected products are present');
});