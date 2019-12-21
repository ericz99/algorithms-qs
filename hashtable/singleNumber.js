/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let newMap = {};

  for (let key of nums) {
    newMap[key] = (newMap[key] || 0) + 1;
  }

  for (let key in newMap) {
    if (newMap[key] == 1) {
      return key;
    }
  }
};

console.log(singleNumber([2, 2, 1]));
