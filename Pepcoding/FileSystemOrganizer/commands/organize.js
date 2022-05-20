let path = require("path");
let fs = require("fs");

function organize(dirPath) {
  let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
    images: ["jpg","jpeg","gif"]
  };
  
  let srcFolderPath = path.join(process.cwd(), "clutter");
  let content = fs.readdirSync(srcFolderPath);
  console.log(content);
  
  for (let i = 0; i < content.length; i++) {
    let fileType = path.extname(content[i]);
    fileType = fileType.slice(1);
  
    for (let key in types) {
      let typeArr = types[key];
      if (typeArr.includes(fileType)) {
        let destFolderPath = path.join(process.cwd(),"organizedFiles",key);
        if(!(fs.existsSync(destFolderPath))){
          fs.mkdirSync(destFolderPath);
        }
        let srcFilePath = path.join(srcFolderPath, content[i]);
        let destFilePath = path.join(destFolderPath, content[i]);
        fs.copyFileSync(srcFilePath, destFilePath);
      }
    }
  
  }
}

//---------------------------------------------------
//---------------------------------------------------

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  images: ["jpg","jpeg","gif"]
};

let srcFolderPath = path.join(process.cwd(), "clutter");
let content = fs.readdirSync(srcFolderPath);
console.log(content);

for (let i = 0; i < content.length; i++) {
  let fileType = path.extname(content[i]);
  fileType = fileType.slice(1);

  for (let key in types) {
    let typeArr = types[key];
    if (typeArr.includes(fileType)) {
      let destFolderPath = path.join(process.cwd(),"organizedFiles",key);
      if(!(fs.existsSync(destFolderPath))){
        fs.mkdirSync(destFolderPath);
      }
      let srcFilePath = path.join(srcFolderPath, content[i]);
      let destFilePath = path.join(destFolderPath, content[i]);
      fs.copyFileSync(srcFilePath, destFilePath);
    }
  }

}


//----------------------------------------------------
//----------------------------------------------------

module.exports = {
  fn: organize,
};
