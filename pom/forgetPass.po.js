const { expect } = require('playwright/test');

exports.forgotPasswordPage = class forgotPasswordPage {
    constructor(page) {
        this.page = page;
        this.emailInput = `//input[@id=':r0:']`; 
        this.submitButton = `//button[@id=':r1:']`;
        this.returnButton = `//a[normalize-space()='Return to sign in']`;
    }
    async resetPassword(email, message) {
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.submitButton);
        await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
    }
    async returnToSignIn() {
        await this.page.click(this.returnButton);
        await this.page.waitForSelector(`//*[contains(text(), 'User Login')]`);
    }
}