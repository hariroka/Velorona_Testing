const requirement = require('playwright/test');
const { test, expect } = require('@playwright/test');

exports.otpPage = class otpPage {
  constructor(page) {
    this.page = page;
    this.otpInput1 = `//input[@id=':r3:']`;
    this.otpInput2 = `//input[@id=':r4:']`;
    this.otpInput3 = `//input[@id=':r5:']`;
    this.otpInput4 = `//input[@id=':r6:']`;
    this.otpInput5 = `//input[@id=':r7:']`;
    this.otpInput6 = `//input[@id=':r8:']`;
    this.loginButton = `//button[@id=':r9:']`;
    this.welcomeText = `//*[contains(text(), 'Welcome')]`;
  }
  async otpWrite(otp) {
    await this.page.fill(this.otpInput1, otp[0]);
    await this.page.fill(this.otpInput2, otp[1]);
    await this.page.fill(this.otpInput3, otp[2]);
    await this.page.fill(this.otpInput4, otp[3]);
    await this.page.fill(this.otpInput5, otp[4]);
    await this.page.fill(this.otpInput6, otp[5]);
    await this.page.click(this.loginButton);
    await this.page.waitForSelector(this.welcomeText);
  }

}