var groupSum = function(start, nums, target) {
  if (start >= nums.length) return target == 0;
  if (groupSum(start + 1, nums, target - nums[start])) return true;
  return groupSum(start + 1, nums, target);
};

console.log(groupSum(0, [2, 4, 8], 10));
console.log(groupSum(0, [2, 4, 8], 14));
console.log(groupSum(0, [2, 4, 8], 9));

/**

    groupSum(0, [2, 4, 8], 10)
        0 >= 3, no its not continue
        groupSum(1, [2, 4, 8], 10 - 2)
            1 >= 3, no its not continue
            groupSum(2, [2, 4, 8], 8 - 4)
                2 >= 3, not its not continue
                groupSum(3, [2, 4, 8], 4 - 8)
                    3 >= 3, yes its at the end of the array, now is target = -4 == 0? NO return false
                groupSum(3, [2, 4, 8], 4)    
                    3 >= 3, yes its at the end of the array, now is target = 4 == 0? NO return false
                groupSum(2, [2, 4, 8], 8)  
                    2 >= 3, no its not continue
                    groupSum(3, [2, 4, 8], 8 - 8)
                    3 >= 3, yes its at the end of the array, now is target = 8 - 8 == 0? YES return true 
                return true
            return true
        return true
 */
