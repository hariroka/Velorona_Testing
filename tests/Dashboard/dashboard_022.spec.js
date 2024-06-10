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
    await page.goto('https://app-staging.velorona.net/');
});

test.describe('Verify data of the Invoices Submodule within General Page', () => {
    test('dashboard_022 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualInvoices = await dashboard.invoicesDataCounter();
        await page.click(dashboard.menuClients);
        await login.select("All Clients");
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashInvoices = await adminDashboard.invoicesCounter();
        expect (dashInvoices).toStrictEqual(actualInvoices);
    })
})