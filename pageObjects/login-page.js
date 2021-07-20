class LoginPage {
    get createAccountLink() {return $('//a[@href="/users/sign_up"]');};

    async clickCreateAccountLink(){
        await this.otherRadioButton().click();
    }

}
module.exports = new LoginPage();