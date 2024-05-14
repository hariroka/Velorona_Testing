const requirement = require('playwright/test');

exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = `//input[@id=':r0:']`;
    this.passwordInput = `//input[@id=':r1:']`;
    this.loginButton = `//button[@id=':r2:']`;
    // this.ValidLoginValidation = '//span[normalize-space()="Dashboard"]';
  }
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

}