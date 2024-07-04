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
    await page.goto('/');
});

test.describe('Verify data of the Timesheets Submodule within General Page', () => {
    test('dashboard_100 Employee - Timesheets', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualtimesheets = await dashboard.timesheetDataCounter("Employee");
        // await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const employeeDashboard = new employeeDashboardPage(page);
        const dashtimesheets = await employeeDashboard.timesheetDataCounter();
        expect (dashtimesheets).toStrictEqual(actualtimesheets);
    })
    test('dashboard_100 Employee - Check-Ins', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualTimesheets = await dashboard.checkInDataCounter("Employee");
        // await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const employeeDashboard = new employeeDashboardPage(page);
        const dashTimesheets = await employeeDashboard.check_inDataCounter();
        expect (dashTimesheets).toStrictEqual(actualTimesheets);
    })
})