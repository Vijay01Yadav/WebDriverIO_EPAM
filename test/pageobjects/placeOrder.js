class PlaceOrder{

    get checkoutCTA(){return $("//button[contains(text(),'Checkout')]");}
    get placeDropDwn(){return $("//input[@id='country']");}
    get animation(){return $(".lds-ellipsis");}
    get allDropDwnOPtions(){return $$("//div[@class='suggestions']//li//a");}
    get TermscheckBox(){return $("//div[contains(@class,'checkbox')]//label");}
    get PurchaseCTA(){return $("//input[@value='Purchase']");}
    get successMessage(){return $("//div[contains(@class,'alert')]");}


    async PlaceOrderFucntionality(){
        await this.checkoutCTA.click();
        await this.placeDropDwn.setValue("Ind")
        await browser.pause(4000);
        await this.animation.waitForExist({reverse:true});
        for(let i=0;i<await this.allDropDwnOPtions.length;i++){
            let countryName=await this.allDropDwnOPtions[i].getText();
            if(countryName==="India"){
                await this.allDropDwnOPtions[i].click();
            }
        }

        await this.TermscheckBox.click();
        await this.PurchaseCTA.click();
        await expect(this.successMessage).toHaveTextContaining("Thank you! Your order will be delivered in next few weeks :-).")

    }
}

module.exports= new PlaceOrder();