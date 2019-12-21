/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  const zeros = seats.join("").split(1);
  return Math.max(
    zeros.shift().length,
    zeros.pop().length,
    ...zeros.map(z => (z.length > 0 ? Math.floor((z.length + 1) / 2) : 0))
  );
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
/*

[1,0,0,0,1,0,1];
         ^ ^ ^   
[1,0,0,0,1]

[1,0,1]

*/
