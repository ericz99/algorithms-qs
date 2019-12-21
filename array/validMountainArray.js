/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  // # base case
  if (A.length < 3) return false;

  let i = 0;

  while (i + 1 < A.length && A[i] < A[i + 1]) i++;

  if (i == 0 || i == A.length - 1) return false;

  while (i + 1 < A.length && A[i] > A[i + 1]) i++;

  return i == A.length - 1;
};

// 3 < 5

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 6]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 2, 3, 4, 5, 2, 1, 0]));
console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0]));

/**
 *
 * 1. it must have an increasing rate and decreaing rate
 * 2. it can only be increasing and decreasing strictly
 * 3. A.length must be >= 3
 *
 *
 */
