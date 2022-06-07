// npm i jsdom
const jsdom = require("jsdom");
const fs = require("fs")
// const { JSDOM } = jsdom;
const JSDOM = jsdom.JSDOM

let htmlContent = fs.readFileSync("sample.html", "utf-8");

//1.  string form me  -< html content provide
// pass to new JSDOM
let dom = new JSDOM(htmlContent);
// 2. 
let document = dom.window.document;

// 3. logic -> help to get your html
// elements if you pass a selector

// document.querySelectorp("p");    --> first occurence of that html element
// document.querySelectorAll("p");  --> all occurence of that html element in the form of array of elements

const allPs = document.querySelectorAll("p");
console.log(allPs.length);
// console.log(allPs);

// content -> 
let firstPKaContent = allPs[0].textContent;
console.log("first para content:", firstPKaContent);

// let secondPKaContent = allPs[1].textContent;
// console.log("second para content: ", secondPKaContent);

let idWaleElements = document.querySelectorAll("#unique");
let content = idWaleElements[0].textContent;
console.log(content);