/**
 * Similar to howSum and canSum,
 * return an array with the least amount of numbers
 * that add up to the targetSum
 */

const bestSum = (targetSum, numbers: number[], memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      // if the combination is shorter than the current "shortest"
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      )
        shortestCombination = combination;
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

const bestNumbers: number[] = [1, 2, 5, 25];
const bestTargetSum: number = 100;

console.log(
  `Least combinations from [${bestNumbers}] that add up to ${bestTargetSum} : [${bestSum(
    bestTargetSum,
    bestNumbers
  )}]`
);
