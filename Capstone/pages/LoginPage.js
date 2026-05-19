const { expect } = require('@playwright/test');

class LoginPage {

  constructor(page) {

    this.page = page;

    this.usernameInput = page.locator('input[name="username"]');

    this.passwordInput = page.locator('input[name="password"]');

    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });

    this.credentialText = page.locator('.orangehrm-demo-credentials p');
  }

  async gotoLoginPage() {

    await this.page.goto('/');

    await this.usernameInput.waitFor({
      state: 'visible'
    });
  }

  async getCredentials() {

    const texts = await this.credentialText.allTextContents();

    const username = texts[0].replace('Username :', '').trim();

    const password = texts[1].replace('Password :', '').trim();

    return { username, password };
  }

  async login() {

    const credentials = await this.getCredentials();

    await this.usernameInput.fill(credentials.username);

    await this.passwordInput.fill(credentials.password);

    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {

    await expect(this.dashboardHeader).toBeVisible({
      timeout: 20000
    });
  }
}

module.exports = { LoginPage };