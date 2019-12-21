var rotate = function(arr, d) {
  let tmp = [...arr];

  for (let i = 0; i <= arr.length - 1; i++) {
    tmp[i] = arr[(i + d) % arr.length];
  }

  return tmp;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2));
