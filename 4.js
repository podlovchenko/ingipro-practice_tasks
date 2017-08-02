const arr = [1,1,2,-2,5,2,4,4,-1,-2,5];

function find_number(arr) {
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] == arr[i])
				count++;
		}
		if (count % 2 == 1)
			return arr[i];
	}
	return null;
}

console.log(find_number(arr));
