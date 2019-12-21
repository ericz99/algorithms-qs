/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var min = 1;
  var max = nums.length;
  var map = createMap(min, max);
  var stack = [];

  for (let key of nums) {
    map[key] += 1;
  }

  for (let key in map) {
    if (map[key] === 0) {
      stack.push(key);
    }
  }

  return stack;
};

function createMap(min, max) {
  let hash = {};

  for (let i = min; i <= max; i++) {
    hash[i] = hash[i] || 0;
  }

  return hash;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([2, 2]));

/**
 * [4, 3, 2, 7, 8, 2, 3, 1]
 *
 * [ 1, 2, 2, 3, 3, 4, 7, 8 ]
 */
