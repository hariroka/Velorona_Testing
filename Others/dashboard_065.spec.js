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
const { log } = require('console');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
});

test.describe('Verify data of the User (By Status) Submodule within User Page', () => {
    test('dashboard_065 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualUserStatus = await dashboard.userStatusDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardUsers);
        const adminDashboard = new adminDashboardPage(page);
        const dashUserStatus = await adminDashboard.userStatusCounter();
        expect (dashUserStatus).toStrictEqual(actualUserStatus);
    })
})