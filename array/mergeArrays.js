var mergeArrays = (arr1, arr2) => {
  let mergeArr = [];

  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    // 10 > 5
    if (arr1[i] > arr2[j]) {
      mergeArr.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      if (i < arr1.length) mergeArr.push(arr1[i]), i++;
      if (j < arr2.length) mergeArr.push(arr2[j]), j++;
    }
  }

  return mergeArr;
};

console.log(mergeArrays([1, 3, 4, 5], [2, 6, 7, 8]));
