const puppeteer = require("puppeteer");
const email = "pomar48382@jrvps.com";

async function fn(){
    const browserReperesntativeObj = await puppeteer.launch({
        headless : false,
        defaultViewPort : null,
        args : ["--start maximized","--disable-notification"]
    });
    
    const tab = await browserReperesntativeObj.newPage();

    await tab.goto("https://www.hackerrank.com/auth/login");

    await tab.type("#input-1",email, {delay:200});
    await tab.type("#input-2",'qwerty12345', {delay:200});
    await tab.keyboard.press('Enter');
}

fn();

