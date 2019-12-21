/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let Sarr = S.split("");
  let Tarr = T.split("");
  let output = [];

  while (Sarr.length > 0) {
    let letter = Sarr[0];
    let index = Tarr.indexOf(letter);

    if (index > -1) {
      output.push(Tarr[index]);
      Tarr.splice(index, 1);
    } else {
      Sarr.shift();
    }
  }

  output.push(...Tarr);

  return output.join("");
};

console.log(customSortString("cba", "abcd"));
console.log(customSortString("kqep", "pekeq"));
// "kqeep"
