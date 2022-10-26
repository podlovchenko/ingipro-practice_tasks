/*
 Реализовать функцию sum()
 sum(1);       // => 1
 sum(1)(2);    // => 3
 sum(1)(2)(3); // => 6
 */

'use strict'

function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = () => currentSum;

  return f;
}

console.log(+sum(1)(2)(3));