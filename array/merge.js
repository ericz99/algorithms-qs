/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums1.push(...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/**
 * 
 * 
 *  Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

    1. we should have two pointer
    2. we first compare both array index, and if a[n] > a[m] then we move a[m] into a nums1 then move up on m++
    3. we continue..
    4. no need to return anything, this is inplace algo
 * 
 */
