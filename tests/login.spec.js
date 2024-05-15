const { test, expect } = require('@playwright/test');

const data = require(`../fixtures/fixture.json`);
const { loginPage } = require('../pom/login.po.js');
const { otpPage } = require('../pom/otp.po.js');

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Login tests', () => {
    // test('Login with valid credentials', async ({ page }) => {
    //     const login = new loginPage(page);
    //     await login.login(data.validCredential.email, data.validCredential.password); 
    //     // await page.waitForTimeout(10000);    
    // });
    test('Write OTP', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(data.validCredential.email, data.validCredential.password); 
        await page.waitForTimeout(10000); 
        const otp = new otpPage(page);
        const otpPass = '000000'
        await otp.otpWrite(otpPass);
        // await page.waitForTimeout(10000);
    })
})
