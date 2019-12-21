/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let stack = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      stack.push("FizzBuzz");
    } else if (i % 5 == 0) {
      stack.push("Buzz");
    } else if (i % 3 == 0) {
      stack.push("Fizz");
    } else {
      stack.push(String(i));
    }
  }

  return stack;
};

console.log(fizzBuzz(15));
