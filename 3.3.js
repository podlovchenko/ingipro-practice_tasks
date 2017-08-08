'use strict';

let arr = prompt('Введите названия городов!', 'Moscow').split(',');

arr.forEach(function(item) {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item.trim()}&appid=bd5e378503939ddaee76f12ad7a97608`).then(
  response => response.json()).then(
  function(json) {
  	console.log(`${item.trim()}: температура: ${Math.round(json.main.temp - 273)}°, скорость ветра: ${json.wind.speed} м/с, влажность: ${json.main.humidity}%`);
  }).catch(error => console.error(`Error: ${error.message}`));
});