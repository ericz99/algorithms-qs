var twoSum = (arr, s) => {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == s) {
        sum.push(arr[i], arr[j]);
      }
    }
  }

  return sum;
};

console.log(twoSum([3, 6, 9, 10, 12], 22));
