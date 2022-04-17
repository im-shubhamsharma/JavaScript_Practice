// 1. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  Go to the editor
// Click me to see the solution


/*
let year = 2024;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(`${year} is a leap year`);
        }else{
            console.log(`${year} is not a leap year`);
        }
    }else{
        console.log(`${year} is a leap year`);
    }
}else{
    console.log(`${year} is not a leap year`);
}
*/

//Solution with conditional(ternary) operator;

let leapYear = (year) => {
     let result = (year%100==0) ? (year%400==0) : (year%4==0); //(condition)? if true : else false
     if(result==true){
         console.log(`${year} is a leap year`);
        }else{
          console.log(`${year} is not a leap year`);
        }
};

leapYear(2024);
leapYear(2020);
leapYear(2000);
leapYear(1700);
leapYear(1800);
leapYear(100);
