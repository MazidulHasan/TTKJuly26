const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { users }     = require('../test-data/users');

test.describe('Login', () => {

  test('valid credentials → success message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    const msg = await loginPage.getMessage();
    expect(msg).toContain('You logged into a secure area!');
  });

  test('invalid credentials → error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    const msg = await loginPage.getMessage();
    expect(msg).toContain('Your username is invalid!');
  });

});