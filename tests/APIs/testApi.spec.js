const { test, expect } = require('@playwright/test');

const loginData = require(`../../fixtures/fixture.json`);
const { log } = require('console');

let token = '';
let companyId = '';


test ('Login using API Payroll', async ({ request }) => {
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

test ('Login using API', async ({ request }) => {
    const response = await request.post('/api/v1/auth/user/login', {
        data: {
            email: `${loginData.valid.admin.email}`,
            password: `${loginData.valid.admin.password}`
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.data.accessToken;
});

test ('Latest Login', async ({ request }) => {
    const response = await request.get(`/api/v1/dashboards/company-admins/${companyId}/latest-logins`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    console.log(responseBody);
});