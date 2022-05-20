let helpFnObj = require("./commands/help");
let organizeFnObj = require("./commands/organize");
let treeFnObj = require("./commands/tree");

let inputArr = process.argv.slice(2);

let command = inputArr[0];
let dirPath = inputArr[1];



switch (command) {
  case "help":
    helpFnObj.fn();
    break;
  case "tree":
    treeFnObj.fn();
    break;
  case "organize":
    organizeFnObj.fn(dirPath);
    break;
  default:
    console.log(
      "Invalid command - Please type help to see the list of all the commands"
    );
}
