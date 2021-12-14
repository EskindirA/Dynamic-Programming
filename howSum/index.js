/**
 * Given an array of numbers and a targetSum,
 * return an array of the elements that add up
 * to the target sum, return null otherwise.
 * Rules:
 *     1. We may use an element from the array
 *        as many times as needed
 *     2. We may assume that all input numbers
 *        are non-negative
 * Representing it recursively
 *     1. We can approach it by decreasing the
 *        value of targetSum for each element
 *        and represent it as a child node to
 *        targetSum
 * Base case:
 *     1. When we reach the value of 0, return []
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var howSum = function (targetSum, numbers, memo) {
    if (memo === void 0) { memo = {}; }
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = targetSum - num;
        var remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = __spreadArray(__spreadArray([], remainderResult, true), [num], false);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
var list = [7, 14];
var total = 300;
console.log("numbers from " + list + " that generate a sum of " + total + " : " + howSum(total, list));
