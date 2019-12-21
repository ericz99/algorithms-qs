/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  var result = { b: 0, a: 0, l: 0, l: 0, o: 0, o: 0, n: 0 };

  for (let i = 0; i < text.length; i++) {
    if (text[i] in result) {
      result[text[i]]++;
    }
  }

  return Math.min(
    result.b,
    result.a,
    Math.floor(result.l / 2),
    Math.floor(result.o / 2),
    result.n
  );
};

console.log(maxNumberOfBalloons("loonbalxballpoon"));
