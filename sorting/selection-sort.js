var selectionSortArr = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[min]) {
        j = min;
        min++;
      } else {
        let tmp = arr[j];
        arr[j] = arr[min];
        arr[min] = tmp;
      }
    }
  }

  return arr;
};

console.log(selectionSortArr([69, 4, 1, 3, 9, 7, 6, 13]));
