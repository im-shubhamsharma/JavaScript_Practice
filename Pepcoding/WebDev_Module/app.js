let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2); // we are taking input as array here  -   For eg. node app.js JavaScript Browser React Backend Git

if(input.length<1){
    console.log("invalid input");
}

let webDevDirPath = path.join(process.cwd(),"Webdev");

if(fs.existsSync(webDevDirPath)){
    console.log(`${webDevDirPath} folder already exist`);
}else{
    fs.mkdirSync(`${webDevDirPath}`);
}

for(let i=0; i<input.length;i++){
    let modulePath = path.join(webDevDirPath, input[i]);
    if(fs.existsSync(modulePath)){
        console.log(`${input[i]} folder already exist`);
    }else{
        fs.mkdirSync(modulePath);
    }
}