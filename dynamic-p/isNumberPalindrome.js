var isNumberPalindrome = str => {
  return isPalidrome(str, str[0], str[str.length - 1]);
};

var isPalidrome = (str, left, right) => {
  if (left >= right) {
    return str;
  }
};

console.log(isNumberPalindrome(20002));
console.log(isNumberPalindrome(20001));

/**
 *
 * 1. base case
 * 2. recursive statement
 * 3. find a solution that links to next solution
 */
