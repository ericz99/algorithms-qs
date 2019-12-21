/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  var reverseStr = "";
  var letters = [];
  var pattern = /^[A-Za-z]+$/;

  // loop thru and get all letters only
  for (let s in S) {
    // if pattern matches all letters
    if (S[s].match(pattern)) {
      // push all letters into array
      letters.push(S[s]);
    }
  }

  for (let s in S) {
    // if pattern matches all letters
    if (S[s].match(pattern)) {
      // pop letter out and concat them into a string
      reverseStr += letters.pop();
    } else {
      // if its not a letter then just concat normally
      reverseStr += S[s];
    }
  }

  // return only letters string
  return reverseStr;
};

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
