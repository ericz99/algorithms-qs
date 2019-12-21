var countPairs = function(str) {
  if (str.length == 0) return str;

  if (str.charAt(0) == str.charAt(2)) {
    return 1 + countPairs(str.substring(1));
  } else {
    return countPairs(str.substring(1));
  }
};

console.log(countPairs("axa"));
console.log(countPairs("axax"));
console.log(countPairs("axbx"));
console.log(countPairs("axaxa"));

/**
    countPairs("axa");
        countPairs("xa");
            countPairs("a");
                countPairs(null);
                    return str;


 */
