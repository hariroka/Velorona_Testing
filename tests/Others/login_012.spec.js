const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const emailError = require(`../../errorMessages/emailErrors.json`);
const passError = require(`../../errorMessages/passErrors.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');
const { forgotPassPage } = require('../../pom/forgotPass.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
    const login = new loginPage(page);
    await login.forgotPass();
});

test.describe('Verify Password criteria and matching', () => {
    test('Login_012 Password missmatch', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("000000")
        await forgot.passwordWrite(loginData.valid.user.password)
        await forgot.confirmPasswordWrite(loginData.invalid.password)
        await forgot.resetPass()
        await forgot.select(passError.missmatch)
    })
    test('Login_012 Criteria not fulfilled', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite('')
        await forgot.passwordWrite(loginData.invalid.password)
        await forgot.confirmPasswordWrite(loginData.invalid.password)
        await forgot.resetPass()
        await forgot.isPasswordInputRed()
    })
})
