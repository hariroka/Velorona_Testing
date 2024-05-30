const requirement = require('playwright/test');

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    // this.user1= `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-zf0vz6']`;
    // this.user2 = `(//div[@class='MuiAvatar-root MuiAvatar-circular css-1s5tk1l'])[1]`;
    // this.logOutButton = `//li[normalize-space()='Logout']`;
    // this.backToLogin = `//button[@id=':r3:']`;
    this.timesheetOpen = `body > div:nth-child(18) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(2)`
  }
  // async logOut1() {
  //   await this.page.click(this.user1);
  //   await this.page.click(this.logOutButton);
  // }
  // async logOut2() {
  //   await this.page.click(this.user2);
  //   await this.page.click(this.logOutButton);
  // }
  // async goToLogin() {
  //   await this.page.click(this.backToLogin);
  // }
  async timesheetOpenCounter() {
    const openCount = await this.page.locator(this.timesheetOpen).textContent();
    return openCount;
  }
  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
  }
}