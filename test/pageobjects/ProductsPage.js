const expectChai=require('chai').expect
let itemstoAdd= ["iphone X","Nokia Edge"];    
class ProductsPage{
   
    get checkoutCARTBtn(){return $("//a[contains(text(),'Checkout')]");}
    get popUpWindow(){return $("//div[@class='modal-body']");}
    get allProdsLabel(){return $$("//h4//a");}
    get allProdsBtn(){return $$("//div[@class='card-body']//following-sibling::div//button");}
    get CartCheckoutBtn(){return $("//a[contains(text(),'Checkout')]");}



    async ValidatedCartAvailability(){
       await  this.checkoutCARTBtn.waitForDisplayed();
    }

    async addingItemsToCart(){
        
        await this.CartCheckoutBtn.waitForClickable();
        console.log("Products available on the Products page are    "+ this.allProdsLabel.length);

        for(let i=0;i<await this.allProdsLabel.length;i++){
            let actprodName=await this.allProdsLabel[i].getText();
            console.log(i+" element has the name as "+ actprodName);
            if(itemstoAdd.includes(actprodName)){
                await this.allProdsBtn[i].click();
            }
        }

        await this.CartCheckoutBtn.click();
        await browser.pause(3000);
    }
}

module.exports= new ProductsPage()