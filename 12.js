'use strict';

let str = 'Мама мыла раму';

let new_str = (str, maxlength) => (str.length > maxlength) ? str.slice(0, maxlength - 3) + '...' : str;
	

console.log(new_str(str, 7));
