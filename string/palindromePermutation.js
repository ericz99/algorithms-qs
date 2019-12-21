var palindromePermutation = str => {
  str = str.replace(" ", "");
  let half = Math.floor(str.length / 2);
  let end = str.length - 1;

  for (let i = 0; i <= half - 1; i++) {
    if (str[i] !== str[end]) {
      return false;
    }

    end--;
  }

  return true;
};

// time complexity is O(N)
console.log(palindromePermutation("Tact Coa"));
console.log(palindromePermutation("taco cat"));
console.log(palindromePermutation("atco cta"));
console.log(palindromePermutation("racecar"));
console.log(palindromePermutation("gay"));
console.log(palindromePermutation("gayag"));
