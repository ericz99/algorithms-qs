var endX = function(str) {
  if (str.length == 0) return str;

  if (str.charAt(0) == "x") {
    return endX(str.substring(1)) + str.charAt(0);
  } else {
    return str.charAt(0) + endX(str.substring(1));
  }
};

console.log(endX("xxre"));
console.log(endX("xxhixx"));
console.log(endX("xhixhix"));

/**

    endX("xxre")
        endX("xre") + 'x'
            endX("re") + 'x' r + e +x
                'r' + endX("e") r + e
                    'e' + endX(null) == e
                        return;

 */
