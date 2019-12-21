/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let stack = [];
  let counter = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] == "(") {
      if (counter !== 0) {
        stack.push("(");
      }

      counter++;
    } else {
      counter--;

      if (counter !== 0) {
        stack.push(")");
      }
    }
  }

  return stack.join("");
};

console.log(removeOuterParentheses("(()())(())"));
