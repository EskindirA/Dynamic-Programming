var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var allConstruct = function (target, wordBank, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === "")
        return [[]];
    var combinations = [];
    var _loop_1 = function (word) {
        if (target.indexOf(word) === 0) {
            var suffix = target.slice(word.length, target.length);
            var suffixWays = allConstruct(suffix, wordBank);
            var targetWays = suffixWays.map(function (way) { return __spreadArray([word], way, true); });
            combinations.push.apply(combinations, targetWays);
        }
    };
    for (var _i = 0, wordBank_1 = wordBank; _i < wordBank_1.length; _i++) {
        var word = wordBank_1[_i];
        _loop_1(word);
    }
    memo[target] = combinations;
    return combinations;
};
var wordList = ["purp", "p", "ur", "le", "purpl"];
var res = "purple";
console.log(allConstruct(res, wordList));
