/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    stack[stack.length - 1] === S[i] ? stack.pop() : stack.push(S[i]);
  }

  return stack.join("");
};

console.log(removeDuplicates("aababaab"));
