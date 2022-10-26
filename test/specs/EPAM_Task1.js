describe('ECommerce Applications Validation', async()=>{

    it('Login functionality Validation using the Correct Credentials',async()=>{
        //webdriver IO code will go here

        await browser.url("https://the-internet.herokuapp.com/login");
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("The Internet")

        await $("//input[@id='username']").setValue("tomsmith");
        await $("//input[@id='password']").setValue("SuperSecretPassword!");
        await $("//button[@type='submit']").click();
        await browser.pause(4000);
    })

})