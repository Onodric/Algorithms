"use strict";

let fibanocci = function (n) {
  if (n<=2) {
    return 1;
  }
  return fibanocci(n-1) + fibanocci(n-2);
};
console.log("We should start at 0; Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21," +
    " 34, 55, 88");
console.log("fib 1: ", fibanocci(1));
console.log("fib 2: ", fibanocci(2));
console.log("fib 3: ", fibanocci(3));
console.log("fib 4: ", fibanocci(4));
console.log("fib 5: ", fibanocci(5));
console.log("fib 6: ", fibanocci(6));
console.log("fib 7: ", fibanocci(7));
console.log("fib 8: ", fibanocci(8));
console.log("fib 9: ", fibanocci(9));
console.log("fib 10: ", fibanocci(10));
console.log("fib 15: ", fibanocci(15));
