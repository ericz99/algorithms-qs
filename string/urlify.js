var urlify = str => {
  return str.trim().replace(/ /g, "%20");
};

// O(1) we are just using in place algo which just change str itself
// DON"T RETURN JUST OPERATE AS IN PLACE ALGO
console.log(urlify("Mr John Smith     "));
