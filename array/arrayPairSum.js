/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let i = 0;
  let minValue = 0;
  // # we can't have an odd length array
  if (Math.floor(nums.length % 2) == 1) return -1;

  // # sort the array
  nums = nums.sort((a, b) => a - b);

  while (i < nums.length) {
    minValue += Math.min(nums[i], nums[i++]);
    i += 1;
  }

  return minValue;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([1, 4, 3, 6, 7, 8]));

/**
 * Given an array of 2n integers, 
 * your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *  Input: [1,4,3,2]
 * [1,2,3,4]
    Output: 4
    Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 * 
 */
