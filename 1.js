const arr = [1, 2, 3, 4, 5];

function drop(arr, i) {
	let new_arr = arr;
	new_arr.splice(i, 1);
	return new_arr;
}

console.log(arr);
console.log(drop(arr, 3));
