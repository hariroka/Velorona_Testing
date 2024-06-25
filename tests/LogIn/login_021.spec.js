const { test, expect } = require('@playwright/test');

const data = require(`../../fixtures/fixture.json`);
const { loginPage } = require('../../pom/login.po.js');
const { dashboardPage } = require('../../pom/dashboard.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
});

test.describe(`Verify 'No Roles Found' page for new user`, () => {
    test('Login_021 No Roles Found', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(data.newUser.email, data.newUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
    })
    test ('Login_021 Go to Login', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(data.newUser.email, data.newUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
        const dashboard = new dashboardPage(page);
        await dashboard.goToLogin();
        await login.select("User Login");
    })
})
