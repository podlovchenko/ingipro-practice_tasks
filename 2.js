/* 2
Написать функцию palindrome, которая будет возвращает true, если переданная строка является полиндромом, и false, если не является
function palindrome(str) {
  // your code
}
palindrome("eye"); // true
palindrome("hello"); // false
palindrome("А роза упала на лапу Азора"); // true
*/

function palindrome(str) {
  let tmp = str.replace(/\s*/g,"").toLowerCase();
  return tmp.split('').reverse().join('') === tmp;
}

console.log(palindrome("А роза упала на лапу Азора"));
