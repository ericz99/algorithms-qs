var fibonacci = n => {
  if (n === 1) return 1;

  return n + fibonacci(n - 1);
};

console.log(fibonacci(5));

/**
 * fib (4)
 *      fib(3)
 *          fib(2)
 *              fib(1)
 *              5 + 4
 *          9 + 3
 *      12 + 2
 *  14 + 1 == 15
 */
