const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const { loginPage } = require('../pom/login.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify Login Form fields if they are optional', () => {
    test('Login_004 Email and password both empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.login('',''); 
        await login.select(emailError.required);
        await login.select(passError.required);
    })
    test('Login_004 Email only empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.login('', loginData.validCredential.password); 
        await login.select(emailError.required);
    })
    test('Login_004 password only empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.validCredential.email,''); 
        await login.select(passError.required);
    })
    test('Login_004 Email must be valid', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.invalidCredential.email,loginData.validCredential.password); 
        await login.select(emailError.invalid);
    })
})
