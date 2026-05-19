const { test } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test.describe('OrangeHRM Login Tests', () => {

  test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login();

    await loginPage.verifySuccessfulLogin();
  });

});