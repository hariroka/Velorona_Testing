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

test.describe('Verify Reset Password Successful Page Components', () => {
    test('Login_014 Back to login Button', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("000000")
        await forgot.passwordWrite(loginData.valid.user.newPassword)
        await forgot.confirmPasswordWrite(loginData.valid.user.newPassword)
        await forgot.resetPass()
        await forgot.select("Password has been reset successfully!")
        await forgot.back()
        await forgot.select("User Login")
    })
})
