/**
 * Similar to howSum and canSum,
 * return an array with the least amount of numbers
 * that add up to the targetSum
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
var bestSum = function (targetSum, numbers, memo) {
    if (memo === void 0) { memo = {}; }
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    var shortestCombination = null;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = targetSum - num;
        var remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            var combination = __spreadArray(__spreadArray([], remainderCombination, true), [num], false);
            // if the combination is shorter than the current "shortest"
            if (shortestCombination === null ||
                shortestCombination.length > combination.length)
                shortestCombination = combination;
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};
var bestNumbers = [1, 2, 5, 25];
var bestTargetSum = 100;
console.log("Least combinations from [" + bestNumbers + "] that add up to " + bestTargetSum + " : [" + bestSum(bestTargetSum, bestNumbers) + "]");
