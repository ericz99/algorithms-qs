/**
 * @param {string[]} A
 * @return {string[]}
 */

var commonChars = function(A) {
  let firstWord = A.shift();
  let result = [];

  if (A && firstWord) {
    for (const letter of firstWord) {
      let shouldBeAdded = true;

      for (let i = 0; i < A.length; i++) {
        if (A[i].indexOf(letter) > -1) {
          A[i] = A[i].replace(letter, "");
        } else {
          shouldBeAdded = false;
        }
      }

      if (shouldBeAdded) {
        result.push(letter);
      }
    }
  }

  return result;
};

console.log(commonChars(["cool", "lock", "cook"]));
