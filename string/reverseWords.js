/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let S = s.split(" ");
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    let isWord = false;
    for (let j = S[i].length - 1; j >= 0; j--) {
      stack.push(S[i][j]);
      isWord = true;
    }

    if (isWord) {
      stack.push(" ");
      isWord = false;
    }
  }

  return stack.join("").trim();
};

console.log(reverseWords("Let's take LeetCode contest"));
