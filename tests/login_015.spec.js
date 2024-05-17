const { test, expect } = require('@playwright/test');

const data = require(`../fixtures/fixture.json`);
const { loginPage } = require('../pom/login.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify OTP Page', () => {
    test('Login_017', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(data.validCredential.email, data.validCredential.password); 
        const selectMessage = 'OTP has been sent to your email';
        await login.select(selectMessage);
    })
})
