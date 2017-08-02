function range(start, stop, step) {
	if (arguments.length < 3) {
		step = 1;
		if (arguments.length < 2) {
			stop = start;
			start = 0;
		}
	}

	if (stop < start)
		throw new Error("error!");

		var arr = [];

		while (start < stop) {
			arr.push(start);
			start += step;
		}

	return arr;
	}


console.log(range(0,10,3));