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

test.describe('Verify data of the Timesheets Submodule within General Page', () => {
    test('dashboard_057 Payroll Admin - Timesheets', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualtimesheets = await dashboard.timesheetDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashtimesheets = await adminDashboard.timesheetDataCounter();
        expect (dashtimesheets).toStrictEqual(actualtimesheets);
    })
    test('dashboard_010 Payroll Admin - Check-Ins', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualTimesheets = await dashboard.checkInDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashTimesheets = await adminDashboard.check_inDataCounter();
        expect (dashTimesheets).toStrictEqual(actualTimesheets);
    })
})