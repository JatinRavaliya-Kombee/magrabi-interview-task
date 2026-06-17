# 🐛 Interview Task - Bug Fix Challenge

## Project: Magrabi Room Management Automation

**Repo:** https://github.com/JatinRavaliya-Kombee/magrabi-interview-task  
**Framework:** WebdriverIO + Cucumber (JavaScript)  
**URL Under Test:** https://stagingreserve.magrabi.com/login

---

## 📋 Task Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/JatinRavaliya-Kombee/magrabi-interview-task.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run tests — they will **fail**
   ```bash
   npm test
   ```

4. Find and fix **3 bugs** in the page object files

5. Run tests again — **all should pass**
   ```bash
   npm test
   ```

---

## 🐞 Bugs to Fix

### Bug 1 — Easy
- **File:** `pages/LoginPage.js`
- **Method:** `otpBox(index)`
- **Hint:** OTP input field no `data-testid` attribute wrong chhe

---

### Bug 2 — Medium
- **File:** `pages/LoginPage.js`
- **Method:** `enterEmail()`
- **Hint:** Login karvani email address wrong set chhi chhe

---

### Bug 3 — Hard
- **File:** `pages/RoomManagementPage.js`
- **Locator:** `newRoomBtn`
- **Hint:** "New Room" button no `data-testid` selector wrong chhe

---

## ✅ Expected Result After Fix

```
Room Management
  Navigate to Room Management page
    ✓ Given user opens the Magrabi login page
    ✓ And user enters email and submits
    ✓ And user enters OTP "123456" and clicks login
    ✓ When user expands the sidebar and clicks Room Management
    ✓ Then Room Management page should be displayed

  Create a new room
    ✓ Given user opens the Magrabi login page
    ✓ And user enters email and submits
    ✓ And user enters OTP "123456" and clicks login
    ✓ When user navigates to Room Management and clicks New Room
    ✓ And user enters room name "Interview Room" and description "Test room for interview"
    ✓ Then user clicks Create button and room is created

10 passing
```

---

## 📁 Project Structure

```
magrabi-interview-task/
├── features/
│   └── RoomManagement.feature   ← BDD scenarios
├── pages/
│   ├── LoginPage.js             ← 🐛 Bug 1, Bug 2 yahan chhe
│   └── RoomManagementPage.js    ← 🐛 Bug 3 yahan chhe
├── steps/
│   └── RoomManagementSteps.js   ← Step definitions
├── wdio.conf.js                 ← WebdriverIO config
└── package.json
```

---

*Good Luck! 🚀*
