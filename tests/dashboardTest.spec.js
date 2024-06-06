const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const otpError = require(`../errorMessages/otpErrors.json`);
const { loginPage } = require('../pom/login.po.js');
const { forgotPassPage } = require('../pom/forgotPass.po.js');
const { registerPage } = require('../pom/register.po.js');
const { dashboardPage } = require('../pom/dashboard.po.js');
const { employeeDashboardPage } = require('../pom/employeeDashboard.po.js');
const { adminDashboardPage } = require('../pom/adminDashboard.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('https://app-staging.velorona.net/');
});

test.describe('Data Collection and viewinng of Dashboard', () => {
    test('Check Dashboard Timesheet data of Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const adminDashboard = new adminDashboardPage(page);
        console.log("Clients Data of Company Admin")
        console.log(await adminDashboard.clientsCounter());
        console.log("Projects Data of Company Admin")
        console.log(await adminDashboard.projectsCounter());
        console.log("Timesheet Data of Company Admin")
        console.log(await adminDashboard.timesheetDataCounter());
        console.log("Check-in Data of Company Admin")
        console.log(await adminDashboard.check_inDataCounter());
        console.log("Schedules Data of Company Admin")
        console.log(await adminDashboard.schedulesCounter());
        console.log("Invoices Data of Company Admin")
        console.log(await adminDashboard.invoicesCounter());
    })
    test('Check Dashboard Timesheet data of Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const adminDashboard = new adminDashboardPage(page);
        console.log("Clients Data of Payroll Admin")
        console.log(await adminDashboard.clientsCounter());
        console.log("Projects Data of Payroll Admin")
        console.log(await adminDashboard.projectsCounter());
        console.log("Timesheet Data of Payroll Admin")
        console.log(await adminDashboard.timesheetDataCounter());
        console.log("Check-in Data of Payroll Admin")
        console.log(await adminDashboard.check_inDataCounter());
        console.log("Schedules Data of Payroll Admin")
        console.log(await adminDashboard.schedulesCounter());
        console.log("Invoices Data of Payroll Admin")
        console.log(await adminDashboard.invoicesCounter());
    })
    test('Check Dashboard Timesheet data of Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        console.log("Timesheet Data of Approver")
        console.log(await employeeDashboard.timesheetDataCounter());
        console.log("Check-in Data of Approver")
        console.log(await employeeDashboard.check_inDataCounter());
    })
    test('Check Dashboard Timesheet data of employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        console.log("Timesheet Data of Employee")
        console.log(await employeeDashboard.timesheetDataCounter());
        console.log("Check-in Data of Employee")
        console.log(await employeeDashboard.check_inDataCounter());
    })
    test('Check if the user is able to click on the menu items', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        const actualTS = await dashboard.timesheetDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        const adminDashboard = new adminDashboardPage(page);
        const dashTs = await adminDashboard.timesheetDataCounter();
        expect(actualTS).toEqual(dashTs);
        // await dashboard.checkMenuItems();
        // await dashboard.select("All Clients");
    })
    test('Check and print clients data from dashboard page', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await page.waitForTimeout(2000);
        await login.select("Welcome");
        // const actualClients = await dashboard.clientDataCounter();
        // const actualProjects = await dashboard.projectsDataCounter();
        // const actualCheckIns = await dashboard.checkInDataCounter();
        // const actualSchedules = await dashboard.schedulesDataCounter();
        const actualInvoices = await dashboard.invoicesDataCounter();
        // console.log(actualClients, actualProjects);
        console.log(actualInvoices);
    })
})
