function getUrl(obj, path, defaultValue) {
  let arr = path.split(', ');
  let i = 0;
  
  while (obj != null && i < arr.length) {
    obj = obj[arr[i++]];
  }
    
  return obj != null ? obj : defaultValue;
}

var mike = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: 'http://some/url/to/avatar'
        }
    }]
};

console.log(getUrl(mike, 'friends, 0, avatar, url', 'http://default/url/to/avatar'));
