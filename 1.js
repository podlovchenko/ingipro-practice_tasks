/*1
Написать функцию reverseString, которая будет возвращать реверсированную строку
function reverseString(str) {
  // your code
}
reverseString("hello"); // "olleh"
*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

const str = "hello";

console.log(reverseString(str));