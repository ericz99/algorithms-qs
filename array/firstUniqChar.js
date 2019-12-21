/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var map = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (map.hasOwnProperty(letter)) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
