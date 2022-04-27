/*
Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223


var x = 32243;

var count = 0;

//loop to count digits of a number
var temp = x;
while(temp!=0){
   count++;
   temp = Math.trunc(temp/10);    // the trunc() method returns only the integer part of a number.
}

let dig = 0;
while(count>0){
   count--;
   let mod = Math.trunc(x%10);
   x=Math.trunc(x/10);
   
   dig = dig+ (mod*Math.pow(10,count));
   
}
console.log(dig);
*/



let n = 0102346;
console.log(typeof(n));

let reverse_a_number = (n) => {
    n = n+""; //convert n into string
    return (n.split("").reverse().join(""));
    
}

console.log(reverse_a_number(n));
