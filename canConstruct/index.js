/**
 * Given a target string and list of words,
 * check if the combinations of the words can
 * make up the target string
 */
var canConstruct = function (target, wordBank, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === "")
        return true;
    for (var _i = 0, wordBank_1 = wordBank; _i < wordBank_1.length; _i++) {
        var word = wordBank_1[_i];
        var position = target.indexOf(word);
        if (position === 0) {
            var remainder = target.slice(word.length, target.length);
            var result = canConstruct(remainder, wordBank);
            if (result) {
                memo[remainder] = result;
                return memo[remainder];
            }
        }
    }
    memo[target] = false;
    return false;
};
var wordBank = ["ab", "abc", "cd", "def", "abcd"];
var target = "abcdef";
var wordBank2 = ["bo", "rd", "ate", "t", "ska", "sk", "boar"];
var target2 = "skateboard";
console.log(canConstruct(target, wordBank));
console.log(canConstruct(target2, wordBank2));
