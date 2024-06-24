const requirement = require('playwright/test');

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    this.user1= `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-zf0vz6']`;
    this.user2 = `(//div[@class='MuiAvatar-root MuiAvatar-circular css-1s5tk1l'])[1]`;
    this.logOutButton = `//li[normalize-space()='Logout']`;
    this.backToLogin = `//button[@id=':r2:']`;
    this.expand = `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-1rm9whg']//*[name()='svg']`;
    this.shrink = `//button[@type='button']//*[name()='svg']//*[name()='path' and contains(@fill,'currentCol')]`;
    this.menuDashboard = `//span[normalize-space()='Dashboard']`;
    this.subMenuDashboardGeneral = `//span[normalize-space()='General']`;
    this.subMenuDashboardUsers = `//span[normalize-space()='Users']`;
    this.menuClients = `//span[normalize-space()='clients']`;
    this.menuProjects = `//span[normalize-space()='projects']`;
    this.menuUsers = `//span[normalize-space()='users']`;
    this.menuTimesheets = `//span[normalize-space()='Timesheets']`;
    this.menuCheckIn = `//span[normalize-space()='Check-In Check-Out']`;
    this.menuSchedules = `//span[normalize-space()='schedules']`;
    this.menuSchedules1 = `//span[normalize-space()='Schedules']`;
    this.menuExpenses = `//span[normalize-space()='expenses']`;
    this.menuInvoices = `//span[normalize-space()='invoices']`;
    this.subMenuInvoicesGeneral = `//span[normalize-space()='General']`;
    this.subMenuInvoicesClient = `//span[normalize-space()='Client Based']`;
    this.subMenuInvoicesEmployee = `//span[normalize-space()='Employee Based']`;
    this.subMenuInvoicesAutomatic = `//span[normalize-space()='Automatic']`;
    this.menuSubscriptions = `//span[normalize-space()='subscription']`;
    this.menuSubscriptionsChoosePlan = `//span[normalize-space()='Choose Plan']`;
    this.menuSubscriptionsPayment = `//span[normalize-space()='My Payments']`;
    this.menuSettings = `//span[normalize-space()='settings']`;
    this.menuReports = `//span[normalize-space()='reports']`;
    this.subMenuReportsClient = `//span[normalize-space()='Client']`;
    this.subMenuReportsProjects = `//span[normalize-space()='Projects']`;
    this.subMenuReportsInvoices = `//span[normalize-space()='Invoices']`;
    this.subMenuReportsUsers = `//span[normalize-space()='Users']`;
    this.subMenuReportsUCP = `//span[normalize-space()='Users-Clients-Projects']`;
    this.subMenuReportsUP = `//span[normalize-space()='User-Payrates']`;
    this.timesheetTotal = `//p[@class='MuiTablePagination-displayedRows css-ejwsqf']`;
    // this.allTab = `//button[normalize-space()='All']`
    this.allTab = `//button[contains(., 'All')]`;
    // this.openTab = `//button[normalize-space()='Open']`
    this.openTab = `//button[contains(., 'Open')]`;
    // this.activeTab = `//button[normalize-space()='Active']`
    this.activeTab = `//button[contains(., 'Active')]`;
    // this.inactiveTab = `//button[normalize-space()='Inactive']`
    this.inactiveTab = `//button[contains(., 'Inactive')]`;
    // this.submittedTab = `//button[normalize-space()='Submitted']`
    this.submittedTab = `//button[contains(., 'Submitted')]`;
    // this.approvedTab = `//button[normalize-space()='Approved']`
    this.approvedTab = `//button[contains(., 'Approved')]`;
    // this.rejectedTab = `//button[normalize-space()='Rejected']`
    this.rejectedTab = `//button[contains(., 'Rejected')]`;
    // this.draftTab = `//button[normalize-space()='Draft']`
    this.draftTab = `//button[contains(., 'Draft')]`;
    // this.pendingTab = `//button[normalize-space()='Pending']`
    this.pendingTab = `//button[contains(., 'Pending')]`;
    // this.overdueTab = `//button[normalize-space()='Overdue']`
    this.overdueTab = `//button[contains(., 'Overdue')]`;
    // this.paidTab = `//button[normalize-space()='Paid']`
    this.paidTab = `//button[contains(., 'Paid')]`;
    // this.incompleteTab = `//button[normalize-space()='Incomplete']`
    this.incompleteTab = `//button[contains(., 'Incomplete')]`;
    // this.invitedTab = `//button[normalize-space()='Invited']`
    this.invitedTab = `//button[contains(., 'Invited')]`;
    // this.archivedTab = `//button[normalize-space()='Archived']`
    this.archivedTab = `//button[contains(., 'Archived')]`;
    // this.companyAdminTab = `//button[normalize-space()='Company Admin']`
    this.companyAdminTab = `//button[contains(., 'Company Admin')]`;
    // this.payrollAdminTab = `//button[normalize-space()='Payroll Admin']`
    this.payrollAdminTab = `//button[contains(., 'Payroll Admin')]`;
    // this.approverTab = `//button[normalize-space()='Approver']`
    this.approverTab = `//button[contains(., 'Approver')]`;
    // this.employeeTab = `//button[normalize-space()='Employee']`
    this.employeeTab = `//button[contains(., 'Employee')]`;
    this.companySwitchButton = `//div[@class='MuiBox-root css-1mocby8']`;
    // this.nextCompany = `//body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[2]/li[1]/div[2]`
    this.nextCompany = `//span[normalize-space()='ORIENT']`;
    this.generalSelector = `//body[1]/div[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[1]`;
    this.statusSelector = `//body[1]/div[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[2]/div[2]/div[6]/div[1]/div[1]`;
    this.filterClear = `//button[normalize-space()='Clear']`;
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

    await this.page.click(this.archivedTab);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.activeTab);
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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

    await this.page.click(this.allTab);
    await this.page.waitForTimeout(1000);
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

    await this.page.click(this.archivedTab);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.activeTab);
    await this.page.waitForTimeout(500);
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
    await this.page.waitForTimeout(500);
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
    await this.page.waitForTimeout(500);
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

    await this.page.click(this.allTab);
    await this.page.waitForTimeout(500);
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

    const result = {
      total: totalCount,
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }


  async timesheetDataCounter(role = "Admins") {
    await this.page.click(this.menuTimesheets);
    let totalCount, openCount, submittedCount, approvedCount, rejectedCount, archivedCount;

    await this.page.click(this.rejectedTab);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.openTab);
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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

    if (role === "Admins") {
      await this.page.click(this.openTab);
      await this.page.waitForTimeout(1000);
      await this.page.click(this.archivedTab);
      await this.page.waitForTimeout(1000);
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

      await this.page.click(this.openTab);
      await this.page.waitForTimeout(1000);
      await this.page.click(this.allTab);
      await this.page.waitForTimeout(1000);
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
    if (role === "Employee" || role === "Approver") {
      const result = {
        total: totalCount,
        open: openCount,
        submitted: submittedCount,
        approved: approvedCount,
        rejected: rejectedCount
      }
      return result;
    }
  }


  async checkInDataCounter(role = "Admins") {
    await this.page.click(this.menuCheckIn);
    let totalCount, openCount, submittedCount, approvedCount, rejectedCount, archivedCount;

    await this.page.click(this.rejectedTab);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.openTab);
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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

    await this.page.click(this.allTab);
    await this.page.waitForTimeout(1000);
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

    if (role === "Admins") {
      await this.page.click(this.openTab);
      await this.page.waitForTimeout(1000);
      await this.page.click(this.archivedTab);
      await this.page.waitForTimeout(1000);
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
    if (role === "Employee" || role === "Approver") {
      const result = {
        total: totalCount,
        open: openCount,
        submitted: submittedCount,
        approved: approvedCount,
        rejected: rejectedCount
      }
      return result;
    }
  }


  async schedulesDataCounter(role = "Company Admin") {
    await this.page.click(this.expand);
    if (role === "Company Admin")
    {
      await this.page.click(this.menuSchedules);
    }
    if (role === "Payroll Admin")
    {
      await this.page.click(this.menuSchedules1);
    }
    let totalCount, activeCount, inactiveCount, archivedCount;

    await this.page.click(this.archivedTab);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.activeTab);
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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
    await this.page.waitForTimeout(1000);
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

    await this.page.click(this.allTab);
    await this.page.waitForTimeout(1000);
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
    // await this.page.click(this.subMenuInvoicesClient);
    // await this.page.waitForSelector(`//h4[normalize-space()='All client Based Invoices']`)

    let totalCount, draftCount, pendingCount, overdueCount, paidCount, incompleteCount, archivedCount;

    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesGeneral);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)

    // archivedCount = await this.allTabsSum("Archived", "None");
    await this.page.click(this.archivedTab)
    archivedCount = await this.onlyForNow("Archived", "None");
    console.log("Archived Done");
    await this.page.waitForTimeout(1000);
    await this.page.click(this.allTab)
    // totalCount = await this.allTabsSum("All", "None");
    totalCount = await this.onlyForNow("All", "None");
    console.log("Total Done");
    await this.page.waitForTimeout(1000);
    // draftCount = await this.allTabsSum("All", "Draft");
    draftCount = await this.onlyForNow("All", "Draft");
    console.log("Draft Done");
    await this.page.waitForTimeout(1000);
    // pendingCount = await this.allTabsSum("All", "Pending");
    pendingCount = await this.onlyForNow("All", "Pending");
    console.log("Pending Done");
    await this.page.waitForTimeout(1000);
    // overdueCount = await this.allTabsSum("All", "Overdue");
    overdueCount = await this.onlyForNow("All", "Overdue");
    console.log("Overdue Done");
    await this.page.waitForTimeout(1000);
    // paidCount = await this.allTabsSum("All", "Paid");
    paidCount = await this.onlyForNow("All", "Paid");
    console.log("Paid Done");
    await this.page.waitForTimeout(1000);
    // incompleteCount = await this.allTabsSum("All", "Incomplete");  
    incompleteCount = await this.onlyForNow("All", "Incomplete");  
    console.log("Incomplete Done");
    console.log("All Done");
    // await this.page.goto('/');

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

  async allTabsSum(tabName, fieldValue) {
    let allTab = `//button[contains(., '` + tabName + `')]`


    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesClient);
    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesGeneral);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    let totalCount, totalCount1, totalCount2, totalCount3, totalCount4;

    await this.page.click(allTab);
    await this.dropdownSelector(fieldValue);
    await this.page.waitForTimeout(500);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount1 = "0";
      totalCount1 = await this.count(totalCount1);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(500);
      totalCount1 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount1 = await this.count(totalCount1);
    }


    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesClient);
    await this.page.waitForSelector(`//h4[normalize-space()='All client Based Invoices']`)

    await this.page.click(allTab);
    await this.dropdownSelector(fieldValue);
    await this.page.waitForTimeout(500);
    await this.page.waitForSelector(`//h4[normalize-space()='All client Based Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount2 = "0";
      totalCount2 = await this.count(totalCount2);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(500);
      totalCount2 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount2 = await this.count(totalCount2);
    }


    await this.page.click(this.menuInvoices);
    await this.page.click(this.subMenuInvoicesEmployee);
    await this.page.waitForSelector(`//h4[normalize-space()='All employee Based Invoices']`)

    await this.page.click(allTab);
    await this.dropdownSelector(fieldValue);
    await this.page.waitForTimeout(500);
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
    await this.page.waitForSelector(`//h4[normalize-space()='All automatic Invoices']`)

    await this.page.click(allTab);
    await this.dropdownSelector(fieldValue);
    await this.page.waitForTimeout(500);
    await this.page.waitForSelector(`//h4[normalize-space()='All automatic Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount4 = "0";
      totalCount4 = await this.count(totalCount4);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(500);
      totalCount4 = await this.page.locator(this.timesheetTotal).textContent();
      totalCount4 = await this.count(totalCount4);
    }

    totalCount = parseInt(totalCount1) + parseInt(totalCount2) + parseInt(totalCount3) + parseInt(totalCount4);
    totalCount = totalCount.toString();
    return totalCount;
  }

  async onlyForNow (tabName, fieldValue)  {
    await this.page.reload();
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    // let allTab = `//button[contains(., '` + tabName + `')]`
    let totalCount;

    // await this.page.click(this.archivedTab);
    // await this.page.waitForTimeout(1000);
    // await this.page.click(allTab);
    await this.dropdownSelector(fieldValue);
    await this.page.waitForTimeout(1000);
    await this.page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      totalCount = "0";
      totalCount = await this.count(totalCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(500);
      totalCount = await this.page.locator(this.timesheetTotal).textContent();
      totalCount = await this.count(totalCount);
    }
    await this.page.click(this.filterClear);
    await this.page.reload();

    // await this.page.click(this.menuInvoices);
    // await this.page.click(this.subMenuInvoicesClient);
    // await this.page.waitForSelector(`//h4[normalize-space()='All client Based Invoices']`)

    return totalCount;
  }


  async userStatusDataCounter() {
    await this.page.click(this.menuUsers);
    let totalCount, activeCount, inactiveCount, invitedCount, archivedCount;

    await this.page.click(this.archivedTab);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.activeTab);
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
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
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
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

    // await this.page.click(this.invitedTab);
    // await this.page.waitForTimeout(500);
    // await this.select("All Users");
    // if (await this.page.isVisible("No Data")) {
    //   await this.select("No Data");
    //   invitedCount = "0";
    //   invitedCount = await this.count(invitedCount);
    // }
    // else{
    //   await this.select("Rows per page:");
    //   await this.page.waitForTimeout(1000);
    //   invitedCount = await this.page.locator(this.timesheetTotal).textContent();
    //   invitedCount = await this.count(invitedCount);
    // }

    await this.page.click(this.archivedTab);
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
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

    await this.page.click(this.allTab);
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
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

    // inactiveCount = String(parseInt(inactiveCount) - parseInt(invitedCount));
    // totalCount = String(parseInt(totalCount) - parseInt(invitedCount));

    const result = {
      total: totalCount,
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }
  

  async userRolesDataCounter() {
    await this.page.click(this.menuUsers);
    let companyAdminCount, payrollAdminCount, approverCount, employeeCount;

    await this.page.click(this.archivedTab);
    await this.page.click(this.allTab);
    await this.dropdownSelector("Company Admin", "Role")
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      companyAdminCount = "0";
      companyAdminCount = await this.count(companyAdminCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      companyAdminCount = await this.page.locator(this.timesheetTotal).textContent();
      companyAdminCount = await this.count(companyAdminCount);
    }

    await this.dropdownSelector("Company Admin", "Role")
    await this.page.click(this.archivedTab);
    await this.page.click(this.allTab);
    await this.dropdownSelector("Payroll Admin", "Role")
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      payrollAdminCount = "0";
      payrollAdminCount = await this.count(payrollAdminCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      payrollAdminCount = await this.page.locator(this.timesheetTotal).textContent();
      payrollAdminCount = await this.count(payrollAdminCount);
    }

    await this.dropdownSelector("Payroll Admin", "Role")
    await this.page.click(this.archivedTab);
    await this.page.click(this.allTab);
    await this.dropdownSelector("Approver", "Role")
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      approverCount = "0";
      approverCount = await this.count(approverCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      approverCount = await this.page.locator(this.timesheetTotal).textContent();
      approverCount = await this.count(approverCount);
    }

    await this.dropdownSelector("Approver", "Role")
    await this.page.click(this.archivedTab);
    await this.page.click(this.allTab);
    await this.dropdownSelector("Employee", "Role")
    await this.page.waitForTimeout(1000);
    await this.select("All Users");
    if (await this.page.isVisible("No Data")) {
      await this.select("No Data");
      employeeCount = "0";
      employeeCount = await this.count(employeeCount);
    }
    else{
      await this.select("Rows per page:");
      await this.page.waitForTimeout(1000);
      employeeCount = await this.page.locator(this.timesheetTotal).textContent();
      employeeCount = await this.count(employeeCount);
    }

    await this.dropdownSelector("Employee", "Role")
    const result = {
      companyAdmin: companyAdminCount,
      payrollAdmin: payrollAdminCount,
      approver: approverCount,
      employee: employeeCount
    }
    return result;
  }

  async dropdownSelector(fieldValue, which = " ") {
    if (fieldValue != "None") {
      if (which != "Status") {
        await this.page.click(this.generalSelector);
      } else {
        await this.page.click(this.statusSelector);
      }
      await this.page.click(`//li[normalize-space()='`+fieldValue+`']`)
      if (which == "Role") {
        await this.page.click(`//body[1]/div[3]/div[1]`)
      }
      await this.page.waitForTimeout(500)
    }
  }
}