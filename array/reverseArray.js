// # 1 - solution - runs O(n)
// var reverseArray = array => {
//   let output = [];
//   let n = array.length - 1;

//   while (output.length !== array.length) {
//     output.push(array[n]);
//     n--;
//   }

//   return output;
// };

// # 2 - solution
// var reverseArray = array => {
//   let temp = [...array];
//   let n = array.length - 1;

//   for (let i = 0; i <= array.length - 1; i++) {
//     temp[i] = array[n--];
//   }

//   return temp;
// };

var reverseArray = array => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let tmp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = tmp;
  }

  return array;
};

console.log(reverseArray(["h", "e", "l", "l", "o"]));
