const assert = require('assert')

describe("Validating the place website and performing respective actions on it",async()=>{

    before(() => {
        browser.enablePerformanceAudits()
    })

    xit("Validating the change in GEO-Locations",async ()=>{
        // await browser.startTracing();
        await browser.url("https://kawasaki-india.com/dealer-locator");
        await browser.waitUntil("https://kawasaki-india.com/dealer-locator");

        let metrics= await browser.getMetrics();
        await console.log("Below are the metrics"+ metrics);
        
    })

    it('should load within performance budget', async () => {
        // await browser.url("https://kawasaki-india.com/dealer-locator/");
        await browser.cdp('Emulation','setGeolocationOverride',{latitude:35.6762,longitude:139.6503,accuracy:1});
        await browser.url("https://kawasaki-india.com/dealer-locator/");
    })

    after(async () => {
        await browser.disablePerformanceAudits()
    })    

    // after(()=>{
    //     browser.disablePerformanceAudits();
    // })


})