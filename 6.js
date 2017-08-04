/* 
6
Написать функцию, которая вернет новый объект, у которого ключи стали значениями, а значения ключами
function invert_key_value(obj) {
    // your code;
}
invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})
// {#00FF00: "green", #FF0000: "red", #FFFFFF: "white"}
*/

function invert_key_value(obj) {
  let new_obj = {};
  
  for (let key in obj) {
    new_obj[obj[key]] = key;
  }
  
  return new_obj;
}

console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));