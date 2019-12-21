var countX = str => {
  if (str.length == 0) return 0;
  if (str.charAt(0) == "x") return 1 + countX(str.substr(1));
  return countX(str.substr(1));
};

console.log(countX("xxhixx"));
console.log(countX("xhixhix"));
console.log(countX("hi"));

/**
 *
 * [x,x,h,i,x,x]
 *
 *
 *
 *  countX("xxhixx")
 *      countX("xhixx");
 *           countX("hixx");
 *               countX("ixx");
 *                   countX("xx");
 *                        countX("x");
 *                             countX("");
 *                        1      
 */
