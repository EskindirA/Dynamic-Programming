/**
 * Same as can construct, but here we want to return the
 * total number of ways we can construct the target strings
 * from the word bank.
 */

const countConstruct = (target: string, wordBank: string[], memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  let count = 0;

  for (let word of wordBank) {
    const position = target.indexOf(word);
    if (position === 0) {
      const remainder = target.slice(word.length, target.length);
      if (countConstruct(remainder, wordBank)) {
        memo[target] = count;
        count++;
      }
    }
  }
  memo[target] = count;
  return count;
};

const words = ["ab", "abc", "cd", "def", "abcd"];
const result = "abcdef";

const words2 = ["purp", "p", "ur", "le", "purpl"];
const result2 = "purple";

console.log(countConstruct(result, words));
console.log(countConstruct(result2, words2));
