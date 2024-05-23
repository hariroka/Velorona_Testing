const requirement = require('playwright/test');

exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = `//input[@id=':r0:']`;
    this.passwordInput = `//input[@id=':r1:']`;
    this.loginButton = `//button[@id=':r2:']`;
    this.otpInput1 = `//input[@id=':r3:']`;
    this.otpInput2 = `//input[@id=':r4:']`;
    this.otpInput3 = `//input[@id=':r5:']`;
    this.otpInput4 = `//input[@id=':r6:']`;
    this.otpInput5 = `//input[@id=':r7:']`;
    this.otpInput6 = `//input[@id=':r8:']`;
    this.otpLoginButton = `//button[@id=':r9:']`;
    this.forgotPassword = `//a[normalize-space()='Forgot password?']`;
    this.register = `//a[normalize-space()='Register Now']`;
    this.rememberMe = `//input[@name='rememberMe']`;
  }
  async login(username, password) {
    if (username != '') {
      await this.page.fill(this.usernameInput, username);
    }
    if (password != '') {
      await this.page.fill(this.passwordInput, password);
    }
    await this.page.click(this.loginButton);
  }
  async otpWrite(otp) {
    await this.page.waitForSelector(`//*[contains(text(), 'OTP has been sent to your email')]`);
    if (otp != '') {
      await this.page.fill(this.otpInput1, otp[0]);
      await this.page.fill(this.otpInput2, otp[1]);
      await this.page.fill(this.otpInput3, otp[2]);
      await this.page.fill(this.otpInput4, otp[3]);
      await this.page.fill(this.otpInput5, otp[4]);
      await this.page.fill(this.otpInput6, otp[5]);
    }
    await this.page.click(this.otpLoginButton);
  }
  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
  }
  async forgotPass() {
    await this.page.click(this.forgotPassword);
    await this.page.waitForSelector(`//*[contains(text(), 'Forgot your password?')]`);
  }
  async registerNow() {
    await this.page.click(this.register);
    await this.page.waitForSelector(`//*[contains(text(), 'Company Register')]`);
  }
  async loginWithRememberMe(username, password) {
    if (username != '') {
      await this.page.fill(this.usernameInput, username);
    }
    if (password != '') {
      await this.page.fill(this.passwordInput, password);
    }
    await this.page.click(this.rememberMe);
    await this.page.click(this.loginButton);
  }
}