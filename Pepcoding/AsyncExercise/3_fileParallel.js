let fs = require("fs");
let f1path = "f1.txt";
let f2path = "f2.txt";
let f3path = "f3.txt";

console.log("before");
//code to read 3 files parallely
fs.readFile(f1path, funCall);
fs.readFile(f2path, funCall);
fs.readFile(f3path, funCall);

function funCall(err,data) {
    if(err){
        console.log(err);
    }else{
        console.log("data: "+ data);
    }
}


console.log("after");
for(let i=1; i<10; i++){
    console.log("Number is", i);
}