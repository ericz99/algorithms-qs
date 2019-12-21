var isUnique = str => {
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    }

    hash[str[i]] = true;
  }

  return true;
};

console.log(isUnique("abcdef"));
console.log(isUnique("abcadefd"));
console.log(isUnique("abcdefghi"));

/**
 *
 * runtime of this function is O(n) where we look up nth number of time
 */
