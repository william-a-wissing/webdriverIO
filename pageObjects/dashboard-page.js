class DashboardPage {
    get createAccountNameDropDown() {return $('//a[@class="dropdown__toggle-button"]');};

    async getAccountName(){
        await this.createAccountNameDropDown().getText();
    }

}
module.exports = new DashboardPage();