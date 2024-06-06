const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const emailError = require(`../../errorMessages/emailErrors.json`);
const passError = require(`../../errorMessages/passErrors.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');
const { forgotPassPage } = require('../../pom/forgotPass.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const login = new loginPage(page);
    await login.forgotPass();
});

test.describe('Verify Invalid OTP', () => {
    test('Login_011 Invalid OTP', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("123456")
        await forgot.passwordWrite(loginData.valid.user.password)
        await forgot.confirmPasswordWrite(loginData.valid.user.password)
        await forgot.resetPass()
        await forgot.select(otpError.invalid)
    })
    test('Login_011 OTP cannot be empty', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite('')
        await forgot.passwordWrite(loginData.valid.user.password)
        await forgot.confirmPasswordWrite(loginData.valid.user.password)
        await forgot.resetPass()
        await forgot.select(otpError.nonEmpty2)
    })
})
