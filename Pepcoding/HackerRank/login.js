const puppeteer = require("puppeteer");
const loginCredential = require("./loginCredential");

async function fn() {
  const browserReperesntativeObj = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo: 30,
  });

  const tab = await browserReperesntativeObj.newPage();

  await tab.goto("https://www.hackerrank.com/auth/login");

  await tab.type("#input-1", loginCredential.email, { delay: 20 });
  await tab.type("#input-2", loginCredential.password, { delay: 20 });
  await tab.keyboard.press("Enter");

  await waitAndClickTopics("Java", tab);
  await waitAndClickQuestion("Java Loops II", tab);
}

async function waitAndClickTopics(name, tab) {
  await tab.waitForSelector(".topics-list", { visible: true });
  await tab.evaluate(browserFun, name);

  function browserFun(name) {
    let topicsListArr = document.querySelectorAll(".topics-list .topic-card a");
    for (let i = 0; i < topicsListArr.length; i++) {
      let topicListSingleElem = topicsListArr[i];
      let topicName = topicListSingleElem.textContent.trim();
      console.log(name, topicName);
      if (topicName === name) {
        topicListSingleElem.click();
        break;
      }
    }
  }
}

async function waitAndClickQuestion(name, tab) {
  await tab.waitForSelector(".challenges-list a", { visible: true });
  await tab.evaluate(findAndClick, name);

  function findAndClick(name) {
    let questionListArr = document.querySelectorAll(".challenges-list a");
    for (let i = 0; i < questionListArr.length; i++) {
      let questionListSingleElem = questionListArr[i];
      let questionName = questionListSingleElem
        .querySelector("h4")
        .textContent.trim();
      // console.log(name, questionName);
      if (questionName.includes(name)) {
        questionListSingleElem.click();
        break;
      }
    }
  }
}

fn();
