const requirement = require('playwright/test');

exports.adminDashboardPage = class adminDashboardPage {
  constructor(page) {
    this.page = page;
    this.clientsTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.clientsActive = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.clientsInactive = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.clientsArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.projectsTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.projectsActive = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.projectsInactive = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.projectsArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.timesheetTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.timesheetOpen = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.timesheetSubmitted = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.timesheetApproved = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.timesheetRejected = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/h3[1]`
    this.timesheetArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[6]/div[1]/div[1]/h3[1]`
    this.check_inTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.check_inOpen = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.check_inSubmitted = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.check_inApproved = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.check_inRejected = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[5]/div[1]/div[1]/h3[1]`
    this.check_inArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[4]/div[1]/div[6]/div[1]/div[1]/h3[1]`
    this.schedulesTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.schedulesActive = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.schedulesInactive = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.schedulesArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.invoicesTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.invoicesDraft = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.invoicesPending = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.invoicesOverdue = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.invoicesPaid = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[5]/div[1]/div[1]/h3[1]`
    this.invoicesIncomplete = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[6]/div[1]/div[1]/h3[1]`
    this.invoicesArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[6]/div[1]/div[7]/div[1]/div[1]/h3[1]`
  }
  async clientsCounter() {
    const totalCount = await this.page.locator(this.clientsTotal).textContent();
    const activeCount = await this.page.locator(this.clientsActive).textContent();
    const inactiveCount = await this.page.locator(this.clientsInactive).textContent();
    const archivedCount = await this.page.locator(this.clientsArchived).textContent();
    const result = {
      total: totalCount,
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }
  async projectsCounter() {
    const totalCount = await this.page.locator(this.projectsTotal).textContent();
    const activeCount = await this.page.locator(this.projectsActive).textContent();
    const inactiveCount = await this.page.locator(this.projectsInactive).textContent();
    const archivedCount = await this.page.locator(this.projectsArchived).textContent();
    const result = {
      total: totalCount,
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }
  async timesheetDataCounter() {
    const totalCount = await this.page.locator(this.timesheetTotal).textContent();
    const openCount = await this.page.locator(this.timesheetOpen).textContent();
    const submittedCount = await this.page.locator(this.timesheetSubmitted).textContent();
    const approvedCount = await this.page.locator(this.timesheetApproved).textContent();
    const rejectedCount = await this.page.locator(this.timesheetRejected).textContent();
    const archivedCount = await this.page.locator(this.timesheetArchived).textContent();
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
  async check_inDataCounter() {
    const totalCount = await this.page.locator(this.check_inTotal).textContent();
    const openCount = await this.page.locator(this.check_inOpen).textContent();
    const submittedCount = await this.page.locator(this.check_inSubmitted).textContent();
    const approvedCount = await this.page.locator(this.check_inApproved).textContent();
    const rejectedCount = await this.page.locator(this.check_inRejected).textContent();
    const archivedCount = await this.page.locator(this.check_inArchived).textContent();
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
  async schedulesCounter() {
    const totalCount = await this.page.locator(this.schedulesTotal).textContent();
    const activeCount = await this.page.locator(this.schedulesActive).textContent();
    const inactiveCount = await this.page.locator(this.schedulesInactive).textContent();
    const archivedCount = await this.page.locator(this.schedulesArchived).textContent();
    const result = {
      total: totalCount,
      active: activeCount,
      inactive: inactiveCount,
      archived: archivedCount
    }
    return result;
  }
  async invoicesCounter() {
    const totalCount = await this.page.locator(this.invoicesTotal).textContent();
    const draftCount = await this.page.locator(this.invoicesDraft).textContent();
    const pendingCount = await this.page.locator(this.invoicesPending).textContent();
    const overdueCount = await this.page.locator(this.invoicesOverdue).textContent();
    const paidCount = await this.page.locator(this.invoicesPaid).textContent();
    const incompleteCount = await this.page.locator(this.invoicesIncomplete).textContent();
    const archivedCount = await this.page.locator(this.invoicesArchived).textContent();
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

  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
  }
}