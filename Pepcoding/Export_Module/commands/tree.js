let fs = require("fs");
let path = require("path");
function tree(dirPath) {
  dirPath = dirPath != undefined ? dirPath : process.cwd();

  let treeArr = fs.readdirSync(dirPath);

  //    let parentDir = dirPath.split(`\\`);
  //    console.log(parentDir[parentDir.length-1]);

  console.log(path.basename(dirPath));

  for (i = 0; i < treeArr.length; i++) {
    console.log("-" + treeArr[i]);
  }

  // console.log("Tree command executed successfully with path:", dirPath != undefined ? dirPath : process.cwd());
}

module.exports = {
  fn: tree,
};
