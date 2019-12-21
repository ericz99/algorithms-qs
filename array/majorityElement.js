/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {};

  for (let key of nums) {
    map[key] = (map[key] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] == Math.max(...Object.values(map))) {
      return key;
    }
  }
};

console.log(majorityElement([0, 0, 1, 2, 2, 3]));

/**
 *
 * find all element in the array with the most appear value
 *
 * input: [3,2,3] => output: [3]
 *
 * few approach: using a hashmap/table
 * only use flags
 *
 *
 */
