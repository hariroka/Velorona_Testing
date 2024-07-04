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
    await page.goto('/');
});


test.describe('dashboard_001 Verify Dashboard Page', () => {
    test('dashboard_001 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("You are a company admin");
    })
})

test.describe('dashboard_040 Verify Dashboard Page', () => {
    test('dashboard_040 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("You are a payroll admin");
    })
})

test.describe('dashboard_003 Check Expand Button and Shrink Button', () => {
    test('dashboard_003 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.expand);
        await page.waitForSelector(`//li[@class='MuiListSubheader-root css-1oe2cyz']`);
        await page.waitForTimeout(2000);
        await page.click(dashboard.shrink);
        await page.waitForTimeout(2000);
    })
})

test.describe('dashboard_042 Check Expand Button and Shrink Button', () => {
    test('dashboard_042 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.expand);
        await page.waitForSelector(`//li[@class='MuiListSubheader-root css-1oe2cyz']`);
        await page.waitForTimeout(2000);
        await page.click(dashboard.shrink);
        await page.waitForTimeout(2000);
    })
})

test.describe('dashboard_005 Verify User Page', () => {
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

test.describe('dashboard_044 Verify User Page', () => {
    test('dashboard_044 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardUsers);
        await login.select("Users (By Status)");
        await page.waitForTimeout(2000);
    })
})

test.describe('dashboard_010 Verify data of the Clients Submodule within General Page', () => {
    test('dashboard_010 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualClients = await dashboard.clientDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashClients = await adminDashboard.clientsCounter();
        expect (dashClients).toStrictEqual(actualClients);
    })
})

test.describe('dashboard_049 Verify data of the Clients Submodule within General Page', () => {
    test('dashboard_049 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualClients = await dashboard.clientDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashClients = await adminDashboard.clientsCounter();
        expect (dashClients).toStrictEqual(actualClients);
    })
})

test.describe('dashboard_012 Verify data of the Projects Submodule within General Page', () => {
    test('dashboard_012 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualProjects = await dashboard.projectsDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashProjects = await adminDashboard.projectsCounter();
        expect (dashProjects).toStrictEqual(actualProjects);
    })
})

test.describe('dashboard_051 Verify data of the Projects Submodule within General Page', () => {
    test('dashboard_051 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualProjects = await dashboard.projectsDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashProjects = await adminDashboard.projectsCounter();
        expect (dashProjects).toStrictEqual(actualProjects);
    })
})

test.describe('dashboard_018 Verify data of the Timesheets Submodule within General Page', () => {
    test('dashboard_018 Company Admin - Timesheets', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualtimesheets = await dashboard.timesheetDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashtimesheets = await adminDashboard.timesheetDataCounter();
        expect (dashtimesheets).toStrictEqual(actualtimesheets);
    })
})

test.describe('dashboard_057 Verify data of the Timesheets Submodule within General Page', () => {
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
})

test.describe('dashboard_018 Verify data of the Check-Ins Submodule within General Page', () => {
    test('dashboard_018 Company Admin - Check-Ins', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
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

test.describe('dashboard_057 Verify data of the Check-Ins Submodule within General Page', () => {
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

test.describe('dashboard_020 Verify data of the Schedules Submodule within General Page', () => {
    test('dashboard_020 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualSchedules = await dashboard.schedulesDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashSchedules = await adminDashboard.schedulesCounter();
        expect (dashSchedules).toStrictEqual(actualSchedules);
    })
})

test.describe('dashboard_059 Verify data of the Schedules Submodule within General Page', () => {
    test('dashboard_059 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualSchedules = await dashboard.schedulesDataCounter("Payroll Admin");
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const adminDashboard = new adminDashboardPage(page);
        const dashSchedules = await adminDashboard.schedulesCounter();
        expect (dashSchedules).toStrictEqual(actualSchedules);
    })
})

test.describe('dashboard_022 Verify data of the Invoices Submodule within General Page', () => {
    test('dashboard_022 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualInvoices = await dashboard.invoicesDataCounter();
        // await page.click(dashboard.menuDashboard);
        // await page.click(dashboard.subMenuDashboardGeneral);
        await page.goto('/');
        await login.select("Welcome");
        const adminDashboard = new adminDashboardPage(page);
        const dashInvoices = await adminDashboard.invoicesCounter();
        expect (dashInvoices).toStrictEqual(actualInvoices);
    })
})

test.describe('dashboard_061 Verify data of the Invoices Submodule within General Page', () => {
    test('dashboard_061 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualInvoices = await dashboard.invoicesDataCounter();
        // await page.click(dashboard.menuDashboard);
        // await page.click(dashboard.subMenuDashboardGeneral);
        await page.goto('/');
        await login.select("Welcome");
        const adminDashboard = new adminDashboardPage(page);
        const dashInvoices = await adminDashboard.invoicesCounter();
        expect (dashInvoices).toStrictEqual(actualInvoices);
    })
})

test.describe('dashboard_026 Verify data of the User (By Status) Submodule within User Page', () => {
    test('dashboard_026 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualUserStatus = await dashboard.userStatusDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardUsers);
        const adminDashboard = new adminDashboardPage(page);
        const dashUserStatus = await adminDashboard.userStatusCounter();
        expect (dashUserStatus).toStrictEqual(actualUserStatus);
    })
})

test.describe('dashboard_065 Verify data of the User (By Status) Submodule within User Page', () => {
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

test.describe('dashboard_028 Verify data of the User (By Role) Submodule within User Page', () => {
    test('dashboard_028 Company Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.companySwitchButton);
        await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualUserRoles = await dashboard.userRolesDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardUsers);
        const adminDashboard = new adminDashboardPage(page);
        const dashUserRoles = await adminDashboard.userRolesCounter();
        expect (dashUserRoles).toStrictEqual(actualUserRoles);
    })
})

test.describe('dashboard_067 Verify data of the User (By Role) Submodule within User Page', () => {
    test('dashboard_067 Payroll Admin', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.payroll.email, loginData.valid.payroll.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualUserRoles = await dashboard.userRolesDataCounter();
        await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardUsers);
        const adminDashboard = new adminDashboardPage(page);
        const dashUserRoles = await adminDashboard.userRolesCounter();
        expect (dashUserRoles).toStrictEqual(actualUserRoles);
    })
})

test.describe('dashboard_079 Verify Dashboard Page', () => {
    test('dashboard_079 Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("You are an approver");
    })
})

test.describe('dashboard_093 Verify Dashboard Page', () => {
    test('dashboard_093 Employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("You are an employee");
    })
})

test.describe('dashboard_081 Check Expand Button and Shrink Button', () => {
    test('dashboard_081 Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.expand);
        await page.waitForSelector(`//li[@class='MuiListSubheader-root css-1oe2cyz']`);
        await page.waitForTimeout(2000);
        await page.click(dashboard.shrink);
        await page.waitForTimeout(2000);
    })
})

test.describe('dashboard_095 Check Expand Button and Shrink Button', () => {
    test('dashboard_095 Employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await page.click(dashboard.expand);
        await page.waitForSelector(`//li[@class='MuiListSubheader-root css-1oe2cyz']`);
        await page.waitForTimeout(2000);
        await page.click(dashboard.shrink);
        await page.waitForTimeout(2000);
    })
})

test.describe('dashboard_086 Verify data of the Timesheets Submodule within General Page', () => {
    test('dashboard_086 Approver - Timesheets', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualtimesheets = await dashboard.timesheetDataCounter("Approver");
        // await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const employeeDashboard = new employeeDashboardPage(page);
        const dashtimesheets = await employeeDashboard.timesheetDataCounter();
        expect (dashtimesheets).toStrictEqual(actualtimesheets);
    })
})

test.describe('dashboard_100 Verify data of the Timesheets Submodule within General Page', () => {
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
})

test.describe('dashboard_086 Verify data of the Check-Ins Submodule within General Page', () => {
    test('dashboard_086 Approver - Check-Ins', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        // await page.click(dashboard.companySwitchButton);
        // await page.click(dashboard.nextCompany);
        await login.select("Welcome");
        const actualTimesheets = await dashboard.checkInDataCounter("Approver");
        // await page.click(dashboard.menuDashboard);
        await page.click(dashboard.subMenuDashboardGeneral);
        await login.select("General");
        const employeeDashboard = new employeeDashboardPage(page);
        const dashTimesheets = await employeeDashboard.check_inDataCounter();
        expect (dashTimesheets).toStrictEqual(actualTimesheets);
    })
})

test.describe('dashboard_100 Verify data of the Check-Ins Submodule within General Page', () => {
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

test.describe('dashboard_088 Verify Google Play Store Button', () => {
    test('dashboard_088 Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.appDownload("Play");
        expect(page.url()).toBe('https://play.google.com/store/apps/details?id=com.velorona.app'); 
    })
})

test.describe('dashboard_102 Verify Google Play Store Button', () => {
    test('dashboard_102 Employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.appDownload("Play");
        expect(page.url()).toBe('https://play.google.com/store/apps/details?id=com.velorona.app'); 
    })
})

test.describe('dashboard_089 Verify Apple App Store Button', () => {
    test('dashboard_089 Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.appDownload("App");
        expect(page.url()).toBe('https://apps.apple.com/us/app/velorona/id6470820167'); 
    })
})

test.describe('dashboard_103 Verify Apple App Store Button', () => {
    test('dashboard_103 Employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.appDownload("App");
        expect(page.url()).toBe('https://apps.apple.com/us/app/velorona/id6470820167'); 
    })
})

test.describe('dashboard_092 Verify View All Button of the Latest Timesheets Submodule within General Page', () => {
    test('dashboard_092 Approver', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.approver.email, loginData.valid.approver.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.clickViewAll;
    })
})

test.describe('dashboard_106 Verify View All Button of the Latest Timesheets Submodule within General Page', () => {
    test('dashboard_106 Employee', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.employee.email, loginData.valid.employee.password);
        await login.select("Welcome");
        const employeeDashboard = new employeeDashboardPage(page);
        await employeeDashboard.clickViewAll;
    })
})