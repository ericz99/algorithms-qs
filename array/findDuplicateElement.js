var findDuplicateElement = array => {
  let hash = [];

  for (let i = 0; i < array.length; i++) {
    if (hash.indexOf(array[i]) > -1) {
      return array[i];
    }

    hash.push(array[i]);
  }

  return null;
};

console.log(findDuplicateElement([1, 2, 3, 4, 4]));
console.log(findDuplicateElement([1, 2, 3, 4, 5]));
