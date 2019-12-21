/**
 *
 * input = [ 3,4,-7,3,1,3,1,-4,-2,-2 ]
 * output = [ 3,4,-7 ] || [ 4,7,3 ] || anything that has a sum of zero, just checking if it does if not return false
 *
 */

var checkSubArrayOfSumZero = array => {
  var sum = 0;
  var map = [0];

  for (let i = 0; i < array.length; i++) {
    // # add sum
    sum += array[i];

    // # check if map have sum
    if (map.indexOf(sum) > -1) {
      return true;
    }

    // # push each sum and will loop until array has 0 meaning there is subarray of sum zero
    map.push(sum);
  }

  return false;
};

console.log(checkSubArrayOfSumZero([3, 4, -7, -3]));
