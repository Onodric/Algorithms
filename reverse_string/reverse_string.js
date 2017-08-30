"use strict";

let reverse_string = function (str) {
  return str.split('').reverse().join('');
};

let testStr = 'Hello I am a test string';
let reverse = 'gnirts tset a ma I olleH';

console.log("Test string: ", testStr);
console.log("Predicted Reverse: ", reverse);
console.log("Test passed? ", reverse_string(testStr) === reverse);
