class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://the-internet.herokuapp.com/login';

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton   = page.locator('button[type="submit"]');
    this.flashMessage  = page.locator('#flash');
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getMessage() {
    return (await this.flashMessage.textContent()).trim();
  }
}

module.exports = { LoginPage };