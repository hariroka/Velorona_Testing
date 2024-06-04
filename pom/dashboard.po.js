const requirement = require('playwright/test');

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    this.user1= `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-zf0vz6']`;
    this.user2 = `(//div[@class='MuiAvatar-root MuiAvatar-circular css-1s5tk1l'])[1]`;
    this.logOutButton = `//li[normalize-space()='Logout']`;
    this.backToLogin = `//button[@id=':r3:']`;
    this.expand = `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1rm9whg']//*[name()='svg']`
    this.menuDashboard = `//span[normalize-space()='Dashboard']`
    this.subMenuDashboardGeneral = `//span[normalize-space()='General']`
    this.subMenuDashboardUsers = `//span[normalize-space()='Users']`
    this.menuClients = `//span[normalize-space()='clients']`
    this.menuProjects = `//span[normalize-space()='projects']`
    this.menuUsers = `//span[normalize-space()='users']`
    this.menuTimesheets = `//span[normalize-space()='Timesheets']`
    this.menuCheckIn = `//span[normalize-space()='Check-In Check-Out']`
    this.menuSchedules = `//span[normalize-space()='schedules']`
    this.menuExpenses = `//span[normalize-space()='expenses']`
    this.menuInvoices = `//span[normalize-space()='invoices']`
    this.subMenuInvoicesGeneral = `//span[normalize-space()='General']`
    this.subMenuInvoicesClient = `//span[normalize-space()='Client Based']`
    this.subMenuInvoicesEmployee = `//span[normalize-space()='Employee Based']`
    this.subMenuInvoicesAutomatic = `//span[normalize-space()='Automatic']`
    this.menuSubscriptions = `//span[normalize-space()='subscription']`
    this.menuSubscriptionsChoosePlan = `//span[normalize-space()='Choose Plan']`
    this.menuSubscriptionsPayment = `//span[normalize-space()='My Payments']`
    this.menuSettings = `//span[normalize-space()='settings']`
    this.menuReports = `//span[normalize-space()='reports']`
    this.subMenuReportsClient = `//span[normalize-space()='Client']`
    this.subMenuReportsProjects = `//span[normalize-space()='Projects']`
    this.subMenuReportsInvoices = `//span[normalize-space()='Invoices']`
    this.subMenuReportsUsers = `//span[normalize-space()='Users']`
    this.subMenuReportsUCP = `//span[normalize-space()='Users-Clients-Projects']`
    this.subMenuReportsUP = `//span[normalize-space()='User-Payrates']`
  }
  async logOut1() {
    await this.page.click(this.user1);
    await this.page.click(this.logOutButton);
  }
  async logOut2() {
    await this.page.click(this.user2);
    await this.page.click(this.logOutButton);
  }
  async goToLogin() {
    await this.page.click(this.backToLogin);
  }
  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
  }
  async checkMenuItems() { 
    await this.page.click(this.menuClients);
    await this.select("All Clients")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuProjects);
    await this.select("All Projects")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuUsers);
    await this.select("All Users")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuTimesheets);
    await this.select("All Timesheets")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuCheckIn);
    await this.select("All Check-In Check-Out")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuSchedules);
    await this.select("All Schedules")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuExpenses);
    await this.select("All Expenses")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesGeneral);
    await this.page.waitForSelector(`//h4[normalize-space()='All manual Invoices']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesClient);
    await this.page.waitForSelector(`//h4[normalize-space()='All client Invoices']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesEmployee);
    await this.page.waitForSelector(`//h4[normalize-space()='All employee Invoices']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesAutomatic);
    await this.page.waitForSelector(`//h4[normalize-space()='All automatic Invoices']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuSubscriptions);
    await this.page.click(this.menuSubscriptionsChoosePlan);
    await this.page.waitForSelector(`//h4[normalize-space()='basic']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuSubscriptions);
    await this.page.click(this.menuSubscriptionsPayment);
    await this.select("All Payments")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuSettings);
    await this.select("Company Settings")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuReports);
    await this.page.click(this.subMenuReportsClient);
    await this.select("Client Report")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuReports);
    await this.page.click(this.subMenuReportsProjects);
    await this.select("Projects Report")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuReports);
    await this.page.click(this.subMenuReportsInvoices);
    await this.select("Invoices Report")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuReports);
    await this.page.click(this.subMenuReportsUsers);
    await this.select("User Report")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuReports);
    await this.page.click(this.subMenuReportsUCP);
    await this.select("User Client Project Report")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuReports);
    await this.page.click(this.subMenuReportsUP);
    await this.select("User Payrate Report")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuDashboard);
    await this.page.click(this.subMenuDashboardGeneral);
    await this.select("Welcome")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.subMenuDashboardUsers);
    await this.select("Users (By Status)")
    await this.page.waitForTimeout(1000);
    await this.page.click(this.expand);
  }
}