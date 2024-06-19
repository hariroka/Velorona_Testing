const { test, expect } = require('@playwright/test');

const data = require(`../../fixtures/fixture.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
});

test.describe('Verify Invalid OTP', () => {
    test('Login_018', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(data.valid.user.email, data.valid.user.password); 
        const otpPass = '123456'
        await login.otpWrite(otpPass);
        await login.select(otpError.invalid);
    })
})
