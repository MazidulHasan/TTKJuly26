export class sdemoLoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        // this.loginErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
        this.backpackImage = page.getByRole('image', { name: 'Sauce Labs Backpack' });
        // this.backpackImageUrl = "https://www.saucedemo.com/assets/sl-404-Cq1a9k9X.jpg";
        this.bikeLightImage = page.getByRole('image', { name: 'Sauce Labs Bike Light' });
        // this.bikeLightImageUrl = "https://www.saucedemo.com/assets/sl-404-Cq1a9k9X.jpg"
        this.problemImg = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')
        this.errorMsg = page.locator('[data-test="error"]')

    }
async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }


    get errorMessage(){
        return this.errorMsg;
    }
}