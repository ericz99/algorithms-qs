var subArrayGivenSum = function(arr, targetSum) {
  var windowStart = 0;
  var windowEnd = 0;
  var currentSum = 0;

  if (targetSum == 0) {
    console.log("No subarray found!");
  }

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];

    while (
      currentSum !== targetSum &&
      currentSum > targetSum &&
      targetSum !== 0
    ) {
      currentSum -= arr[windowStart];
      windowStart++;
    }

    if (currentSum == targetSum) {
      console.log(
        "Sum found between indexes " + windowStart + " & " + windowEnd
      );
      break;
    }
  }
};

subArrayGivenSum([1, 4], 5);
