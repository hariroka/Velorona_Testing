const requirement = require('playwright/test');

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
        this.AdminFirtNameInput = `//input[@id=':rd:']`;
        this.AdminMiddleNameInput = `//input[@id=':re:']`;
        this.AdminLastNameInput = `//input[@id=':ri:']`;
        this.AdminEmailInput = `//input[@id=':rj:']`;
        this.AdminPhoneInput = `//input[@id=':rh:']`;
        this.PasswordInput = `//input[@id=':ri:']`;
        this.ConfirmPaswwordInput = `//input[@id=':rj:']`;
        this.AdminStreetInput = `//input[@id=':rk:']`;
        this.AdminApartmentInput = `//input[@id=':rl:']`;
        this.AdminCityInput = `//input[@id=':rm:']`;
        this.AdminStateInput = `//input[@id=':rn:']`;
        this.AdminZipcodeInput = `//input[@id=':ro:']`;
        this.AdminCountrySelect = `//input[@id=':rp:']`;
        this.RegisterButton = `//button[@id=':ru:']`;
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

  async countrySelectAll(number) {
    await this.page.click(this.companyCountrySelect);
    await this.page.click(`//li[@id=':rb:-option-`+number+`']`);
    await this.page.waitForTimeout(500);
  }

  async fillCompanyDetails(companyName, companyEmail, companyPhone, companyStreet, companySuite, companyCity, companyState, companyZipcode, companyCountry) {
    await this.page.fill(this.companyNameInput, companyName);
    await this.page.fill(this.companyEmailInput, companyEmail);
    await this.page.fill(this.companyPhoneInput, companyPhone);
    await this.page.fill(this.companyStreetInput, companyStreet);
    await this.page.fill(this.companySuiteInput, companySuite);
    await this.page.fill(this.companyCityInput, companyCity);
    await this.page.fill(this.companyStateInput, companyState);
    await this.page.fill(this.companyZipcodeInput, companyZipcode);
    await this.countrySelect(companyCountry);
    // await this.page.fill(this.companyTimezoneSelect, companyTimezone);
  }

  async clickNextButton() { 
    await this.page.click(this.nextButton);
    await this.page.waitForSelector(`//h6[normalize-space()='Must include at least 8 characters']`);
  }

  async clickRegisterButton() {
    await this.page.click(this.RegisterButton); 
    await this.page.waitForSelector(`//a[normalize-space()='Registeration Successful!']`);
  }

  async fillAdminDetails(AdminFirtName, AdminMiddleName, AdminLastName, AdminEmail, AdminPhone, Password, ConfirmPaswword, AdminStreet, AdminApartment, AdminCity, AdminState, AdminZipcode, AdminCountry) {
    await this.page.fill(this.AdminFirtNameInput, AdminFirtName);
    await this.page.fill(this.AdminMiddleNameInput, AdminMiddleName);
    await this.page.fill(this.AdminLastNameInput, AdminLastName);
    await this.page.fill(this.AdminEmailInput, AdminEmail);
    await this.page.fill(this.AdminPhoneInput, AdminPhone);
    await this.page.fill(this.PasswordInput, Password);
    await this.page.fill(this.ConfirmPaswwordInput, ConfirmPaswword);
    await this.page.fill(this.AdminStreetInput, AdminStreet);
    await this.page.fill(this.AdminApartmentInput, AdminApartment);
    await this.page.fill(this.AdminCityInput, AdminCity);
    await this.page.fill(this.AdminStateInput, AdminState);
    await this.page.fill(this.AdminZipcodeInput, AdminZipcode);
    await this.countrySelect(AdminCountry);
  }

  async viewPages(pageName) {
    await this.page.click(`//*[contains(text(), '` + pageName + `')]`);
    await this.page.waitForSelector(`//h1[normalize-space()='` + pageName + `']`)
  }
}