const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const otpError = require(`../errorMessages/otpErrors.json`);
const { loginPage } = require('../pom/login.po.js');
const { forgotPassPage } = require('../pom/forgotPass.po.js');
const { registerPage } = require('../pom/register.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const login = new loginPage(page);
    // await login.forgotPass();
    await login.registerNow();
});

test.describe('Verify Invalid OTP', () => {
    test('Login_012 Missmatched Password', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.validCredential.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("000000")
        await forgot.passwordWrite(loginData.validCredential.password)
        await forgot.confirmPasswordWrite(loginData.mismatchedCredential.password)
        await forgot.resetPass()
        await forgot.select(otpError.invalid)
    })
    test('Login_011 OTP cannot be empty', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.validCredential.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite('')
        await forgot.passwordWrite(loginData.validCredential.password)
        await forgot.confirmPasswordWrite(loginData.validCredential.password)
        await forgot.resetPass()
        await forgot.select(otpError.nonEmpty2)
    })
    test('Register test', async ({ page }) => {
        const register = new registerPage(page);
        await register.countrySelect("Barbados");
    })
    test('Register tests', async ({ page }) => {
        const register = new registerPage(page);
        for (let i = 1; i <= 248; i++) {
            await register.countrySelectAll(String(i));
        }
    })
    test.only('Check for Neha', async ({ page }) => {
        const register = new registerPage(page);
        await register.fillCompanyDetails("Neha Company", "company@neha.com", "1234567890", "Neha Street", "Neha Suite", "Neha City", "Neha State", "123456", "Nepal");
        await register.clickNextButton();
        await register.clickRegisterButton();
    })
})
