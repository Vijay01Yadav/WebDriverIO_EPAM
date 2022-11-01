let reqProdPrices=[];
class CheckoutPage{
 
    get checkbtn(){return $("//button[@id='checkout']");}
    get allProdPrice(){return $$("(//div[@class='inventory_item_price'])");}

async ValidatePriceOfProducts(prodsToAdd){
    console.log("here")
    for(let i=0;i<await prodsToAdd.length;i++){
        console.log("isnide for")
        let actprodPrices= await this.allProdPrice[i].getText();
        console.log("Price of Producst added are " +actprodPrices)
        reqProdPrices.push(await actprodPrices);
        // chaiExpect(reqProdPrices).to.have(actprodPrices);
    }
    console.log("array of price  " +reqProdPrices);
    await this.checkbtn.click();
    return reqProdPrices;
}
    

}
module.exports= new CheckoutPage();