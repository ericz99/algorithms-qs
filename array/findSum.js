var findSum = (arr, value) => {
  let hash = {};

  for (const k of arr) {
    let result = value - k;

    if (hash[k]) {
      return [value - hash[k], k];
    }

    hash[result] = result;
  }
};

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81)); // output = [21,60];
console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 74)); // output = [21,60];
