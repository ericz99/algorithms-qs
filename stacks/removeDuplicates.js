// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// var removeDuplicates = function(s, k) {
//   let stack = {};
//   let newStack = [];
//   let arr = s.split("");
//   let counter = 1;
//   let res = "";

//   for (let key of arr) {
//     stack[key] = (stack[key] || 0) + 1;
//   }

//   console.log(stack);
//   for (let key in stack) {
//     if (stack[key] !== k && stack[key] % k !== 0) {
//       if (stack[key] < k) {
//         res += key.repeat(stack[key]);
//       } else if (stack[key] > k && stack[key] % 2) {
//         res += key.repeat(stack[key] % 2);
//       } else if (stack[key] > k) {
//         res += key.repeat(stack[key] - k);
//       }
//     }
//   }

//   return res;
// };

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let stack = [];
  let arr = s.split("");
  let res = "";

  for (let key of arr) {
    // stack[key] = (stack[key] || 0) + 1;
    if (stack.length == 0) {
      stack.push([key, 1]);
    } else if (stack[stack.length - 1][0] !== key) {
      stack.push([key, 1]);
    } else if (
      stack[stack.length - 1][0] === key &&
      stack[stack.length - 1][1] + 1 < k
    ) {
      stack[stack.length - 1][1]++;
    } else if (
      stack[stack.length - 1][0] === key &&
      stack[stack.length - 1][1] + 1 === k
    ) {
      stack.pop();
    }
  }

  for (let key of stack) {
    res += key[0].repeat(key[1]);
  }

  return res;
};

console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais", 2));
console.log(removeDuplicates("nnwssswwnvbnnnbbqhhbbbhmmmlllm", 3));
console.log(removeDuplicates("yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy", 4));
//"ybth"
