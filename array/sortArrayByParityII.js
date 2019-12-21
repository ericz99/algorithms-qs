/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let res = [];
  let evenIndex = 0;
  let oddIndex = 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      res[evenIndex] = A[i];
      evenIndex = evenIndex + 2;
    } else {
      res[oddIndex] = A[i];
      oddIndex = oddIndex + 2;
    }
  }
  return res;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
