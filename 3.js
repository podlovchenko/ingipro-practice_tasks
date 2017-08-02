const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];

function f(arr1, arr2) {
	let arr = arr1.concat(arr2);
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j, 1);
				j--;
			}
		}
	}
	return arr;
}

console.log(f(arr1, arr2));
