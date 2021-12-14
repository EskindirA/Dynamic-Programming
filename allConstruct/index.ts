const allConstruct = (target: string, wordBank: string[], memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  let combinations = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length, target.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      combinations.push(...targetWays);
    }
  }

  memo[target] = combinations;
  return combinations;
};

const wordList = ["purp", "p", "ur", "le", "purpl"];
const res = "purple";

console.log(allConstruct(res, wordList));
