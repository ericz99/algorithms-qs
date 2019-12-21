var triangle = function(rows) {
  if (rows == 0 || rows == 1) return rows;

  return rows + triangle(rows - 1);
};

console.log(triangle(3));
