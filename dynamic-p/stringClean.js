var stringClean = function(str) {
  if (str.length < 2) return str;

  if (str.charAt(0) == str.charAt(1)) {
    return stringClean(str.substring(1));
  } else {
    return str.charAt(0) + stringClean(str.substring(1));
  }
};

console.log(stringClean("yyzzza"));
console.log(stringClean("abbbcdd"));
console.log(stringClean("Hello"));

/**
    stringClean("yyzzza")
        stringClean("yzzza")
            'y' + stringClean("zzza")
                stringClean("zza")
                    stringClean("za")
                        'z' + stringClean("a")
                            'a' + stringClean(null)
                                return str;

 */
