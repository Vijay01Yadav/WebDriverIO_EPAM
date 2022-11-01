class FinishPage{
    get allProdPrice(){return $$("//div[@class='inventory_item_price']");}
    get finishbtn(){return $("//button[@id='finish']");}


    async completeProcess(reqProdPrices){
        for(let i=0;i<await this.allProdPrice.length;i++){
            let actProdPrices=await this.allProdPrice[i].getText();
            await expect(reqProdPrices.includes(actProdPrices));
        }
        await this.finishbtn.click();
    }

}

module.exports= new FinishPage();