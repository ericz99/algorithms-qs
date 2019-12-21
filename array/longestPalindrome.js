/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let map = {};
  let odd = 0;

  for (let c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  for (let c in map) {
    odd += map[c] % 2;
  }

  return s.length - odd + !!odd;
};

console.log(longestPalindrome("abccccdd"));
