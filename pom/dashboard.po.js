const requirement = require('playwright/test');

exports.dashboardPage = class dashboardPage {
  constructor(page) {
    this.page = page;
    this.user1= `//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-zf0vz6']`;
    this.user2 = `(//div[@class='MuiAvatar-root MuiAvatar-circular css-1s5tk1l'])[1]`;
    this.logOutButton = `//li[normalize-space()='Logout']`;
    this.backToLogin = `//button[@id=':r3:']`;
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
}