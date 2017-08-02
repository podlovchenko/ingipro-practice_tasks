function wrap(str, maxlength) {
	let j = 0;
	let space;
	let s1, s2;
	while (j + maxlength < str.length) {
		if ((space = str.lastIndexOf(' ', j + maxlength)) > -1 && space < j + maxlength) {
			s1 = str.substring(0, space);
			s2 = str.substring(space + 1);
			str = s1 + '\n' + s2;
			j = space + 1;
		}
		else {
			s1 = str.substring(0, j + maxlength);
			s2 = str.substring(j + maxlength);
			str = s1 + '\n' + s2;
			j += maxlength + 1;
		}
	}
	return str;
}

console.log(wrap("мама мыла раму", 11));