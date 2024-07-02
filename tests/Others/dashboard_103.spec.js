const { test, expect, page } = require('@playwright/test');

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

test.describe('Verify Apple App Store Button', () => {
    test('dashboard_103 Employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.appDownload("App");
        expect(page.url()).toBe('https://apps.apple.com/us/app/velorona/id6470820167'); 
    })
})