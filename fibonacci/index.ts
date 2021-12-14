// Has exponential time complexity O(2^n)
// Has linear space complexity O(n)
const fib = (n: number): number => {
  // base case
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
};

console.log(fib(6));

// Has linear time complexity O(n)
// Has linear space complexity O(n)
const fibMemo = (n: number, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);
  return memo[n];
};

console.log(`Fib with memoization: ${fibMemo(50)}`);
