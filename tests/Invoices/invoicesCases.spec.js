const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const emailError = require(`../../errorMessages/emailErrors.json`);
const passError = require(`../../errorMessages/passErrors.json`);
const otpError = require(`../../errorMessages/otpErrors.json`);
const { loginPage } = require('../../pom/login.po.js');
const { forgotPassPage } = require('../../pom/forgotPass.po.js');
const { dashboardPage } = require(`../../pom/dashboard.po.js`);
const { invoicePage } = require(`../../pom/invoices.po.js`);

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('/');
    const login = new loginPage(page);
    await login.login(loginData.valid.admin.email, loginData.valid.admin.password);
    await login.select("Welcome");
    const dashboard = new dashboardPage(page);
    await page.waitForTimeout(1000);
    await page.click(dashboard.menuInvoices);
    await page.click(dashboard.subMenuInvoicesGeneral);
    await page.waitForSelector(`//h4[normalize-space()='All General Invoices']`)
    await page.waitForTimeout(1000);
});

test.describe('Testing', () => {
    test('Breadcrumbs', async ({ page }) => {
        const generalInvoice = new invoicePage(page);
        await generalInvoice.verifyBreadcrumbText(0, 'General  Invoices');
        await generalInvoice.verifyBreadcrumbText(1, 'List');
    })
   
    test('Create Invoice Check', async ({ page }) => {
        const generalInvoice = new invoicePage(page);
        await page.click(generalInvoice.createInvoiceButton);
        await page.click(generalInvoice.createInvoiceButton);
        await generalInvoice.select("Create general invoice", "h4");
        await generalInvoice.verifyBreadcrumbText(0, 'General Invoices');
        await generalInvoice.verifyBreadcrumbText(1, 'Create'); 
    })
})