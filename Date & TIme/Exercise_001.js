// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output :
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednasday",
  "Thrusday",
  "Friday",
  "Saturday",
];

const newDate = new Date();
// newDate.setHours(0);
// newDate.setMinutes(0);
// newDate.setSeconds(0);

let curDay = newDate.getDay();
console.log(`Today is : ${day[curDay]}.`);

let curHour = newDate.getHours();
let curMinute = newDate.getMinutes();
let curSecond = newDate.getSeconds();
let prepand;

if (curHour > 12) {
  curHour -= 12;
  prepand = "PM";
} else if (curHour == 0) {
  curHour += 12;
  prepand = "AM"; 
} else{
  prepand = "AM"; 
}

console.log(
  `Current time is ${curHour} ${prepand} : ${curMinute} : ${curSecond}.`
);

