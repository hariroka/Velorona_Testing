const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const { loginPage } = require('../pom/login.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify failed login with Mismatched credentials/ unregistered data', () => {
    test('Login_005', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.mismatchedCredential.email, loginData.mismatchedCredential.password); 
        await login.select('Invalid Credentials');
    })
})
