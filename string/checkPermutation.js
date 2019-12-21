var checkPermuatation = (str1, str2) => {
  const hash = {};

  for (let i = 0; i < str1.length; i++) {
    hash[str1[i]] = str1[i];

    if (str2.indexOf(hash[str1[i]]) == -1) {
      return false;
    }
  }

  return true;
};

console.log(checkPermuatation("god", "odg"));
