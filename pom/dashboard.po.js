const requirement = require('playwright/test');

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    this.user1= `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-zf0vz6']`;
    this.user2 = `(//div[@class='MuiAvatar-root MuiAvatar-circular css-1s5tk1l'])[1]`;
    this.logOutButton = `//li[normalize-space()='Logout']`;
    this.backToLogin = `//button[@id=':r3:']`;
    this.expand = `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1rm9whg']//*[name()='svg']`
    this.shrink = `//button[@type='button']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]`
    this.menuDashboard = `//span[normalize-space()='Dashboard']`
    this.subMenuDashboardGeneral = `//span[normalize-space()='General']`
    this.subMenuDashboardUsers = `//span[normalize-space()='Users']`
    this.menuClients = `//span[normalize-space()='clients']`
    this.menuProjects = `//span[normalize-space()='projects']`
    this.menuUsers = `//span[normalize-space()='users']`
    this.menuTimesheets = `//span[normalize-space()='Timesheets']`
    this.menuCheckIn = `//span[normalize-space()='Check-In Check-Out']`
    this.menuSchedules = `//span[normalize-space()='Schedules']`
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
    this.activeTab = `//button[normalize-space()='Active']`
    this.inactiveTab = `//button[normalize-space()='Inactive']`
    this.submittedTab = `//button[normalize-space()='Submitted']`
    this.approvedTab = `//button[normalize-space()='Approved']`
    this.rejectedTab = `//button[normalize-space()='Rejected']`
    this.draftTab = `//button[normalize-space()='Draft']`
    this.pendingTab = `//button[normalize-space()='Pending']`
    this.overdueTab = `//button[normalize-space()='Overdue']`
    this.paidTab = `//button[normalize-space()='Paid']`
    this.incompleteTab = `//button[normalize-space()='Incomplete']`
    this.archivedTab = `//button[normalize-space()='Archived']`
    this.companySwitchButton = `//div[@class='MuiBox-root css-1mocby8']`
    // this.nextCompany = `//body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[2]/li[1]/div[2]`
    this.nextCompany = `//span[normalize-space()='ORIENT']`
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
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesClient);
    await this.page.waitForSelector(`//h4[normalize-space()='All client Based Invoices']`)
    await this.page.waitForTimeout(1000);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesEmployee);
    await this.page.waitForSelector(`//h4[normalize-space()='All employee Based Invoices']`)
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
  


  async clientDataCounter() {
    await this.page.click(this.menuClients);
    let totalCount, activeCount, inactiveCount, archivedCount;

    await this.page.click(this.allTab);
    await this.select("All Clients");
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

    await this.page.click(this.activeTab);
    await this.select("All Clients");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      activeCount = "0";
      activeCount = await this.count(activeCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      activeCount = await this.page.locator(this.timesheetTotal).textContent();
      activeCount = await this.count(activeCount);
    }

    await this.page.click(this.inactiveTab);
    await this.select("All Clients");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      inactiveCount = "0";
      inactiveCount = await this.count(inactiveCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      inactiveCount = await this.page.locator(this.timesheetTotal).textContent();
      inactiveCount = await this.count(inactiveCount);
    }

    await this.page.click(this.archivedTab);
    await this.select("All Clients");
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
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }


  async projectsDataCounter() {
    await this.page.click(this.menuProjects);
    let totalCount, activeCount, inactiveCount, archivedCount;

    await this.page.click(this.allTab);
    await this.select("All Projects");
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

    await this.page.click(this.activeTab);
    await this.select("All Projects");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      activeCount = "0";
      activeCount = await this.count(activeCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      activeCount = await this.page.locator(this.timesheetTotal).textContent();
      activeCount = await this.count(activeCount);
    }

    await this.page.click(this.inactiveTab);
    await this.select("All Projects");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      inactiveCount = "0";
      inactiveCount = await this.count(inactiveCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      inactiveCount = await this.page.locator(this.timesheetTotal).textContent();
      inactiveCount = await this.count(inactiveCount);
    }

    await this.page.click(this.archivedTab);
    await this.select("All Projects");
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
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
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


  async checkInDataCounter() {
    await this.page.click(this.menuCheckIn);
    let totalCount, openCount, submittedCount, approvedCount, rejectedCount, archivedCount;

    await this.page.click(this.allTab);
    await this.select("All Check-In Check-Out");
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
    await this.select("All Check-In Check-Out");
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
    await this.select("All Check-In Check-Out");
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
    await this.select("All Check-In Check-Out");
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
    await this.select("All Check-In Check-Out");
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
    await this.select("All Check-In Check-Out");
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

  async schedulesDataCounter() {
    await this.page.click(this.menuSchedules);
    let totalCount, activeCount, inactiveCount, archivedCount;

    await this.page.click(this.allTab);
    await this.select("All Schedules");
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

    await this.page.click(this.activeTab);
    await this.select("All Schedules");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      activeCount = "0";
      activeCount = await this.count(activeCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      activeCount = await this.page.locator(this.timesheetTotal).textContent();
      activeCount = await this.count(activeCount);
    }

    await this.page.click(this.inactiveTab);
    await this.select("All Schedules");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      inactiveCount = "0";
      inactiveCount = await this.count(inactiveCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      inactiveCount = await this.page.locator(this.timesheetTotal).textContent();
      inactiveCount = await this.count(inactiveCount);
    }

    await this.page.click(this.archivedTab);
    await this.select("All Schedules");
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
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }

  async invoicesDataCounter() {
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesGeneral);
    let totalCount, totalCount1, totalCount2, totalCount3, totalCount4, draftCount, pendingCount, overdueCount, paidCount, incompleteCount, archivedCount;

    await this.page.click(this.allTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount1 = "0";
      totalCount1 = await this.count(totalCount1);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      totalCount1 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount1 = await this.count(totalCount1);
    }
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesClient);

    await this.page.click(this.allTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All client Based Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount2 = "0";
      totalCount2 = await this.count(totalCount2);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      totalCount2 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount2 = await this.count(totalCount2);
    }

    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesEmployee);

    await this.page.click(this.allTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All employee Based Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount3 = "0";
      totalCount3 = await this.count(totalCount3);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      totalCount3 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount3 = await this.count(totalCount3);
    }

    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesAutomatic);

    await this.page.click(this.allTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All automatic Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount4 = "0";
      totalCount4 = await this.count(totalCount4);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      totalCount4 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount4 = await this.count(totalCount4);
    }

    totalCount = parseInt(totalCount1) + parseInt(totalCount2) + parseInt(totalCount3) + parseInt(totalCount4);
    totalCount = totalCount.toString();

    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesGeneral);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)

    await this.page.click(this.draftTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      draftCount = "0";
      draftCount = await this.count(draftCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      draftCount = await this.page.locator(this.timesheetTotal).textContent();
      draftCount = await this.count(draftCount);
    }

    await this.page.click(this.pendingTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      pendingCount = "0";
      pendingCount = await this.count(pendingCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      pendingCount = await this.page.locator(this.timesheetTotal).textContent();
      pendingCount = await this.count(pendingCount);
    }

    await this.page.click(this.overdueTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      overdueCount = "0";
      overdueCount = await this.count(overdueCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      overdueCount = await this.page.locator(this.timesheetTotal).textContent();
      overdueCount = await this.count(overdueCount);
    }

    await this.page.click(this.paidTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      paidCount = "0";
      paidCount = await this.count(paidCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      paidCount = await this.page.locator(this.timesheetTotal).textContent();
      paidCount = await this.count(paidCount);
    }

    await this.page.click(this.incompleteTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      incompleteCount = "0";
      incompleteCount = await this.count(incompleteCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      incompleteCount = await this.page.locator(this.timesheetTotal).textContent();
      incompleteCount = await this.count(incompleteCount);
    }

    await this.page.click(this.archivedTab);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
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
      draft: draftCount,
      pending: pendingCount,
      overdue: overdueCount,
      paid: paidCount,
      incomplete: incompleteCount,
      archived: archivedCount
    }
    return result;
  }
}