'use strict';

const arr = [1,1,2,-2,5,2,4,4,-1,-2,5];

function find_number(arr) {
    let map = new Map();
  
    arr.forEach(item => {
      if (map.get(item) === undefined) {
        map.set(item, 0);
      }
      map.set(item, map.get(item) + 1);
    });

    let answer = null;
  
    map.forEach((value, key) => {
      if (value % 2 == 1) {
        answer = key;
        return;
      }
    });

    return answer;
}

console.log(find_number(arr));
