function deepCopy(val) {
  let obj = {};

  for (let key in val) {
    if (val[key] instanceof Array) {
      obj[key] = this.deepCopyArray(val[key]);
      continue;
    }
    
    if (val[key] instanceof Object) {
      obj[key] = this.deepCopy(val[key]);
      continue;
    }
    
    obj[key] = val[key];
  }
  
  return obj;
}

function deepCopyArray(val) {
  let arr = [];
  
  let i = 0;
  
  for (let key in val) {
    arr[i++] = deepCopy(val[key]);
  }

  return arr;
}

const str = '{\
   "friends": [{\
       "name": "Anna",\
       "avatar": {\
           "url": "http://some/url/to/avatar"\
       }\
   }]\
}';

const val = JSON.parse(str);

console.log(deepCopy(val));