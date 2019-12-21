var findMinimum = arr => {
  //   return Math.min(...arr);

  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    minValue = Math.min(minValue, arr[i]);
  }

  return minValue;
};

console.log(findMinimum([9, 2, 3, 6]));
