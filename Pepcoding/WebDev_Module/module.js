let fs = require("fs");
let path = require("path");

let input = process.argv.slice(2); // we are taking input as array here  -   For eg. node module.js Browser 4
if(input.length!=2){
    console.log(`Invalid input - Please enter Module Name and Number of lectures only. For eg - "Browser 6"`);
}

let moduleName = input[0];
let lectureNumber = input[1];

let modulePath = path.join(process.cwd(), "Webdev", moduleName);

if(!(fs.existsSync(modulePath))){
    fs.mkdirSync(modulePath);
}

for(let i=1; i<=lectureNumber; i++){
    let lectureDir = "Lecture-" + i; 
    let lecturePath = path.join(modulePath,lectureDir)

    if(!(fs.existsSync(lecturePath))){
        fs.mkdirSync(lecturePath);

        let filePath = path.join(lecturePath,"readme.txt")
        fs.writeFileSync(filePath,"");
        console.log(lectureDir + " created succesfully and a readme file added to folder.");
        
    }else{
        console.log(lectureDir + " already exist");
    }
}




