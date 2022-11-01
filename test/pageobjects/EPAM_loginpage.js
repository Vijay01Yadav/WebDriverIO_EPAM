class LogginPage{

    get username(){return $("//input[@id='user-name']");}
    get password(){return $("//input[@id='password']");}
    get loginbtn(){return $("//input[@id='login-button']");}

    async LoginUsingUsernameNPasswd(username,passwd){
        await this.username.setValue(username);
        await this.password.setValue(passwd);
        await this.loginbtn.click();
    }
}

module.exports= new LogginPage();