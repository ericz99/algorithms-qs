/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let patternSplit = pattern.split("");
  let patternCount = pattern.length - 1;
  let output = [];

  for (let i = 0; i < words.length; i++) {
    let patternMap = {};
    let isMatch = false;
    let counter = 0;
    console.log(words[i] + " - outer");

    for (let j = 0; j < words[i].length; j++) {
      console.log(words[i][j] + " - inner");
      console.log(patternSplit[counter] + " - pattern");

      if (!patternMap[patternSplit[counter]]) {
        if (Object.values(patternMap).indexOf(words[i][j]) > -1) {
          break;
        }

        patternMap[patternSplit[counter]] =
          patternMap[patternSplit[counter]] || words[i][j];
      }

      if (patternMap[patternSplit[counter]] !== words[i][j]) {
        break;
      }

      if (counter == patternCount) {
        isMatch = true;
      }

      counter++;
    }

    if (isMatch) {
      output.push(words[i]);
      isMatch = false;
      counter = 0;
    }
  }

  return output;
};

console.log(findAndReplacePattern(["abc", "cba", "xyx", "yxx", "yyx"], "abc"));
