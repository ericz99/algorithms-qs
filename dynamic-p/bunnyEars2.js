var bunnyEars2 = function(bunnies) {
  if (bunnies == 0) return 0;

  return bunnies % 2 == 0
    ? 3 + bunnyEars2(bunnies - 1)
    : 2 + bunnyEars2(bunnies - 1);
};

console.log(bunnyEars2(3));

/**
 *
 * bunnyEars2(3)
 *      2 + bunnyEars2(2); 2 + 5 = 7
 *          3 + bunnyEars2(1); 3 + 2 = 5
 *              2 + bunnyEars2(0);
 *                  return 0
 */
