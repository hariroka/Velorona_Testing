const { test, expect } = require('@playwright/test');

const data = require(`../fixtures/fixture.json`);
const { loginPage } = require('../pom/login.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify Successful Login', () => {
    test('Login_019', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(data.validCredential.email, data.validCredential.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        const selectMessage = 'Welcome';
        await login.select(selectMessage);
    })
})
