/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let hash = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (hash[stack[stack.length - 1]] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length == 0) return true;
  return false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
