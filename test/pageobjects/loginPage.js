const expectChai=require('chai').expect
class loginPage{

    get username(){return $("//input[@id='username']");}
    get Password(){return $("//input[@id='password']");}
    get UserRadiobtn(){return $("//span[@class='radiotextsty' and contains(text(),'User')]");}
    get popUpWindow(){return $("//div[@class='modal-body']");}
    get popUpCancelBtn(){return $("//button[contains(text(),'Cancel')]");}

    get AdminRadioBtn(){return $("//span[@class='radiotextsty' and contains(text(),'Admin')]");}
    get AdminRadioSelectedStatus(){return $("//span[@class='radiotextsty' and contains(text(),'Admin')]//following-sibling::input");}
    get popUpOkaybtn(){return $("//button[contains(text(),'Okay')]");}
    get TypeOfUserDropDown(){return $("//select");}
    get SignInBtn(){return $("//input[@id='signInBtn']");}

    async CompleteLoginFeature(username1,passWord1){
        await this.username.setValue(username1);
        await this.Password.setValue(passWord1)
        await this.UserRadiobtn.click();
        await this.popUpWindow.waitForDisplayed();
        await this.popUpCancelBtn.click();


        await this.AdminRadioSelectedStatus;
        await console.log("The Admin Radio selection status is  true "+await this.AdminRadioSelectedStatus.isSelected());
        await expect(this.AdminRadioSelectedStatus===true)

        await this.UserRadiobtn.click();
        await this.popUpWindow.waitForDisplayed();
        await this.popUpOkaybtn.click();
        await console.log("The Admin Radio Selection status is false  "+await this.AdminRadioSelectedStatus.isSelected());

        await this.AdminRadioBtn.click();
        await console.log("The Admin Radio Selection status is true section  "+await this.AdminRadioSelectedStatus.isSelected());
        // await this.popUpWindow.not.toBeDisplayed();
        await browser.pause(2000);
        await this.TypeOfUserDropDown.click();
        await this.TypeOfUserDropDown.selectByAttribute('value','teach');

        await expectChai(await this.TypeOfUserDropDown.getValue()).to.equal("teach");
        await this.SignInBtn.click();
        await browser.pause(3000)
        await expect(browser).toHaveUrlContaining("shop");
    }


}
module.exports= new loginPage()