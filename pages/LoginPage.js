class LoginPage {

    get emailInput()    { return $('[data-testid="login-email"]'); }
    get sendOtpBtn()    { return $('[data-testid="login-submit"]'); }
    get loginBtn()      { return $('[data-testid="verify-otp-submit"]'); }

    otpBox(index) {
        // BUG 1: Wrong data-testid prefix - 'otp-input' instead of 'verify-otp-input'
        return $(`[data-testid="otp-input-${index}"]`);
    }

    async open() {
        await browser.deleteCookies();
        await browser.url('https://stagingreserve.magrabi.com/login');
        await this.emailInput.waitForDisplayed({ timeout: 30000 });
    }

    async enterEmail() {
        await this.emailInput.waitForDisplayed({ timeout: 20000 });
        // BUG 2: Wrong email address
        await this.emailInput.setValue('test.user@gmail.com');

        await this.sendOtpBtn.waitForClickable({ timeout: 10000 });
        await this.sendOtpBtn.click();

        await this.otpBox(0).waitForDisplayed({ timeout: 30000 });
    }

    async enterOtp(otp) {
        for (let i = 0; i < otp.length; i++) {
            const box = this.otpBox(i);
            await box.waitForDisplayed({ timeout: 15000 });
            await box.waitForClickable({ timeout: 5000 });
            await box.click();
            await box.setValue(otp[i]);
            await browser.pause(200);
        }

        await this.loginBtn.waitForClickable({ timeout: 10000 });
        await this.loginBtn.click();
        await browser.pause(3000);
    }
}

export default new LoginPage();
