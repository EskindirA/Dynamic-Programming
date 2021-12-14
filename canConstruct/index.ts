/**
 * Given a target string and list of words,
 * check if the combinations of the words can
 * make up the target string
 */

const canConstruct = (target: string, wordBank: string[], memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of wordBank) {
    const position = target.indexOf(word);
    if (position === 0) {
      const remainder = target.slice(word.length, target.length);
      const result = canConstruct(remainder, wordBank);
      if (result) {
        memo[remainder] = result;
        return memo[remainder];
      }
    }
  }
  memo[target] = false;
  return false;
};

const wordBank = ["ab", "abc", "cd", "def", "abcd"];
const target = "abcdef";

const wordBank2 = ["bo", "rd", "ate", "t", "ska", "sk", "boar"];
const target2 = "skateboard";

console.log(canConstruct(target, wordBank));

console.log(canConstruct(target2, wordBank2));
