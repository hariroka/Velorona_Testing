const { test, expect } = require('@playwright/test');
const moment = require('moment');

const loginData = require(`../../fixtures/fixture.json`);
const { log } = require('console');

let token = '';
let companyId = '';
let loginTimestamp = '';
let userId = '';


test ('Login using API (Payroll Admin)', async ({ request }) => {
    const response = await request.post('/api/v1/auth/user/login', {
        data: {
            email: `${loginData.valid.payroll.email}`,
            password: `${loginData.valid.payroll.password}`
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    companyId = responseBody.data.user.initiallyInvitedByCompanyId;
});

test.only ('Login using API (Company Admin)', async ({ request }) => {
    console.log("Before Login: ", moment().toISOString());
    const response = await request.post('/api/v1/auth/user/login', {
        data: {
            email: `${loginData.valid.admin.email}`,
            password: `${loginData.valid.admin.password}`
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.data.accessToken;
    companyId = responseBody.data.user.initiallyInvitedByCompanyId;
    userId = responseBody.data.user.id;
});

test ('List the Roles', async ({ request }) => {
    const response = await request.get('/api/v1/auth/user/roles', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    // Find the Company ID of company named 'ORIENT'
    const companyData = responseBody.data.find(company => company.companyName.trim() === 'ORIENT');
    if (companyData) {
        companyId = companyData.companyId;
    }
});

test.only ('Latest Login', async ({ request }) => {
    const response = await request.get(`/api/v1/dashboards/company-admins/${companyId}/latest-logins`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    console.log("Last Login at: ", responseBody.data[0].lastLoginAt);
    expect(responseBody.data[0].id).toBe(userId);
});

test.only ('Company Overview', async({ request }) => {
    const response = await request.get(`/api/v1/dashboards/company-admins/${companyId}/company-overview`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    expect(response.status()).toBe(200);
    let responseBody = await response.json();

    // Check that data.name is a non-empty string, i.e. a valid company name
    expect(responseBody.data.name.length).toBeGreaterThan(0);

    // Check valid logo image file (.jpeg or .jpg or .png)
    const imageUrlPattern = /\.(jpeg|jpg|png)$/i;
    expect(responseBody.data.logo).toMatch(imageUrlPattern);

    // Check if the company is active
    expect(responseBody.data.status).toBe(true);
})