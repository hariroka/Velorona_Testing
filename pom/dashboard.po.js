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
    this.timesheetTotal = `//p[@class='MuiTablePagination-displayedRows css-ejwsqf']`
    this.allTab = `//button[normalize-space()='All']`
    this.openTab = `//button[normalize-space()='Open']`
    this.submittedTab = `//button[normalize-space()='Submitted']`
    this.approvedTab = `//button[normalize-space()='Approved']`
    this.rejectedTab = `//button[normalize-space()='Rejected']`
    this.archivedTab = `//button[normalize-space()='Archived']`
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
  async getPageHeight() {
    return await this.page.evaluate(() => document.documentElement.scrollHeight);
  }
  async count(string) {
    if (string === "0") {
      return string;
    }
    const parts = string.split(" ");
    return parts[parts.length - 1];
  }
  
  
  async timesheetDataCounter() {
    await this.page.click(this.menuTimesheets);
    let totalCount, openCount, submittedCount, approvedCount, rejectedCount, archivedCount;

    await this.page.click(this.allTab);
    await this.select("All Timesheets");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount = "0";
      totalCount = await this.count(totalCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      totalCount = await this.page.locator(this.timesheetTotal).textContent();
      totalCount = await this.count(totalCount);
    }

    await this.page.click(this.openTab);
    await this.select("All Timesheets");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      openCount = "0";
      openCount = await this.count(openCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      openCount = await this.page.locator(this.timesheetTotal).textContent();
      openCount = await this.count(openCount);
    }

    await this.page.click(this.submittedTab);
    await this.select("All Timesheets");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      submittedCount = "0";
      submittedCount = await this.count(submittedCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      submittedCount = await this.page.locator(this.timesheetTotal).textContent();
      submittedCount = await this.count(submittedCount);
    }

    await this.page.click(this.approvedTab);
    await this.select("All Timesheets");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      approvedCount = "0";  
      approvedCount = await this.count(approvedCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      approvedCount = await this.page.locator(this.timesheetTotal).textContent();
      approvedCount = await this.count(approvedCount);
    }

    await this.page.click(this.rejectedTab);
    await this.select("All Timesheets");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      rejectedCount = "0";
      rejectedCount = await this.count(rejectedCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      rejectedCount = await this.page.locator(this.timesheetTotal).textContent();
      rejectedCount = await this.count(rejectedCount);
    }

    await this.page.click(this.archivedTab);
    await this.select("All Timesheets");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      archivedCount = "0";
      archivedCount = await this.count(archivedCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      archivedCount = await this.page.locator(this.timesheetTotal).textContent();
      archivedCount = await this.count(archivedCount);
    }

    const result = {
      total: totalCount,
      open: openCount,
      submitted: submittedCount,
      approved: approvedCount,
      rejected: rejectedCount,
      archived: archivedCount
    }
    return result;
  }
}