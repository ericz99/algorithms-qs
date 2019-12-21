/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var S = s.split("").sort();
  var T = t.split("").sort();

  if (S.join("") == T.join("")) return true;
  return false;
};

console.log(isAnagram("anagram", "nagaram"));
