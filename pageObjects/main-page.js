class MainPage {
    get headerText() {return $('//h3');};
    get nameInput() {return $('//input[@id="et_pb_contact_name_0"]');};
    get emailInput() {return $('//input[@id="et_pb_contact_email_0"]');};
    get submitEmailMeButton() {return $('//button[@class="et_pb_contact_submit et_pb_button"]');};
    get otherRadioButton() {return $('//input[@value="other"]');};
    get audiDropDownOption() {return $('//option[@value="audi"]');};
    get automationArchitectSalary() {return $('//*[@id="htmlTableId"]/tbody/tr[3]/td[3]');};
    get loginPageButton() {return $('//a[@href="https://courses.ultimateqa.com/users/sign_in"]');};
    get firstTitle() {return $('//*[@id="htmlTableId"]/tbody/tr[2]/td[1]');};
    get secondTitle() {return $('//*[@id="htmlTableId"]/tbody/tr[3]/td[1]');};
    get thirdTitle() {return $('//*[@id="htmlTableId"]/tbody/tr[4]/td[1]');};

    async getHeaderText(){
        await this.headerText().getText();
    }
    
    async submitForm(name, email){
        await this.nameInput().setValue(name);
        await this.emailInput().setValue(email);
        await this.submitEmailMeButton().click();
    }

    async clickOtherRadioButton(){
        await this.otherRadioButton().click();
    }

    async selectAudiDropDownOption(){
        await this.audiDropDownOption().click();
    }

    async getAutomationArchitectSalaryText(){
        await this.automationArchitectSalary().getText();
    }

    async clickLoginPageButton(){
        await this.loginPageButton().click();
    }

    async printTitles(){
        await console.log(this.firstTitle, this.secondTitle, this.thirdTitle);
    }

}
module.exports = new MainPage();