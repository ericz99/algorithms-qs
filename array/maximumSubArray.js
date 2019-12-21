var maxiumumSubArray = function(arr) {
  var maxSum = arr[0];
  var currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

console.log(maxiumumSubArray([-2, 1]));
