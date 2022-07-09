const puppeteer = require("puppeteer");  // npm i puppeteer

async function fn(){
    const browserReperesntativeObj = await puppeteer.launch({
        headless : false
    });
    //new tab
    const tab = await browserReperesntativeObj.newPage();
    //to go to google's home page
    await tab.goto("https://www.google.com");
    await tab.type("input[type='text']",'Pepcoding', {delay:100});
    //to press specific key
    await tab.keyboard.press('Enter');
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
    await tab.click(".LC20lb.MBeuO.DKV0Md");
}

fn();