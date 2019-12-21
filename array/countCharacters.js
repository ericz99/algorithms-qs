/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
  let result = "";

  for (let word of words) {
    if (checkWord(word, chars)) {
      result += word;
    }
  }

  return result.length;
};

function checkWord(word, chars) {
  for (let letter of word) {
    if (!chars.includes(letter)) {
      return false;
    } else {
      chars = chars.replace(letter, "");
    }
  }

  return true;
}

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
