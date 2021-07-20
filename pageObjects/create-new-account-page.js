class CreateNewAccountPage {
    get firstNameInput() {return $('//input[@id="user[first_name]"]');};
    get lastNameInput() {return $('//input[@id="user[last_name]"]');};
    get emailInput() {return $('//input[@id="user[email]"]');};
    get pwInput() {return $('//ipnut[@id="user[password]"]');};
    get termsAndConditionsButton() {return $('//ipnut[@id="user[password]"]');};
    get signUpButton() {return $('//input[@value="Sign up"]');};

    async submitUser(){
        await this.firstNameInput().setValue("Chester");
        await this.lastNameInput().setValue("Testersen");
        await this.emailInput().setValue("fake@faker.com");
        await this.pwInput().setValue("123456");
        await this.termsAndConditionsButton().click();
        await this.signUpButton().click();
    }

}
module.exports = new CreateNewAccountPage();