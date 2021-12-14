/**
 * Base case
 *  1. When there is no more right and bottom
 *  2. Avoid going back and forth
 */

const BunniesEscape = (map: number[][]) => {
  const row = map.length;
  const col = map[0].length;
  console.log(row + "  " + col + "  " + map[row - 1][col - 1]);
};

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const map1 = [
//   [0, 1, 1, 0],
//   [0, 1, 1, 0],
//   [0, 0, 0, 1],
//   [1, 1, 0, 0],
//   [1, 1, 1, 0],
// ];

// const map2 = [
//   [0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
// ];

console.log(BunniesEscape(test1));

// console.log(BunniesEscape(map1));

// console.log(BunniesEscape(map2));
