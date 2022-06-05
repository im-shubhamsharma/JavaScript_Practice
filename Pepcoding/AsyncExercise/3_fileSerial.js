let fs = require("fs");
let f1path = "f1.txt";
let f2path = "f2.txt";
let f3path = "f3.txt";
let f4path = "f4.txt";

console.log("before");
let outputContent = "";

fs.readFile(f1path, f1call);

function f1call(err, data) {
    if(err){
        console.log(err);
    }else{
        outputContent += data;
        fs.readFile(f2path, f2call)
    }
}

function f2call(err, data) {
    if(err){
        console.log(err);
    }else{
        outputContent += data;
        fs.readFile(f3path, f3call)
    }
}

function f3call(err, data) {
    if(err){
        console.log(err);
    }else{
        outputContent += data;
        // console.log(outputContent);
        fs.writeFile(f4path, outputContent, writeCb);
    }
}

function writeCb(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("F4 created succesfully");
    }
}


console.log("after");
for(let i=1; i<10; i++){
    console.log("Number is", i);
}