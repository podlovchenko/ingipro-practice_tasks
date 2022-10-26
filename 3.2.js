'use strict';

let cityName = prompt('Введите название города!', 'Moscow');

function cities(cityName, temp, lat, lon) {
	fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=bd5e378503939ddaee76f12ad7a97608`).then(
	  response => response.json()).then(
	  function(json) {
	  	let state = true;

	  	for (let obj of json.list) {
	  		if (obj.main.temp > temp) {
	  			state = false;
	  			console.log(`В городе ${obj.name} температура ${Math.round(obj.main.temp - 273)}C. Это на ${Math.round(obj.main.temp - temp)}С теплее, чем в ${cityName}`);
	  		}
	  	}

	  	if (state) {
	  		console.log(`В городе ${cityName} теплее, чем в 5 ближайших городах`);
	  	}
	  }).catch(error => console.error(`Error: ${error.message}`));
}

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd5e378503939ddaee76f12ad7a97608`).then(
  response => response.json()).then(
  function(json) {
  	cities(cityName, json.main.temp, json.coord.lat, json.coord.lon);
  }).catch(error => console.error(`Error: ${error.message}`));