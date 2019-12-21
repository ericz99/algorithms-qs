/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const fixed = [...arr].length;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] == 0) {
  //       const tmp = arr.splice(i++, arr.length);
  //       arr.push(0, ...tmp);
  //     }
  //   }

  //   arr = arr.slice(0, fixed);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.pop();
      arr.splice(i + 1, 0, 0);
      i = i + 1;
    }
  }
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
/**
 *
 *
 * given a "fixed" length array, dupliate each occurence of zeroes
 *
 * [1,0,2,3,0,4,5,0] = length = 8
 * [1,0,0,2,3,0,0,4] = length = 8
 *
 * loop thru array:
 *      check for any zero:
 *          if (zero):
 *              splice out the array before the zero
 *              add onto the existing array
 *              and repeat until the end
 */
