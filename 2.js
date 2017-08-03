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
  let tmp = str.replace(/\s*/g,"");
  for (let i = 0, j = tmp.length - 1; i < j; i++, j--) {
    if (tmp[i].toLowerCase() !== tmp[j].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("А роза упала на лапу Азора"));
