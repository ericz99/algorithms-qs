/**
 *
 * input = [ 3,4,-7,3,1,3,1,-4,-2,-2 ]
 * output = [ 3,4,-7 ] || [ 4,7,3 ] || anything that has a sum of zero, just checking if it does if not return false
 *
 */

var printAllSubArrayZero = array => {
  for (let i = 0; i < array.length; i++) {
    var sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum == 0) {
        console.log(`[ ${i} ${j} ]`);
      }
    }
  }

  return false;
};

printAllSubArrayZero([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);
