
const datapage=require('../pageobjects/EPAM_addDatapage');
const checkoutpage=require('../pageobjects/EPAM_checkoutpage');
const finishpage=require('../pageobjects/EPAM_finishpage');
const loginpage=require('../pageobjects/EPAM_loginpage');
const productspage=require('../pageobjects/EPAM_productspage');
const chaiExpect = require('chai').expect
let reqProdPrices;
let prodsToAdd=["Sauce Labs Backpack","Sauce Labs Bolt T-Shirt"];
describe('Validating the complete saucedemo Website',async ()=>{

    it("Validating the login functionality on the website",async()=>{
        await browser.url("https://www.saucedemo.com/");
        await loginpage.LoginUsingUsernameNPasswd("standard_user","secret_sauce");
        await browser.pause(2000);
    })
    it("Validating the fucntionality to add products to the page",async ()=>{
        //post login
        await productspage.AddProdToCart(prodsToAdd);      
    })
    it("Validating the flow to capture the expected price of products added from the checkout page",async()=>{
        reqProdPrices= await checkoutpage.ValidatePriceOfProducts(prodsToAdd);
        console.log("printing from the main block to check the values of array are passed correctly through methdos"+reqProdPrices);
     })
     it("Validating that user is able to add demogreaphics details to proceed to final page",async()=>{
        await datapage.AddUserData("Vijay","Yadav","421501"); 
     })

    it.skip("Finishing the process by adding validatingthe correct prices are displayed at final page",async()=>{
        await finishpage.completeProcess(reqProdPrices);     
    })

})