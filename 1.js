const arr = [1, 2, 3, 4, 5];

function drop(arr, i) {
	let new_arr = arr.slice();
	new_arr.splice(i, 1);
	return new_arr;
}

console.log(drop(arr, 3));
console.log(arr);
