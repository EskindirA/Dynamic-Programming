var ShortestPath = function (map, rowIndex, colIndex, memo) {
    if (rowIndex === void 0) { rowIndex = 0; }
    if (colIndex === void 0) { colIndex = 0; }
    if (memo === void 0) { memo = {}; }
    var row = map.length - 1;
    var col = map[0].length - 1;
    var key = rowIndex + "x" + colIndex;
    var end = map[row][col];
    if (key in memo)
        return memo[key];
    if (rowIndex < 0 || rowIndex > row || colIndex < 0 || colIndex > col)
        return Number.MAX_VALUE;
    if (end === map[rowIndex][colIndex])
        return 0;
    memo[key] = Number.MAX_VALUE;
    memo[key] =
        1 +
            Math.min(ShortestPath(map, rowIndex - 1, colIndex, memo), ShortestPath(map, rowIndex + 1, colIndex, memo), ShortestPath(map, rowIndex, colIndex - 1, memo), ShortestPath(map, rowIndex, colIndex + 1, memo));
    return memo[key];
};
var test1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(ShortestPath(test1));
// console.log(BunniesEscape(map1));
// console.log(BunniesEscape(map2));
