let itemstoAdd= ["iphone X","Nokia Edge"];    
class CheckoutPage{
    

    get allProdsLabelOnCheckoutPage(){return $$("//h4//a");}
    get itemsPrices(){return $$("//tbody//tr//td[4]//strong");}
    get checkoutPricewithCurrency(){return $("//tbody//tr[3]//td//strong");}


    async CheckProdsOnCheckoutPage(){
        for(let i=0;i<await this.allProdsLabelOnCheckoutPage.length;i++){
            let actprodName=await this.allProdsLabelOnCheckoutPage[i].getText();
            if(itemstoAdd.includes(actprodName)){
                console.log("Expected Product on the CHeckout Page !!")
            }
            else{ console.log("FLAW !! Product added are not on the Checkout Page");}

        }
    }

    async validatingTotalAmount(){
        let totalprice=0;
        for(let i=0;i<itemstoAdd.length;i++){
            let price= await this.itemsPrices[i].getText();
            console.log("price extracted   "+price)
            let actprice=parseInt(price.split(" ")[1]);
            console.log("price post splitting the values is  "+actprice)
            totalprice+=actprice;
        }
        console.log("Total Amount is   "+ totalprice)
        let checkedOutPrice=await this.checkoutPricewithCurrency.getText();
        let checkoutPrice=parseInt(await checkedOutPrice.split(" ")[1]);
        console.log("Final checkout Price is  "+ checkoutPrice)

        await expect(this.checkoutPricewithCurrency).toHaveTextContaining(totalprice)
        await browser.pause(1000);
        await browser.pause(2000)
    }

}

module.exports= new CheckoutPage();