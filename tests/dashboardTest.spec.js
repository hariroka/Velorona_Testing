const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const otpError = require(`../errorMessages/otpErrors.json`);
const { loginPage } = require('../pom/login.po.js');
const { forgotPassPage } = require('../pom/forgotPass.po.js');
const { registerPage } = require('../pom/register.po.js');
const { dashboardPage } = require('../pom/dashboard.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const login = new loginPage(page);
    await login.login(loginData.validCredential.email, loginData.validCredential.password);
    const otpPass = '000000'
    await login.otpWrite(otpPass);
    await login.select("Welcome");
});

test.describe('Data Collection', () => {
    test.only('Check Dashboard Open Timesheets', async ({ page }) => {
        const dashboard = new dashboardPage(page);
        await dashboard.timesheetOpenCounter();
        await dashboard.select("ABC");
    })
})
