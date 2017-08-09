'use strict';

function getImage(url) {
  let promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = function() {
      resolve(url);
    }
    img.onerror = function() {
      reject(url);
    }
});
  
  return promise;
}

getImage('http://bit.ly/2vntYlL').then(url => {
  alert(`${url} successfully loaded`);
}).catch(url => {
  alert(`Error loading ${url}`);
});