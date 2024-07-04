const { test, expect } = require('@playwright/test');
const { landingPage } = require('../pom/landing.po.js');
const { registerPage } = require('../pom/register.po.js');
const { loginPage } = require('../pom/login.po.js');
const data = require(`../fixtures/fixture.json`);
const registerError = require(`../errorMessages/registerErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);

const companyRegisterFields = ["Company Name", "Phone", "Street", "City", "State", "Zip", "Country"]
const adminRegisterFields = ["First Name", "Last Name", "Phone", "Confirm Password", "Street", "City", "State", "Zip", "Country"]

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.goto('/');
});

test.describe('Register_001 Verify Company Register Page (from Landing)', () => {
  test('Register_001 Register Page from Landing (Join Now)', async ({ page }) => {
    await page.goto('https://landing-staging.velorona.net/');
    const landing = new landingPage(page);
    await landing.select("Staffing");

    // Register page using Join Now
    const newTab = await landing.register("Join Now");
    
    const register = new registerPage(newTab);
    await register.select("Company Register");
  });

  test('Register_001 Register Page from Landing (Sign Up)', async ({ page }) => {
    await page.goto('https://landing-staging.velorona.net/');
    const landing = new landingPage(page);
    await landing.select("Staffing");

    // Register page using Sign Up
    const newTab = await landing.register("Sign Up");
    
    const register = new registerPage(newTab);
    await register.select("Company Register");
  });
});

test.describe('Register_002 Verify Company Register Page', () => {
    test('Register_002 Register Page from login Page', async ({ page }) => {
      const login = new loginPage(page);
  
      await login.registerNow();

    });

});

test.describe('Register_004 Going Back', () => {
    test('Register_004 From Login Button', async ({ page }) => {
      const login = new loginPage(page);
  
      await login.registerNow();

      const register = new registerPage(page);
      
      await page.click(register.loginButton);

      await login.select("User Login");

    });

    test('Register_004 Back Button Disabled', async ({ page }) => {
        const login = new loginPage(page);
    
        await login.registerNow();
  
        const register = new registerPage(page);
        
        await expect(page.locator(register.backButton)).toBeDisabled();
  
    });

});

test.describe('Register_005 Verify Company Register Page compulsory Form fields', () => {
  test('Register_005 Check Error Messages', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);
    
    await page.click(register.nextButton);

    // Loop through the companyRegisterFields array to check error messages
    for (const field of companyRegisterFields) {
      await register.select(field + registerError.isRequired);
    }

    await register.select(registerError.validEmail);
  });
});

test.describe('Register_006 Verify Company Register Page Form fields', () => {
  test('Register_006 Check Error Messages', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.invalidCompanyDetails.Name,
      data.invalidCompanyDetails.Email1,
      data.invalidCompanyDetails.Phone1,
      data.invalidCompanyDetails.Street,
      "",
      data.invalidCompanyDetails.City,
      data.invalidCompanyDetails.State,
      data.invalidCompanyDetails.ZipCode,
      data.invalidCompanyDetails.Country,
      data.invalidCompanyDetails.Timezone
    )

    await page.waitForTimeout(1000);

    await page.click(register.nextButton);

    await register.select(registerError.validEmail);
    await register.select("Phone" + registerError.isNumber);
    await register.select("Zip" + registerError.isNumber);
  });
});

test.describe('Register_007 Verify Admin Register Page', () => {
  test('Register_007', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )

    await page.waitForTimeout(1000);

    await page.click(register.nextButton);

    await expect(page.locator(register.backButton)).toBeEnabled();
  });
});

test.describe('Register_009 Verify Company Admin Details Page compulsory Form fields', () => {
  test('Register_009 Check Error Messages', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )
    
    await page.waitForTimeout(1000);

    await page.click(register.nextButton);
    
    await expect(page.locator(register.backButton)).toBeEnabled();
    
    await page.click(register.registerButton);

    // Loop through the adminRegisterFields array to check error messages
    for (const field of adminRegisterFields) {
      await register.select(field + registerError.isRequired);
    }

    await register.select(registerError.validEmail);
  });
});

test.describe('Register_010 Verify Company Admin Page Form fields', () => {
  test('Register_010 Check Error Messages', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )
    
    await page.waitForTimeout(1000);

    await page.click(register.nextButton);
    
    await expect(page.locator(register.backButton)).toBeEnabled();

    register.fillAdminDetails(
      data.invalidAdminDetails.FirstName,
      "",
      data.invalidAdminDetails.LastName,
      data.invalidAdminDetails.Email1,
      data.invalidAdminDetails.Phone1,
      data.invalidAdminDetails.Password,
      data.invalidAdminDetails.ConfirmPassword,
      data.invalidAdminDetails.Street,
      "",
      data.invalidAdminDetails.City,
      data.invalidAdminDetails.State,
      data.invalidAdminDetails.ZipCode,
      data.invalidAdminDetails.Country
    )

    await page.waitForTimeout(1000);

    await page.click(register.registerButton);

    await register.select(registerError.validEmail);
    await register.select("Phone" + registerError.isNumber);
    await register.select("Zip" + registerError.isNumber);
    await register.select(passError.registerMissmatch);
  });

  test('Register_010 Email is invalid', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )
    
    await page.waitForTimeout(1500);

    await page.click(register.nextButton);
    
    await expect(page.locator(register.backButton)).toBeEnabled();

    register.fillAdminDetails(
      data.validAdminDetails.FirstName,
      "",
      data.validAdminDetails.LastName,
      data.invalidAdminDetails.Email2,
      data.validAdminDetails.Phone,
      data.valid.user.password,
      data.valid.user.password,
      data.validAdminDetails.Street,
      "",
      data.validAdminDetails.City,
      data.validAdminDetails.State,
      data.validAdminDetails.ZipCode,
      data.validAdminDetails.Country
    )

    await page.waitForTimeout(1500);

    await page.click(register.registerButton);

    await register.select(registerError.invalidEmail);
  });
});

test.describe('Register_011 Verify Password mismatch', () => {
  test('Register_011 Password Missmatch', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )
    
    await page.waitForTimeout(1000);

    await page.click(register.nextButton);
    
    await expect(page.locator(register.backButton)).toBeEnabled();

    register.fillAdminDetails(
      data.invalidAdminDetails.FirstName,
      "",
      data.validAdminDetails.LastName,
      data.validAdminDetails.Email,
      data.validAdminDetails.Phone,
      data.valid.user.password,
      data.invalid.password,
      data.validAdminDetails.Street,
      "",
      data.validAdminDetails.City,
      data.validAdminDetails.State,
      data.validAdminDetails.ZipCode,
      data.validAdminDetails.Country
    )

    await page.waitForTimeout(1000);

    await page.click(register.registerButton);

    await register.select(passError.registerMissmatch);
  });

  test('Register_011 Criteria not fulfilled', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )
    
    await page.waitForTimeout(1000);

    await page.click(register.nextButton);
    
    await expect(page.locator(register.backButton)).toBeEnabled();

    register.fillAdminDetails(
      data.invalidAdminDetails.FirstName,
      "",
      data.validAdminDetails.LastName,
      data.validAdminDetails.Email,
      data.validAdminDetails.Phone,
      data.invalid.password,
      data.invalid.password,
      data.validAdminDetails.Street,
      "",
      data.validAdminDetails.City,
      data.validAdminDetails.State,
      data.validAdminDetails.ZipCode,
      data.validAdminDetails.Country
    )

    await page.waitForTimeout(1000);

    await page.click(register.registerButton);

    await register.isPasswordInputRed();
  });
});

test.describe('Register_012 Registration Completed', () => {
  test('Register_012', async ({ page }) => {
    const login = new loginPage(page);

    await login.registerNow();

    const register = new registerPage(page);

    register.fillCompanyDetails(
      data.validCompanyDetails.Name,
      data.validCompanyDetails.Email,
      data.validCompanyDetails.Phone,
      data.validCompanyDetails.Street,
      "",
      data.validCompanyDetails.City,
      data.validCompanyDetails.State,
      data.validCompanyDetails.ZipCode,
      data.validCompanyDetails.Country,
      data.validCompanyDetails.Timezone
    )
    
    await page.waitForTimeout(1500);

    await page.click(register.nextButton);
    
    await expect(page.locator(register.backButton)).toBeEnabled();

    register.fillAdminDetails(
      data.invalidAdminDetails.FirstName,
      "",
      data.validAdminDetails.LastName,
      data.validAdminDetails.Email,
      data.validAdminDetails.Phone,
      data.valid.user.password,
      data.valid.user.password,
      data.validAdminDetails.Street,
      "",
      data.validAdminDetails.City,
      data.validAdminDetails.State,
      data.validAdminDetails.ZipCode,
      data.validAdminDetails.Country
    )

    await page.waitForTimeout(1500);

    await page.click(register.registerButton);

    await register.select("Registration successful");
  });
});

test.describe('Register_014 Terms and Condition Page Visible', () => {
    test('Register_014', async ({ page }) => {
      const login = new loginPage(page);
  
      await login.registerNow();

      const register = new registerPage(page);

      await register.viewPages("Terms and Conditions")

});

});

test.describe('Register_015 Cookies Policy Page Visible', () => {
    test('Register_015', async ({ page }) => {
      const login = new loginPage(page);
  
      await login.registerNow();

      const register = new registerPage(page);

      await register.viewPages("Cookies Policy")

});

});

test.describe('Register_016 Privacy Policy Page Visible', () => {
    test('Register_016', async ({ page }) => {
      const login = new loginPage(page);
  
      await login.registerNow();

      const register = new registerPage(page);

      await register.viewPages("Privacy Policy")

});

});
