/*
Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

let str = 'nurses run';
console.log(str.charAt(0).toUpperCase() + str.slice(1));

// console.log(str);

let isPalindrome = (str) => {
      let revStr = str.split("").reverse().join("");
      if(str === revStr){
          console.log("Given string is palindrome");
      }else{
        console.log("Given string is not palindrome");
      }
}

isPalindrome(str);