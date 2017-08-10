'use strict';

let cityName = prompt('Введите название города!', 'Moscow');

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bd5e378503939ddaee76f12ad7a97608`)
.then(
	response => response.json())
.then(
	json => {
	  	console.log(`Город: ${cityName}`);
	    console.log(`Температура: ${Math.round(json.main.temp - 273)}°`);
	    console.log(`Продолжительность дня: ${Math.round((json.sys.sunset - json.sys.sunrise) / 60 / 60)} ч`);
	    console.log(`Скорость ветра: ${json.wind.speed} м/с`);
  })
.catch(error => console.error(`Error: ${error.message}`));
