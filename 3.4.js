'use strict';

let cityName = prompt('Введите название города!', 'Moscow');

async function cities(cityName) {
	let { temp, lat, lon } = await city(cityName);
	fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=bd5e378503939ddaee76f12ad7a97608`).then(
	  response => response.json()).then(
	  function(json) {
	  	let state = true;

	  	for (let obj of json.list) {
	  		if (obj.main.temp > temp) {
	  			state = false;
	  			console.log(`В городе ${obj.name} температура ${obj.main.temp - 273}C. Это на ${obj.main.temp - temp}С теплее, чем в ${cityName}`);
	  		}
	  	}

	  	if (state) {
	  		console.log(`В городе ${cityName} теплее, чем в 5 ближайших городах`);
	  	}
	  })
}

function city(cityName) {
	return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd5e378503939ddaee76f12ad7a97608`).then(
	  response => response.json()).then(
	  json => ({
            lon: json.coord.lon,
            lat: json.coord.lat,
            temp: json.main.temp,
            city: json.name
        })
	  ).catch(error => console.error(`Error: ${error.message}`));
}

cities(cityName);