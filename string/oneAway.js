var oneAway = (str1, str2) => {
  let editCount = 0;
  const str1Len = str1.length;
  const str2Len = str2.length;
  let i = 0,
    j = 0;
  if (Math.abs(str1Len - str2Len) > 1) {
    return false;
  }

  while (i < str1Len && j < str2Len) {
    if (str1[i] !== str2[j]) {
      if (editCount == 1) {
        return false;
      }

      if (str1Len > str2Len) {
        i++;
      } else if (str1Len < str2Len) {
        j++;
      } else {
        i++;
        j++;
      }

      editCount++;
    } else {
      i++;
      j++;
    }
  }

  if (i < str1Len || j < str2Len) editCount++;

  return editCount == 1;
};

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
console.log(oneAway("geeks", "geeks"));
console.log(oneAway("geaks", "geeks"));
console.log(oneAway("peaks", "geeks"));
console.log(oneAway("peess", "peeas"));
