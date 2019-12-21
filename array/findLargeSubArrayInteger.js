var findLargeSubArrayInteger = array => {
  let hash = [];

  for (let i = 0; i < array.length; i++) {
    if (hash.indexOf(array[i]) == -1) {
      hash.push(array[i]);
    }
  }

  return hash;
};

console.log(
  findLargeSubArrayInteger([2, 0, 2, 1, 4, 3, 1, 0, 19, 18, 18, 20, 214])
);
