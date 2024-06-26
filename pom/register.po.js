const { expect } = require('playwright/test');

exports.registerPage = class registerPage {
    constructor(page) {
        this.page = page;
        this.loginButton = `//a[normalize-space()='Login']`
        this.companyNameInput = `//input[@id=':r3:']`;
        this.companyEmailInput = `//input[@id=':r4:']`;
        this.companyPhoneInput = `//input[@id=':r5:']`;
        this.companyStreetInput = `//input[@id=':r6:']`;
        this.companySuiteInput = `//input[@id=':r7:']`;
        this.companyCityInput = `//input[@id=':r8:']`;
        this.companyStateInput = `//input[@id=':r9:']`;
        this.companyZipcodeInput = `//input[@id=':ra:']`;
        this.companyCountrySelect = `//input[@id=':rb:']`;
        this.companyTimezoneSelect = `//input[@id=':rd:']`;
        this.submitButton = `//button[@id=':rf:']`;
        this.nextButton = `//button[normalize-space()='Next']`;
        this.backButton = `//button[normalize-space()='Back']`;
        this.AdminFirtNameInput = `//input[@id=':rg:']`;
        this.AdminMiddleNameInput = `//input[@id=':rh:']`;
        this.AdminLastNameInput = `//input[@id=':ri:']`;
        this.AdminEmailInput = `//input[@id=':rj:']`;
        this.AdminPhoneInput = `//input[@id=':rk:']`;
        this.PasswordInput = `//input[@id=':rl:']`;
        this.ConfirmPaswwordInput = `//input[@id=':rm:']`;
        this.AdminStreetInput = `//input[@id=':rn:']`;
        this.AdminApartmentInput = `//input[@id=':ro:']`;
        this.AdminCityInput = `//input[@id=':rp:']`;
        this.AdminStateInput = `//input[@id=':rq:']`;
        this.AdminZipcodeInput = `//input[@id=':rr:']`;
        this.AdminCountrySelect = `//input[@id=':rs:']`;
        this.registerButton = `//button[@id=':ru:']`;
    }

  async select(message) {
    await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
  }

  async countrySelect(country) {
    await this.page.click(this.companyCountrySelect);
    await this.page.fill(this.companyCountrySelect, country); 
    await this.page.waitForSelector(`//li[contains(., '`+country+`')]`);
    await this.page.click(`//li[contains(., '`+country+`')]`);
    await this.page.waitForTimeout(2000);
  }

  async dropdownSelector(fieldName, value) {
    if (fieldName == "Company Country") {
      await this.page.click(this.companyCountrySelect);
      await this.page.fill(this.companyCountrySelect, value);
    }
    else if (fieldName == "Admin Country") {
      await this.page.click(this.AdminCountrySelect);
      await this.page.fill(this.AdminCountrySelect, value);
    }
    else {
      await this.page.click(this.companyTimezoneSelect);
      await this.page.fill(this.companyTimezoneSelect, value);
    } 
    await this.page.waitForSelector(`//li[contains(., '`+value+`')]`);
    await this.page.click(`//li[contains(., '`+value+`')]`);
  }

  async countrySelectAll(number) {
    await this.page.click(this.companyCountrySelect);
    await this.page.click(`//li[@id=':rb:-option-`+number+`']`);
    await this.page.waitForTimeout(500);
  }

  async fillCompanyDetails(companyName, companyEmail, companyPhone, companyStreet, companySuite, companyCity, companyState, companyZipcode, companyCountry, companyTimezone) {
    const random = this.digitgenerator()
    if (companyPhone == "") {
      companyPhone = this.digitgenerator(10);
    }
    if (companyZipcode == "") {
      companyZipcode = random;
    }
    await this.page.fill(this.companyNameInput, companyName + random);
    await this.page.fill(this.companyEmailInput, "user" + random + companyEmail);
    await this.page.fill(this.companyPhoneInput, companyPhone);
    await this.page.fill(this.companyStreetInput, companyStreet + random);
    await this.page.fill(this.companySuiteInput, companySuite);
    await this.page.fill(this.companyCityInput, companyCity + random);
    await this.page.fill(this.companyStateInput, companyState + random);
    await this.page.fill(this.companyZipcodeInput, companyZipcode);
    await this.dropdownSelector("Company Country", companyCountry);
    await this.dropdownSelector("Timezone", companyTimezone);
  }

  async clickRegisterButton() {
    await this.page.click(this.registerButton); 
    await this.page.waitForSelector(`//a[normalize-space()='Registeration Successful!']`);
  }

  async fillAdminDetails(AdminFirtName, AdminMiddleName, AdminLastName, AdminEmail, AdminPhone, Password, ConfirmPaswword, AdminStreet, AdminApartment, AdminCity, AdminState, AdminZipcode, AdminCountry) {
    const random = this.digitgenerator()
    if (AdminPhone == "") {
      AdminPhone = this.digitgenerator(10);
    }
    if (AdminZipcode == "") {
      AdminZipcode = random;
    }
    await this.page.fill(this.AdminFirtNameInput, AdminFirtName + random);
    await this.page.fill(this.AdminMiddleNameInput, AdminMiddleName);
    await this.page.fill(this.AdminLastNameInput, AdminLastName + random);
    await this.page.fill(this.AdminEmailInput, "user" + random + AdminEmail);
    await this.page.fill(this.AdminPhoneInput, AdminPhone);
    await this.page.fill(this.PasswordInput, Password);
    await this.page.fill(this.ConfirmPaswwordInput, ConfirmPaswword);
    await this.page.fill(this.AdminStreetInput, AdminStreet + random);
    await this.page.fill(this.AdminApartmentInput, AdminApartment);
    await this.page.fill(this.AdminCityInput, AdminCity + random);
    await this.page.fill(this.AdminStateInput, AdminState + random);
    await this.page.fill(this.AdminZipcodeInput, AdminZipcode);
    await this.dropdownSelector("Admin Country", AdminCountry);
  }

  async viewPages(pageName) {
    await this.page.click(`//*[contains(text(), '` + pageName + `')]`);
    await this.page.waitForSelector(`//h1[normalize-space()='` + pageName + `']`)
  }

  digitgenerator(disit = 4) {
    if (disit == 4) {
      return (Math.floor(1000 + Math.random() * 9000)).toString();
    }
    else {
      return "98"+(Math.floor(10000000 + Math.random() * 90000000)).toString();
    }
    return (Math.floor(1000 + Math.random() * 9000)).toString();
  }

  async isPasswordInputRed() {
    const color = await this.page.$eval(this.PasswordInput, el => {
        return window.getComputedStyle(el).borderColor;
    });
    expect(color).toBe('rgb(33, 43, 54)'); // Do not use anchor CSS values in your tests
}
}