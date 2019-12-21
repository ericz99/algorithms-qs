// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */
// var backspaceCompare = function(S, T) {
//   let firstSet = S.split("");
//   let secondSet = T.split("");

//   if (firstSet.indexOf("#") > -1 || secondSet.indexOf("#") > -1) {
//     if (firstSet.indexOf("#") > -1 && firstSet.indexOf("#") == 0) {
//       firstSet.splice(S.indexOf("#"), 1);
//     } else if (firstSet.indexOf("#") > 0) {
//       firstSet.splice(S.indexOf("#") - 1, 2);
//     }

//     if (secondSet.indexOf("#") > -1 && secondSet.indexOf("#") == 0) {
//       secondSet.splice(T.indexOf("#"), 1);
//     } else if (secondSet.indexOf("#") > 0) {
//       secondSet.splice(T.indexOf("#") - 1, 2);
//     }

//     return backspaceCompare(firstSet.join(""), secondSet.join(""));
//   }

//   if (S == T) return true;
//   return false;
// };

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return buildString(S) == buildString(T) ? true : false;
};

function buildString(str) {
  let stack = [];
  for (let letter of str) {
    if (letter !== "#") {
      stack.push(letter);
    } else if (stack.length !== 0) {
      stack.pop();
    }
  }

  return stack.join("");
}

console.log(backspaceCompare("ab##", "c#d#"));

//
("y#fo##f");
("y#f#o##f");
