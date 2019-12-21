/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
  };

  let seen = [];

  for (let i = 0; i < words.length; i++) {
    let result = "";

    for (let j = 0; j < words[i].length; j++) {
      result += morseCode[words[i][j]];
    }

    if (seen.indexOf(result) === -1) {
      seen.push(result);
      result = "";
    }
  }

  return seen.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
