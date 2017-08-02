var arr = [
	{name: 'width', value: 10}, 
	{name: 'height', value: 20}
];

var str = '{ "' + arr[0].name + '": ' + arr[0].value + ', "' + arr[1].name + '": ' + arr[1].value + ' }' ;

str = JSON.parse(str);

console.log(str);