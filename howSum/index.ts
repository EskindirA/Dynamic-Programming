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

const howSum = (
  targetSum: number,
  numbers: number[],
  memo = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

const list: number[] = [7, 14];
const total: number = 300;

console.log(
  `numbers from ${list} that generate a sum of ${total} : ${howSum(
    total,
    list
  )}`
);
