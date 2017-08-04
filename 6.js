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

function getUrl(mike) {
  if (mike.friends[0] == undefined || mike.friends[0].avatar.url == undefined)
    return 'http://default/url/to/avatar';
    
  return mike.friends[0].avatar.url;
}

let mike = '{\
   "friends": [{\
       "name": "Anna",\
       "avatar": {\
           "url": "http://some/url/to/avatar"\
       }\
   }]\
}';

mike = JSON.parse(mike);

mike = deepCopy(mike);

console.log(getUrl(mike));