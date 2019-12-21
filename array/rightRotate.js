var rightRotate = (arr, n) => {
  //   for (let i = 0; i <= n; i++) {
  //     const popped = arr.pop();
  //     arr.unshift(popped);
  //   }

  //   return arr;

  return arr.splice(n, arr.length - 1).concat(arr.splice(0, arr.length));
};

console.log(rightRotate([1, 2, 3, 4, 5], 2));
