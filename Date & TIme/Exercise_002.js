// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const newDate = new Date();

let month = newDate.getMonth();
let date = newDate.getDate();
let year = newDate.getFullYear();

if (date<10){
    date = '0' + date;
}
if (month<10){
    month = '0' + month;
}

console.log(`${month}-${date}-${year}`);
console.log(`${month}/${date}/${year}`);
console.log(`${date}-${month}-${year}`);
console.log(`${date}/${month}/${year}`);
