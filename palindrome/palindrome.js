"use strict";

// Now this is interesting in that I just wrote a string reversal script
// we can do it that way

// That function should still be usable, but I'll redefine anyway:

let rev_string = function (str) {
  return str.split('').reverse().join('');
};

// for that to work, I need to strip all the spaces and punctuation before
// reversal. Also, convert to lowercase. Return only letters? Or letters
// and numbers... Letters and numbers it is.

let prep_string = function(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
};

let isPalindrome = function (str) {
  return prep_string(str) === rev_string(prep_string(str));
};

let failTest = "I am not a Palindrome";
let passTest = "Madam, I'm Adam";

console.log("Failure: ", failTest, isPalindrome(failTest));
console.log("Passage: ", passTest, isPalindrome(passTest));

// So that works, but you only have to test the first half of the strings.