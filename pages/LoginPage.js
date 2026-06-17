class LoginPage {

    get emailInput()    { return $('[data-testid="login-email"]'); }
    get sendOtpBtn()    { return $('[data-testid="login-submit"]'); }
    get loginBtn()      { return $('[data-testid="verify-otp-submit"]'); }

    otpBox(index) {
        return $(`[data-testid="verify-otp-input-${index}"]`);
    }

    async open() {
        // Cookies clear karo so fresh login mile darak scenario ma
        await browser.deleteCookies();
        await browser.url('https://stagingreserve.magrabi.com/login');

        // Page fully load thay te wait karo
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/login'),
            { timeout: 15000, timeoutMsg: 'Login page load nahi thyu' }
        );

        // Email field visible thay te wait karo
        await this.emailInput.waitForDisplayed({ timeout: 30000 });
    }

    async enterEmail() {
        await this.emailInput.waitForDisplayed({ timeout: 20000 });
        await this.emailInput.setValue('jatin.ravaliya@kombee.com');

        await this.sendOtpBtn.waitForClickable({ timeout: 10000 });
        await this.sendOtpBtn.click();

        // OTP screen aave te wait karo
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

        // Dashboard load thay te wait karo
        await browser.pause(3000);
    }
}

export default new LoginPage();
