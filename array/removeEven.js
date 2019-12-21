var removeEven = arr => {
  return arr.filter(a => a % 2 !== 0);
};

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
