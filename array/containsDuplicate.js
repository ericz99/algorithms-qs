/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hash = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (hash.indexOf(nums[i]) > -1) {
      return true;
    }

    hash.push(nums[i]);
  }

  return false;
};
