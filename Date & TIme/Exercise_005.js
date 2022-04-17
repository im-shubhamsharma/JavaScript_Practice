/*
Write a JavaScript function to get the current date.
Note : Pass a separator as an argument.

Test Data :
console.log(curday('/')); 
console.log(curday('-'));

Output :
"11/13/2014" 
"11-13-2014"
*/

let curday = (a) => {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;

    return (mm+a+dd+a+yyyy);
};
console.log(curday("/"));
console.log(curday("-"));

