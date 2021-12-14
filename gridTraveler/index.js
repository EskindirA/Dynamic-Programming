/**
 *  Given a grid of (m x n), calculate the
    number of ways that will take us from
    start (top most left cell) to end (bottom most right cell).
    Rules:
        1. We can only move down or to the right
        2. No diagonal, up or left moves
    Base case:
        1. For 1 x 1 grid, we are practicly doing nothing in
           that we are already there, return 1.
        2. For an invalid(m x 0 or 0 x n) grid, return 0.
        3. 2,1 and 1,2 are basically the same with same, so
           we can use the value for either entry in memo.
*/
var gridTraveler = function (m, n, memo) {
    if (memo === void 0) { memo = {}; }
    var k = m + "x" + n;
    var rk = n + "x" + m;
    if ((k || rk) in memo)
        return memo[k];
    if (m === 0 || n === 0)
        return 0;
    if (m === 1 && n === 1)
        return 1;
    memo[k] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[k];
};
console.log("# of ways for 18x18 grid " + gridTraveler(3, 3));
/**
 * With normal recursive implementation
 *   1. Time complexity is O(2^(m+n))
 *   2. Space complexity is O(m+n)
 * With memoized recursive implementation
 *   1. Time complexity is O(m*n)
 *   2. Space complexity is O(m+n)
 */
