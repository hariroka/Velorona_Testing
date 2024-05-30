const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const { loginPage } = require('../pom/login.po.js');
const { forgotPassPage } = require('../pom/forgotPass.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const login = new loginPage(page);
    await login.forgotPass();
});

test.describe('Verify Change Password page', () => {
    test('Login_009 Title', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
    })
    test('Login_009 Return to Sign in', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.returnToSignIn();
    })
})
