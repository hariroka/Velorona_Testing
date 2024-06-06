const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify Non empty OTP', () => {
    test('Login_017', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.user.email, loginData.valid.user.password); 
        const otpPass = ''
        await login.otpWrite(otpPass);
        await login.select(otpError.nonEmpty);
    })
})
