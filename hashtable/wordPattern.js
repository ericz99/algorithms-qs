/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

/**
 *
 * if pattern[A] == dog and pattern[B] == fish
 *
 * if A -> B -> if B then its fish if not fish then return false else keep going
 * we push it onto a stack to remember itself
 */
var wordPattern = function(pattern, str) {
  let patternMap = {};
  let strSplit = str.split(" ");
  let patternSplit = pattern.split("");
  let stack = [];

  if (strSplit.length !== patternSplit.length) {
    return false;
  }

  for (let i = 0; i < patternSplit.length; i++) {
    if (!patternMap[patternSplit[i]]) {
      if (patternMap[patternSplit[i - 1]] == strSplit[i]) {
        return false;
      }

      patternMap[patternSplit[i]] = patternMap[patternSplit[i]] || strSplit[i];
    }

    if (
      patternMap[patternSplit[i]] &&
      patternMap[patternSplit[i]] == strSplit[i]
    ) {
      stack.push(patternSplit[i]);
    } else {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("aaa", "aa aa aa aa"));
