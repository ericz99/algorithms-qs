/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let stack = [];
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return tArr[i];
    }
  }

  return tArr[tArr.length - 1];
};

console.log(findTheDifference("ab", "abc"));
