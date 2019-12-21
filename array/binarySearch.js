var binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low; // this will get the medium

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
