class AddDataPage{

    get firstnametxt(){return $("//input[@id='first-name']");}
    get lastname(){return $("//input[@id='last-name']");}
    get postalcode(){return $("//input[@id='postal-code']");}
    get continuebtn(){return $("//input[@id='continue']");}

        async AddUserData(firstname,lastname,Postalcode){
            await this.firstnametxt.setValue(firstname);
            await this.lastname.setValue(lastname);
            await this.postalcode.setValue(Postalcode);
            await this.continuebtn.click();
        }

}

module.exports= new AddDataPage();