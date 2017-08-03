'use strict'

function range(start, stop, step = 1) {
	if (arguments.length < 2) {
		stop = start;
		start = 0;
	}

	if (stop < start) {
		throw new Error("error!");
    }

	var arr = [];

	while (start < stop) {
		arr.push(start);
		start += step;
	}

	return arr;
}

console.log(range(10, 20));
