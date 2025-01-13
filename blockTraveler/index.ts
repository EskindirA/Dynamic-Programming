/** 
 *  Given a grid of (m x n), return the 
    path with the minimum # of steps that will take us from 
    start (top most left cell) to end (bottom most right cell).
    Rules:
        1. We can only move down or to the right 
        2. No diagonal, up or left moves
        3. We can only move to cells with 0 as values
        4. First and last cells have 0 as values
    Base case:
        1. For 1 x 1 grid, we are practicly doing nothing in
           that we are already there, return 1.
        2. For an invalid(m x 0 or 0 x n) grid, return 0.       
*/

const mazeTraveler = (m: number, n: number, memo = {}): number => {
  const k = m + "x" + n;
  if (k in memo) return memo[k];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[k] = mazeTraveler(m - 1, n, memo) + mazeTraveler(m, n - 1, memo);
  return memo[k];
};

const mazeGrid: number[][] = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
];

console.log(mazeGrid);

const mazeGrid2: number[][] = [
  [1,1,1],
  [0,1,0],
  [1,0,1]
]

console.log(mazeGrid2);

// console.log(`# of ways for 2x3 grid ${mazeTraveler(2, 3)}`);

/**
 * With normal recursive implementation
 *   1. Time complexity is O(2^(m+n))
 *   2. Space complexity is O(m+n)
 * With memoized recursive implementation
 *   1. Time complexity is O(m+n)
 *   2. Space complexity is O(m+n)
 */
