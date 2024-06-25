const { test, expect } = require('playwright/test');

exports.landingPage = class landingPage {
  constructor(page) {
    this.page = page;
    this.joinNowButton = '//button[normalize-space()="Join Now"]';
    this.signUpButton = '//button[normalize-space()="Sign Up"]';
  }

  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '${message}')]`);
  }

  async register(button = "Join Now") {
    const newPagePromise = this.page.waitForEvent('popup');
    
    if (button === "Sign Up") {
      await this.page.click(this.signUpButton);
    } else {
      await this.page.click(this.joinNowButton);
    }
    
    const newPage = await newPagePromise;
    // await newPage.waitForURL('https://app-staging.velorona.net/register', { timeout: 1000 });
    return newPage;
  }
}
