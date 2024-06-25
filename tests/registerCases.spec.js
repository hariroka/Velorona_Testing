const { test, expect } = require('@playwright/test');
const { landingPage } = require('../pom/landing.po.js');
const { registerPage } = require('../pom/register.po.js');
const { loginPage } = require('../pom/login.po.js');

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

    test.only('Register_004 Back Button Disabled', async ({ page }) => {
        const login = new loginPage(page);
    
        await login.registerNow();
  
        const register = new registerPage(page);
        
        await expect(page.locator(register.backButton)).toBeDisabled();
  
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
