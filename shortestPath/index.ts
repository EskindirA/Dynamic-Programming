const ShortestPath = (
  map: number[][],
  rowIndex = 0,
  colIndex = 0,
  memo = {}
) => {
  const row = map.length - 1;
  const col = map[0].length - 1;
  const key = rowIndex + "x" + colIndex;

  const end = map[row][col];

  if (key in memo) return memo[key];
  if (rowIndex < 0 || rowIndex > row || colIndex < 0 || colIndex > col)
    return Number.MAX_VALUE;
  if (end === map[rowIndex][colIndex]) return 0;

  memo[key] = Number.MAX_VALUE;

  memo[key] =
    1 +
    Math.min(
      ShortestPath(map, rowIndex - 1, colIndex, memo),
      ShortestPath(map, rowIndex + 1, colIndex, memo),
      ShortestPath(map, rowIndex, colIndex - 1, memo),
      ShortestPath(map, rowIndex, colIndex + 1, memo)
    );

  return memo[key];
};

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(ShortestPath(test1));

// console.log(BunniesEscape(map1));

// console.log(BunniesEscape(map2));
