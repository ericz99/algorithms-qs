var nestParen = function(str) {
  if (str.length == 0) return true;

  if (str.charAt(0) == "(" && str.charAt(str.length - 1) == ")") {
    return nestParen(str.substring(1, str.length - 1));
  }

  return false;
};

console.log(nestParen("(())")); // true
console.log(nestParen("(((x)))")); // true
console.log(nestParen("(((x))")); // false
console.log(nestParen("(((x)))")); // true
console.log(nestParen("(((x))))))))")); // false
console.log(nestParen("((()))"));
console.log(nestParen("((()))"));
