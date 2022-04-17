// Write a JavaScript program to calculate days left until next Christmas

let currDate = new Date() // today's date
// let currDate = new Date(2022,11,25) // set date to check your program


let cmasDate = new Date(currDate.getFullYear(), 11,25); //christmas date for current year

if(currDate.getMonth() == 11 && currDate.getDate()>25){
    cmasDate.setFullYear(currDate.getFullYear() + 1);
}

let oneDay = 86400000; // There are 86,400,000 milliseconds in 1 day || A day has 24x60x60 seconds or 86,400. There are 1000 ms in each second, so there are 86,400 s/day x 1000 ms/s = 86,400,000 ms/day.

let remDays = Math.ceil((cmasDate.getTime() - currDate.getTime() ) / oneDay);  // Math.ceil() function is used to get the smallest integer greater than or equal to a given number.

console.log(`Total remaining days in christmas is ${remDays}`);