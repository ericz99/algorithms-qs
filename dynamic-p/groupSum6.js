var groupSum6 = function(start, nums, target) {
  if (start >= nums.length) return target == 0;
  if (nums[start] == 6) return groupSum6(start + 1, nums, target - 6);
  if (groupSum6(start + 1, nums, target - nums[start])) return true;
  return groupSum6(start + 1, nums, target);
};

console.log(groupSum6(0, [5, 6, 2], 8));
console.log(groupSum6(0, [5, 6, 2], 9));
console.log(groupSum6(0, [5, 6, 2], 7));

/**

    groupSum(0, [5, 6, 2], 8)
        0 >= 3, no its not continue
        groupSum(1, [5, 6, 2], 8 - 5)
            1 >= 3, no its not continue
            groupSum(2, [5, 6, 2], 3 - 6)
                2 >= 3, no its not continue 
                groupSum(3, [5, 6, 2], -3 - 2)
                3 >= 3, yes, but is target(-5) == 0, no its not return false
                groupSum(3, [5, 6, 2], -3)
                3 >= 3, yes, but is target(-3) == 0, no its not return false
                groupSum(2, [5, 6, 2], 3)
                2 >= 3, no its not continue 
                    groupSum(3, [5, 6, 2], 3 + 2)
                    3 >= 3, yes, but is target(5) == 0, no its not return false
                    groupSum(3, [5, 6, 2], 3)
                    3 >= 3, yes, but is target(3) == 0, no its not return false
                    groupSum(2, [5, 6, 2], 8)
                    2 >= 3, no



 */
