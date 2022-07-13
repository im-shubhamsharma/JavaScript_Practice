const puppeteer = require("puppeteer"); // npm i puppeteer

async function fn() {
  const browserReperesntativeObj = await puppeteer.launch({
    headless: false,
    // executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notification"],
    slowMo: 100,
  });
  //new tab
  const tab = await browserReperesntativeObj.newPage();
  //to go to google's home page
  await tab.goto("https://www.google.com");
  await tab.type("input[type='text']", "Pepcoding", { delay: 100 });
  //to press specific key
  await tab.keyboard.press("Enter");
  await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true });
  await tab.click(".LC20lb.MBeuO.DKV0Md", { delay: 200 });

  await tab.waitForSelector(".site-nav-li", { visible: true });
  await tab.click(".site-nav-li");

  await tab.waitForSelector("#courses", { visible: true });
  let details = await tab.evaluate(browserMeChalneWalaFunction);
  console.log(details);
  // console.table(details);

  function browserMeChalneWalaFunction() {
    let coursesArr = document.querySelectorAll(
      "#courses .card.course-tile.card-cs.rounded-border"
    );
    let detailsArr = [];
    for (let i = 0; i < coursesArr.length; i++) {
      let coursesHTML = coursesArr[i];

      let date = coursesHTML.querySelector(".date").textContent.trim();
      let courseName = coursesHTML
        .querySelector(".right.course-name-text.bolder")
        .textContent.trim();

      let priceArr = coursesHTML.querySelectorAll(".cart-sec h4");
      let price = priceArr.length == 1 ? priceArr[0] : priceArr[1];
      price = price.textContent.trim();

      let featuresArr = coursesHTML.querySelectorAll(".col.l9.s9");
      let features = "";
      for (let j = 0; j < featuresArr.length; j++) {
        features = features + featuresArr[j].textContent + ", ";
      }

      let courseObj = {
        courseName,
        date,
        price,
        features,
      };
      detailsArr.push(courseObj);
      // console.log("Course Name = " + courseName);
      // console.log("Course date = " + date);
      // console.log("Course price = " + price);
      // console.log("Course features = " + features);
      // console.log("--------------------");
      // console.log("--------------------");
    }
    // console.table(detailsArr);
    return detailsArr;
  }
}

fn();

//course-desc   - course description
//price - col 16 s12 m6
//title - right course-name-text bolder
//date - .date
//know more - course-enroll-btn
