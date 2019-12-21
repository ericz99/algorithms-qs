var findFirstUnique = arr => {
  let hash = {};

  for (const k of arr) {
    if (hash[k]) {
      delete hash[k];
    } else {
      hash[k] = k;
    }
  }

  for (const k of arr) {
    if (hash[k]) {
      return k;
    }
  }

  return -1;
};

console.log(findFirstUnique([9, 2, 3, 2, 6, 6]));
console.log(findFirstUnique([4, 5, 1, 2, 0, 4]));
