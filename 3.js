const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
	let arr = arr1.concat(arr2);
    let obj = {};
	arr.forEach(function(item) {
      obj[item] = true;
    });
    console.log(obj);
	return Object.keys(obj).map(function(item) {
      return +item;
    });
}

console.log(f(arr1, arr2));
