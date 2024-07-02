const {test, expect} = require('playwright/test');

exports.invoicePage = class invoicePage {
  constructor(page) {
    this.page = page;
    this.breadcrumb = [
      `//body//div//li[1]`, 
      `//body//div//li[3]`
    ]; 
    this.createInvoiceButton = `//button[@id=':r2:']`;

    this.allTab = `//button[contains(., 'All')]`;
    this.archivedTab = `//button[contains(., 'Archived')]`;
    this.searchKeywordField = `//input[@id=':r13:']`;
    this.startDateField = `//input[@id=':r14:']`;
    this.endDateField = `//input[@id=':r16:']`;
    this.statusField = `//body[1]/div[1]/div[1]/main[1]/section[1]/div[1]/div[1]/div[2]/div[2]/div[6]/div[1]/div[1]`;
    this.clearFilterButton = `//button[normalize-space()='Clear']`;

    this.draftTab = `//button[contains(., 'Draft')]`;
    this.pendingTab = `//button[contains(., 'Pending')]`;
    this.overdueTab = `//button[contains(., 'Overdue')]`;
    this.paidTab = `//button[contains(., 'Paid')]`;
    this.incompleteTab = `//button[contains(., 'Incomplete')]`;
  }

  async verifyBreadcrumbText(index, expectedText) {
    if (index >= 0 && index < this.breadcrumb.length) {
        const breadcrumbLocator = this.page.locator(this.breadcrumb[index]);
        const breadcrumbText = await breadcrumbLocator.textContent();
        expect(breadcrumbText.trim()).toBe(expectedText);
    } else {
        throw new Error('Invalid breadcrumb index');
  }


  }

  async select(message, heading = '') {
    if (heading == '') {
      await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
    }
    else {
      await this.page.waitForSelector(`//h4[normalize-space()='` + message + `']`);
    }
  }

}