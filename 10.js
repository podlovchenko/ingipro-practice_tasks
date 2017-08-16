'use strict'

var str = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";

function rle(str) {
  if (!(/^[A-Z]*$/.test(str))) {
      throw new Error("Invalid string format");
  }

  let new_str = '';
  
  for(let i = 1; i < str.length; i++) {
    let count = 1;
    
    while(str[i] === str[i - 1]) {
      count++;
      i++;
    }
    
    new_str += str[i - 1];
    
    if(count !== 1) {
      new_str += count;
    }
  }
  
  return new_str;
}

console.log(rle(str));
