let fs = require("fs");

async function myFn(){
    console.log("start");
    let promise = await fs.promises.readFile("file1.txt");
    console.log("Promise before", "NO -  "+promise);
    console.log("after");
    let value =  promise;
    console.log(value + " ");
    console.log("end");
}

myFn();