var findProduct = arr => {
  let result = [];

  let leftSum = 1;
  for (let i = 0; i < arr.length; i++) {
    result.push(leftSum);
    leftSum *= arr[i];
  }

  let rightSum = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    result[i] *= rightSum;
    rightSum *= arr[i];
  }

  return result;
};

console.log(findProduct([1, 2, 3, 4]));
