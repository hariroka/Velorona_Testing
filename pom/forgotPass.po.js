const { expect } = require('playwright/test');

exports.forgotPassPage = class forgotPassPage {
    constructor(page) {
        this.page = page;
        this.emailInput = `//input[@id=':r0:']`; 
        this.submitButton1 = `//button[@id=':r1:']`;
        this.returnButton = `//a[normalize-space()='Return to sign in']`;
        this.forgotPassword = `//*[contains(text(), 'Forgot password?')]`;
        this.otpInput1 = `//input[@id=':r3:']`;
        this.otpInput2 = `//input[@id=':r4:']`;
        this.otpInput3 = `//input[@id=':r5:']`;
        this.otpInput4 = `//input[@id=':r6:']`;
        this.otpInput5 = `//input[@id=':r7:']`;
        this.otpInput6 = `//input[@id=':r8:']`;
        this.passwordInput = `//input[@id=':r9:']`;
        this.confirmPasswordInput = `//input[@id=':ra:']`;   
        this.submitButton2 = `//button[@id=':rb:']`;
     
    }
    async resetPassword(email, message) {
        if (email != '') {
            await this.page.fill(this.emailInput, email);
        }
        await this.page.click(this.submitButton1);
        if (message != '') {
            await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
        }
    }
    async returnToSignIn() {
        await this.page.click(this.returnButton);
        await this.page.waitForSelector(`//*[contains(text(), 'User Login')]`);
    }
    async otpWrite(otp) {
        if (otp != '') {
          await this.page.fill(this.otpInput1, otp[0]);
          await this.page.fill(this.otpInput2, otp[1]);
          await this.page.fill(this.otpInput3, otp[2]);
          await this.page.fill(this.otpInput4, otp[3]);
          await this.page.fill(this.otpInput5, otp[4]);
          await this.page.fill(this.otpInput6, otp[5]);
        }
    }
    async passwordWrite(password){
        if (password != '') {
        await this.page.fill(this.passwordInput, password);
        }
    }
    async confirmPasswordWrite(password){
        if (password != '') {
        await this.page.fill(this.confirmPasswordInput, password);
        }
    }
    async resetPass(){
        await this.page.click(this.submitButton2);
    }
    async select(message) {
        await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
      }
}