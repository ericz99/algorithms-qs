var stringCompression = str => {
  var res = "";
  var stack = [];
  var count = 0;

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    count++;

    if (stack[stack.length - 1] !== str[i + 1]) {
      res += stack[stack.length - 1] + count;
      count = 0;
    }
  }

  return res;
};

// a2b1c5a3
console.log(stringCompression("aabcccccaaaffaaaaaacdeddd"));
