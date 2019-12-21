var findSecondMaximum = arr => {
  //   let hash = {};

  //   for (const k of arr) {
  //     hash[k] = k;
  //   }

  //   return Object.keys(hash)[arr.length - 2];

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (const k of arr) {
    firstMax = Math.max(firstMax, k);
  }

  for (const k of arr) {
    if (firstMax !== k) {
      secondMax = Math.max(secondMax, k);
    }
  }

  return secondMax;
};

console.log(findSecondMaximum([9, 2, 3, 6]));
