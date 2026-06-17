class RoomManagementPage {

    get sidebarToggle()     { return $('div.p-4.flex.items-center button'); }
    get roomMgmtLink()      { return $('a[href="/rooms"]'); }
    get newRoomBtn()        { return $('[data-testid="rooms-create-button"]'); }
    get roomNameInput()     { return $('[data-testid="room-form-name-input"]'); }
    get roomDescInput()     { return $('[data-testid="room-form-description-input"]'); }
    get createBtn()         { return $('[data-testid="room-form-submit-button"]'); }

    async expandSidebarAndGoToRooms() {
        await this.sidebarToggle.waitForClickable({ timeout: 15000 });
        await this.sidebarToggle.click();
        await this.roomMgmtLink.waitForClickable({ timeout: 15000 });
        await this.roomMgmtLink.click();
    }

    async clickNewRoom() {
        await this.newRoomBtn.waitForClickable({ timeout: 15000 });
        await this.newRoomBtn.click();
    }

    async fillRoomDetails(name, description) {
        await this.roomNameInput.waitForDisplayed({ timeout: 15000 });
        await this.roomNameInput.setValue(name);
        await this.roomDescInput.setValue(description);
    }

    async clickCreate() {
        await this.createBtn.waitForClickable({ timeout: 15000 });
        await this.createBtn.click();
    }
}

export default new RoomManagementPage();
