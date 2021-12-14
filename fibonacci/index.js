// Has exponential time complexity O(2^n)
// Has linear space complexity O(n)
var fib = function (n) {
    // base case
    if (n <= 2)
        return 1;
    return fib(n - 2) + fib(n - 1);
};
console.log(fib(6));
var fibMemo = function (n, memo) {
    if (memo === void 0) { memo = {}; }
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);
    return memo[n];
};
console.log("Fib with memoization: " + fibMemo(50));
