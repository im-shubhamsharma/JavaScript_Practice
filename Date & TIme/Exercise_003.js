//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

/*
let newDate = new Date();

console.log("Years with 1st january as sunday are as follows:");
for(var i=2014; i<=2050; i++){
  newDate.setFullYear(i);
  newDate.setMonth(0);  //january month
  newDate.setDate(1);  // 1st january
  
  if(newDate.getDay() == 0){
      console.log(i);
  }
}
*/

console.log("Years with 1st january as sunday are as follows:");
for(var year=2014; year<=2050; year++){
    let date = new Date(year, 0, 1); //  new Date(year, month, day, hours, minutes, seconds, milliseconds)
    if(date.getDay() == 0){
        console.log(year)
    }
}

