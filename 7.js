var arr = [
	{name: 'width', value: 10}, 
	{name: 'height', value: 20}
];

var obj = {};

arr.forEach(function(item) {
  obj[item.name] = item.value;
});

console.log(obj);
