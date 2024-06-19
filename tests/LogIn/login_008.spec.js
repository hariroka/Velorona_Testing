const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const emailError = require(`../../errorMessages/emailErrors.json`);
const passError = require(`../../errorMessages/passErrors.json`);
const { loginPage } = require('../../pom/login.po.js');
const { forgotPassPage } = require('../../pom/forgotPass.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
    const login = new loginPage(page);
    await login.forgotPass();
});

test.describe('Verify email field is compulsory', () => {
    test('Login_008', async ({ page }) => {
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword('', emailError.required);
    })
})
