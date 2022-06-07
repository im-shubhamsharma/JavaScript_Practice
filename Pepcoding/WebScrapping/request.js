let fs = require("fs");
const jsdom = require("jsdom");

// npm i request   -> npm
const request = require("request");
let url = "http://www.google.com";

// request working ->
// request to the given url
// response  -> request function  -> cb call  ->  data put

request(url, cb);

// error -> if there is any error while executing the request
// response -> header + body
// body -> html

function cb(error, response, body) {
  if (error) {
    console.log(error);
  } else if (response && response.statusCode == 404) {
    console.log("Page not found");
  } else {
    //   console.log(body);
    //   fs.writeFileSync("index.html", body)
    extractData(body);
  }
}

function extractData(html) {
  const JSDOM = jsdom.JSDOM;
  //1.  string form me  -< html content provide
  // pass to new JSDOM
  let dom = new JSDOM(html);
  // 2.
  let document = dom.window.document;

  //   let firstButton = document.querySelectorAll(".lsb");
  //   let content = firstButton[0].value;
  //   console.log("content: ", content);

  let languages = document.querySelectorAll("#SIvCob a");
  for (let i = 0; i < languages.length; i++) {
    let content = languages[i].textContent;
    console.log("content " + i + ":" +  content);
  }
}

/* 
request("http://www.google.com", function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});
*/
