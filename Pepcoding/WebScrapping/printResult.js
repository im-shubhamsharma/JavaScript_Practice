const jsdom = require("jsdom");

const request =  require("request");

let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard";

// let url = "https://www.espncricinfo.com/series/afghanistan-in-zimbabwe-2022-1310918/zimbabwe-vs-afghanistan-2nd-odi-1310944/full-scorecard";

request(url,cb);

function cb (error, response, body){
    if(error){
        console.log(error);
    }
    else if(response && response.statusCode == 404){
        console.log("Page not found");
    }
    else{
        extractData(body);
    }
}

function extractData(html){
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(html);
    let document = dom.window.document;

    let output = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
    let result = output[0].textContent;
    console.log(result);
}