/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map = {};
  let firstArr = s.split("");
  let secondArr = t.split("");

  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (!map[firstArr[i]]) {
      if (
        Object.values(map).indexOf(secondArr[i]) == secondArr[i] ||
        map[firstArr[i - 1]] == secondArr[i]
      )
        return false;
      map[firstArr[i]] = secondArr[i];
    }

    if (map[firstArr[i]] && map[firstArr[i]] !== secondArr[i]) return false;
  }

  return true;
};

console.log(isIsomorphic("a", "a"));
