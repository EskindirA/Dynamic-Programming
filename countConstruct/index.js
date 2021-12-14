/**
 * Same as can construct, but here we want to return the
 * total number of ways we can construct the target strings
 * from the word bank.
 */
var countConstruct = function (target, wordBank, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === "")
        return true;
    var count = 0;
    for (var _i = 0, wordBank_1 = wordBank; _i < wordBank_1.length; _i++) {
        var word = wordBank_1[_i];
        var position = target.indexOf(word);
        if (position === 0) {
            var remainder = target.slice(word.length, target.length);
            if (countConstruct(remainder, wordBank)) {
                memo[target] = count;
                count++;
            }
        }
    }
    memo[target] = count;
    return count;
};
var words = ["ab", "abc", "cd", "def", "abcd"];
var result = "abcdef";
var words2 = ["purp", "p", "ur", "le", "purpl"];
var result2 = "purple";
console.log(countConstruct(result, words));
console.log(countConstruct(result2, words2));
