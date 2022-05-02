/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
    // your code
    let s3 = s1+s2;
    let arr3= [];
    
    for(val of s3.split("")){
      if(arr3.includes(val)){
        
      }else{
        arr3.push(val)
      }
    }
    
    return arr3.sort().join('');
  }