const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const { loginPage } = require('../pom/login.po.js');
const { forgotPassPage } = require('../pom/forgotPass.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify Forgot Password Page', () => {
    test('Login_006', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
    })
    test('Login_006 Return to Sign in', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.returnToSignIn();
    })
})
