const { test, expect } = require('@playwright/test');

const loginData = require(`../fixtures/fixture.json`);
const emailError = require(`../errorMessages/emailErrors.json`);
const passError = require(`../errorMessages/passErrors.json`);
const otpError = require(`../errorMessages/otpErrors.json`);
const { loginPage } = require('../pom/login.po.js');
const { forgotPassPage } = require('../pom/forgotPass.po.js');
const { dashboardPage } = require(`../pom/dashboard.po.js`);

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.goto('https://app-dev.velorona.net/');
});

test.describe('Login_004 Verify Login Form fields if they are optional', () => {
    test('Login_004 Email and password both empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.login('',''); 
        await login.select(emailError.required);
        await login.select(passError.required);
    })
    test('Login_004 Email only empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.login('', loginData.valid.user.password); 
        await login.select(emailError.required);
    })
    test('Login_004 password only empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.user.email,''); 
        await login.select(passError.required);
    })
    test('Login_004 Email must be valid', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.invalid.email,loginData.valid.user.password); 
        await login.select(emailError.invalid);
    })
})

test.describe('Login_005 Verify failed login with Mismatched credentials/ unregistered data', () => {
    test('Login_005', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.mismatched.email, loginData.mismatched.password); 
        await login.select('Invalid Credentials');
    })
})

test.describe('Login_006 Verify Forgot Password Page', () => {
    test('Login_006', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
    })
    test('Login_006 Return to Sign in', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.returnToSignIn();
    })
})

test.describe('Login_008 Verify email field is compulsory (Forgot Password)', () => {
    test('Login_008', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword('', emailError.required);
    })
})

test.describe('Login_009 Verify Change Password page (Forgot Password)', () => {
    test('Login_009 Title', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
    })
    test('Login_009 Return to Sign in', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.returnToSignIn();
    })
})

test.describe('Login_011 Verify Invalid OTP (Forgot Password)', () => {
    test('Login_011 Invalid OTP', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("123456")
        await forgot.passwordWrite(loginData.valid.user.password)
        await forgot.confirmPasswordWrite(loginData.valid.user.password)
        await forgot.resetPass()
        await forgot.select(otpError.invalid)
    })
    test('Login_011 OTP cannot be empty', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite('')
        await forgot.passwordWrite(loginData.valid.user.password)
        await forgot.confirmPasswordWrite(loginData.valid.user.password)
        await forgot.resetPass()
        await forgot.select(otpError.nonEmpty2)
    })
})

test.describe('Login_012 Verify Password criteria and matching (Forgot Password)', () => {
    test('Login_012 Password missmatch', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("000000")
        await forgot.passwordWrite(loginData.valid.user.password)
        await forgot.confirmPasswordWrite(loginData.invalid.password)
        await forgot.resetPass()
        await forgot.select(passError.missmatch)
    })
    test('Login_012 Criteria not fulfilled', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite('')
        await forgot.passwordWrite(loginData.invalid.password)
        await forgot.confirmPasswordWrite(loginData.invalid.password)
        await forgot.resetPass()
        await forgot.isPasswordInputRed()
    })
})

test.describe('Login_013 Reset Password Successful (Forgot Password)', () => {
    test.only('Login_013 Reset Password Success', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("000000")
        await forgot.passwordWrite(loginData.valid.user.newPassword1)
        await forgot.confirmPasswordWrite(loginData.valid.user.newPassword1)
        await forgot.resetPass()
        await forgot.select("Password has been reset successfully!")
    })
})

test.describe('Login_014 Verify Reset Password Successful Page Components (Forgot Password)', () => {
    test('Login_014 Back to login Button', async ({ page }) => {
        const login = new loginPage(page);
        await login.forgotPass();
        const forgot = new forgotPassPage(page);
        await forgot.resetPassword(loginData.valid.user.email, "For security reasons, an OTP has been sent to your email.");
        await forgot.otpWrite("000000")
        await forgot.passwordWrite(loginData.valid.user.newPassword2)
        await forgot.confirmPasswordWrite(loginData.valid.user.newPassword2)
        await forgot.resetPass()
        await forgot.select("Password has been reset successfully!")
        await forgot.back()
        await forgot.select("User Login")
    })
})

test.describe('Login_015 Verify OTP Page', () => {
    test('Login_015', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.user.email, loginData.valid.user.password); 
        const selectMessage = 'OTP has been sent to your email';
        await login.select(selectMessage);
    })
})

test.describe('Login_017 Verify Non empty OTP', () => {
    test('Login_017', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.user.email, loginData.valid.user.password); 
        const otpPass = ''
        await login.otpWrite(otpPass);
        await login.select(otpError.nonEmpty);
    })
})

test.describe('Login_018 Verify Invalid OTP', () => {
    test('Login_018', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.user.email, loginData.valid.user.password); 
        const otpPass = '123456'
        await login.otpWrite(otpPass);
        await login.select(otpError.invalid);
    })
})

test.describe('Login_019 Verify Successful Login', () => {
    test('Login_019', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.valid.user.email, loginData.valid.user.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        const selectMessage = 'Welcome';
        await login.select(selectMessage);
    })
})

test.describe('Login_020 Verify optional OTP for Remember me enabled', () => {
    test('Login_020', async ({ page }) => {
        const login = new loginPage(page);
        await login.loginWithRememberMe(loginData.valid.user.email, loginData.valid.user.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("Welcome");
        const dashboard = new dashboardPage(page);
        await dashboard.logOut1();
        await login.select("User Login");
        await login.login(loginData.valid.user.email, loginData.valid.user.password);
        await login.select("Welcome");
    })
})

test.describe(`Login_021 Verify 'No Roles Found' page for new user`, () => {
    test('Login_021 No Roles Found', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.newUser.email, loginData.newUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
    })
    test ('Login_021 Go to Login', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.newUser.email, loginData.newUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
        const dashboard = new dashboardPage(page);
        await dashboard.goToLogin();
        await login.select("User Login");
    })
})

test.describe(`Login_024 Verify 'No Roles Found' page for inactive user`, () => {
    test('Login_024 No Roles Found', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.inactiveUser.email, loginData.inactiveUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
    })
    test ('Login_024 Go to Login', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.inactiveUser.email, loginData.inactiveUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
        const dashboard = new dashboardPage(page);
        await dashboard.goToLogin();
        await login.select("User Login");
    })
})

test.describe(`Login_025 Verify 'No Roles Found' page for archived user`, () => {
    test('Login_025 No Roles Found', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.archivedUser.email, loginData.archivedUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
    })
    test ('Login_025 Go to Login', async ({ page }) => {
        const login = new loginPage(page);
        await login.login(loginData.archivedUser.email, loginData.archivedUser.password); 
        const otpPass = '000000'
        await login.otpWrite(otpPass);
        await login.select("No Roles Found!");
        const dashboard = new dashboardPage(page);
        await dashboard.goToLogin();
        await login.select("User Login");
    })
})
