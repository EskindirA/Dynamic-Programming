/**
 * Given an array of numbers and a targetSum,
 * determine if its possible to generate the
 * targetSum from the elements in the array
 * by returning true/false
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
 *     1. When we reach the value of 0, return true
 */

const canSum = (targetSum: number, numbers: number[], memo = {}): boolean => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    memo[targetSum] = remainder;
    if (canSum(remainder, numbers, memo) === true) {
      return true;
    }
  }
  return false;
};

const numbers: number[] = [5, 3, 4, 7];
const targetSum: number = 7;

const numbers2: number[] = [2, 4];
const targetSum2: number = 7;

const numbers3: number[] = [7, 14];
const targetSum3: number = 300;

console.log(
  `${numbers} can generate a sum of ${targetSum} : ${canSum(
    targetSum,
    numbers
  )}`
);

console.log(
  `${numbers2} can generate a sum of ${targetSum2} : ${canSum(
    targetSum2,
    numbers2
  )}`
);

console.log(
  `${numbers3} can generate a sum of ${targetSum3} : ${canSum(
    targetSum3,
    numbers3
  )}`
);
