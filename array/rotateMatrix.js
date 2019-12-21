var rotateMatrix = function(matrix) {
  let N = matrix.length;
  for (let x = 0; x < Math.floor(N / 2); x++) {
    for (let y = x; y < N - x - 1; y++) {
      let temp = matrix[x][y]; // 1

      matrix[x][y] = matrix[y][N - 1 - x];

      // move values from bottom to right
      matrix[y][N - 1 - x] = matrix[N - 1 - x][N - 1 - y];

      // move values from left to bottom
      matrix[N - 1 - x][N - 1 - y] = matrix[N - 1 - y][x];

      // assign temp to left
      matrix[N - 1 - y][x] = temp;
    }
  }

  return matrix;
};

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

console.log(
  rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
);
