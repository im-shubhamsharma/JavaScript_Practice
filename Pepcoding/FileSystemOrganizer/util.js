function returnFolderName(fileName) {
    let types = {
      media: ["mp4", "mkv", "mp3"],
      archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
      documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
      app: ["exe", "dmg", "pkg", "deb"],
    };
  
    let extName = path.extname(fileName);
    extName = extName.slice(1);
  
    for (let key in types) {
      let folderName = types[key];
      // console.log(folderName);
      for (let i=0; i<folderName.length; i++) {
        if (folderName[i] == extName) {
          console.log(key);
          return;
        }
      }
    } 
   console.log("others");
  }

  returnFolderName("love.exe");
  