const jsdom = require("jsdom");
const fs = require("fs");
const request = require("request");

let url =
  "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard";

// let url = "https://www.espncricinfo.com/series/afghanistan-in-zimbabwe-2022-1310918/zimbabwe-vs-afghanistan-2nd-odi-1310944/full-scorecard";

request(url, cb);

function cb(error, response, body) {
  if (error) {
    console.log(error);
  } else if (response && response.statusCode == 404) {
    console.log("Page not found");
  } else {
    extractData(body);
  }
}

function extractData(html) {
  const JSDOM = jsdom.JSDOM;
  let dom = new JSDOM(html);
  let document = dom.window.document;

  let output = document.querySelectorAll(
    ".ds-w-full.ds-table.ds-table-xs.ds-table-fixed"
  );
  let firstInningTable = output[1].innerHTML;
  let secondInningTable = output[3].innerHTML;

  let tableHTML =
    "<table>" +
    firstInningTable +
    "</table>" +
    "<table>" +
    secondInningTable +
    "</table>";
  // fs.writeFileSync("table.html", tableHTML);
  getDataFromBowlingData(tableHTML);
}

function getDataFromBowlingData(tableHTML) {
  const JSDOM = jsdom.JSDOM;
  let dom = new JSDOM(tableHTML);
  let document = dom.window.document;

  let allRows = document.querySelectorAll("tbody tr.ds-text-tight-s");

  for (let i = 0; i < allRows.length; i++) {
    let playerData = allRows[i].querySelectorAll("td");
    let playerName = playerData[0].textContent;
    let totalWickets = playerData[4].textContent;
    console.log(playerName + " takes " + totalWickets + " wickets");
  }


}
