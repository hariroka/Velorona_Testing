const { test, expect } = require('@playwright/test');

const data = require(`../fixtures/fixture.json`);
const { loginPage } = require('../pom/login.po.js');
const { dashboardPage } = require('../pom/dashboard.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Verify optional OTP for Remember me enabled', () => {
    test('Login_020', async ({ page }) => {
        const login = new loginPage(page);
        await login.loginWithRememberMe(data.valid.user.email, data.valid.user.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await dashboard.logOut1();
        await login.select("User Login");
        await login.login(data.valid.user.email, data.valid.user.password);
        await login.select("Welcome");
    })
})
