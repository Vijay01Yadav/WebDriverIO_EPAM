const chaiExpect=require('chai').expect
describe('Validating the External Wait in WebDriverIO', async()=>{

    it('Validating the presence of spedific item explicitly before performing subsequent task',async()=>{
        //webdriver IO code will go here

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
        await $("//button").click();
        let successmsg="Hello World!";
        const label=await $("//h4[contains(text(),'Hello World!')]")
        await expect(label).toBeDisplayed();
        await chaiExpect(await label.getText()).to.eql(successmsg);
        
        await browser.pause(2000);
    })

})