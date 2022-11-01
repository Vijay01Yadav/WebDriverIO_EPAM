class AddProductsPage{

    get allProdLabels(){return $$("(//div[@class='inventory_item_name'])");}
    get allProdButtons(){return $$("(//div[@class='inventory_item_price']//following-sibling::button)");}
    get allProdPrice(){return $$("(//div[@class='inventory_item_price'])");}
    get Cartbtn(){return $("//a[@class='shopping_cart_link']");}

    async AddProdToCart(prodsToAdd){

        await this.Cartbtn.waitForClickable();
        console.log("Products to be added are -> " +prodsToAdd);
        console.log("Total count of prods to be added are  ->"+ prodsToAdd.length);
        for(let i=0;i<await this.allProdLabels.length;i++){
            // console.log(await this.allProdLabels[1].getText());
            console.log("inside for");
            // await browser.pause(2000);
            // console.log("check"+ await this.allProdLabels[1].getText());
            let productOnSite=await this.allProdLabels[i].getText();
            // console.log("1")
            console.log(i+" th prod that is supposed to be added is "+ productOnSite);
            // console.log("2")
            if(prodsToAdd.includes(productOnSite)){
                console.log("3")
                console.log("inside if because a match was found for  "+ productOnSite)
                // reqProdPrices.push(await allprodPrice[i]);
                await (await this.allProdButtons[i]).waitForClickable();
                await this.allProdButtons[i].click();
            }
        }
        // console.log("The prices for the items are ->  " +reqProdPrices)
        await this.Cartbtn.click();
        await browser.pause(2000);
    }
}

module.exports = new AddProductsPage();