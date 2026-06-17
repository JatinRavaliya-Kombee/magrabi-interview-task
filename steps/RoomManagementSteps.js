import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pages/LoginPage.js';
import roomPage  from '../pages/RoomManagementPage.js';

// ─── Background ──────────────────────────────────────────────────────────────

Given('user opens the Magrabi login page', async () => {
    await loginPage.open();
});

Given('user enters email and submits', async () => {
    await loginPage.enterEmail();
});

Given('user enters OTP {string} and clicks login', async (otp) => {
    await loginPage.enterOtp(otp);
});

// ─── Scenario 1 ──────────────────────────────────────────────────────────────

When('user expands the sidebar and clicks Room Management', async () => {
    await roomPage.expandSidebarAndGoToRooms();
});

Then('Room Management page should be displayed', async () => {
    await expect(browser).toHaveUrl(expect.stringContaining('/rooms'));
});

// ─── Scenario 2 ──────────────────────────────────────────────────────────────

When('user navigates to Room Management and clicks New Room', async () => {
    await roomPage.expandSidebarAndGoToRooms();
    await roomPage.clickNewRoom();
});

When('user enters room name {string} and description {string}', async (name, desc) => {
    await roomPage.fillRoomDetails(name, desc);
});

Then('user clicks Create button and room is created', async () => {
    await roomPage.clickCreate();
});
