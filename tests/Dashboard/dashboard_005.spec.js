const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const emailError = require(`../../errorMessages/emailErrors.json`);
const passError = require(`../../errorMessages/passErrors.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');
const { forgotPassPage } = require('../../pom/forgotPass.po.js');
const { registerPage } = require('../../pom/register.po.js');
const { dashboardPage } = require('../../pom/dashboard.po.js');
const { employeeDashboardPage } = require('../../pom/employeeDashboard.po.js');
const { adminDashboardPage } = require('../../pom/adminDashboard.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('https://app-staging.velorona.net/');
});

test.describe('Verify User Page', () => {
    test('dashboard_005 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardUsers);
        await login.select("Users (By Status)");
        await page.waitForTimeout(2000);
    })
})