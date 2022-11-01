const loginpage= require('../pageobjects/loginPage');
const productspage=require('../pageobjects/ProductsPage');
const checkoutpage=require('../pageobjects/CheckoutPage');
const placeorder=require('../pageobjects/placeOrder');

describe("Validating the commplete E2E Flow for the ECommerce WebSite- E2ETest",async()=>{
    
    
    it("Validating the Login Feature in this block",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        loginpage.CompleteLoginFeature("rahulshettyacademy","learning");        
        productspage.ValidatedCartAvailability();
        
    });
    it("Validating the items added on the Product Page",async()=>{
        await productspage.addingItemsToCart();
    })
    it("Validating the added items are available on the Checkout Page",async()=>{
        await checkoutpage.CheckProdsOnCheckoutPage();
    })

    it("Validating the Total amount is sumation of individual items on the checkout page",async()=>{
        await checkoutpage.validatingTotalAmount();
    })

    it("Validating the Delivery Location N Terms and Proceeding",async()=>{
        await placeorder.PlaceOrderFucntionality();
    })
})