const MainPage = require('../../pageObjects/main-page');
const LoginPage = require('../../pageObjects/login-page');
const CreateNewAccountPage = require('../../pageObjects/create-new-account-page');
const DashboardPage = require('../../pageObjects/dashboard-page');
const mainPageUrl = 'https://ultimateqa.com/simple-html-elements-for-automation/';



describe('Automation for simple html elements for', () => {

    describe('Automation for simple controls section', () => {
        beforeEach(async () => {
            await browser.url(mainPageUrl);
        });
        
        afterEach(async () => {
            browser.deleteCookies();
        });

        it('Enter name and email and submit form', async () => {
            await MainPage.submitForm('newName', 'newEmail@fakemail.com');
            const headerTxt = await MainPage.getHeaderText();
            await expect(headerTxt).toBeDisplayed();
        });

        it('click on the "Other" radio button', async () => {
            await MainPage.clickOtherRadioButton();
            const radioButton = await MainPage.otherRadioButton();
            await expect(radioButton).toBeSelected();
        });

        it('click "Audi" as the drop-down option', async () => {
            await MainPage.selectAudiDropDownOption();
            const audiDropDown = await MainPage.audiDropDownOption();
            await expect(audiDropDown).toBeSelected();
        });
    });

    describe('Automation for advanced controls section', () => {
        beforeEach(async () => {
            await browser.url(mainPageUrl);
        });
        
        afterEach(async () => {
            browser.deleteCookies();
        });

        it("Verify and print out the Automation Testing Architect's salary", async () => {
            const automationArchitectSalaryValue = await MainPage.getautomationArchitectSalaryText();
            await console.log(automationArchitectSalaryValue);
            await expect(automationArchitectSalaryValue).toEqual("$120,000+")
        });
    });

    describe('Automation for common scenarios', () => {
        beforeEach(async () => {
            await browser.url(mainPageUrl);
            await MainPage.clickLoginPageButton();
            await LoginPage.clickCreateAccountLink();
            await CreateNewAccountPage.submitUser();
        });
        
        afterEach(async () => {
            browser.deleteCookies();
        });

        it('Click "Go to login page" create new account and verify successful login', async () => {
            const acctName = await DashboardPage.getAccountName();
            await expect(acctName).toEqual('Chester T');
        });

    });

    describe('Automation for bonus', () => {
        beforeEach(async () => {
            await browser.url(mainPageUrl)
        });
        
        afterEach(async () => {
            browser.deleteCookies();
        });

        it('Print out the titles from the "HTML table with no id" section', async () => {
            await MainPage.printTitles();
        });
    });
});