/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    const letter = S[i];
    if (stack[stack.length - 1] == "(" && letter == ")") {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  return stack.length;
};

console.log(minAddToMakeValid("((("));
console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("()))(("));
console.log(minAddToMakeValid("()"));
