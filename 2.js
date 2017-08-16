function getRandom() {
	return Math.round(Math.random() * 1000);
}

function pause(ms) {
	const date = new Date();
	let curDate = null;
	do { 
		curDate = new Date();
	}
	while(curDate - date < ms);
}

function randomNumber() {
	pause(getRandom());
	return getRandom();
}
							   
console.log(randomNumber());
