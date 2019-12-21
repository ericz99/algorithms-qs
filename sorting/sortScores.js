function sortScores(arr, high) {
  const n = arr.length - 1; // constant time
  // linear time
  for (let i = 0; i < n; i++) {
    // linear time
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

// sorting algorithm runs o(n^2) bc its runing n * n => n^2

console.log(sortScores([37, 89, 41, 65, 91, 53], 100));
