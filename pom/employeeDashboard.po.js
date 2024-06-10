const requirement = require('playwright/test');

exports.employeeDashboardPage = class employeeDashboardPage {
  constructor(page) {
    this.page = page;
    this.timesheetTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.timesheetOpen = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.timesheetSubmitted = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.timesheetApproved = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.timesheetRejected = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/h3[1]`
    this.timesheetArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/h3[1]`
    this.check_inTotal = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h3[1]`
    this.check_inOpen = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/h3[1]`
    this.check_inSubmitted = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/h3[1]`
    this.check_inApproved = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/h3[1]`
    this.check_inRejected = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/h3[1]`
    this.check_inArchived = `//body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[6]/div[1]/div[1]/h3[1]`
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
      rejected: rejectedCount
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
      rejected: rejectedCount
    }
    return result;
  }

  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
  }
}