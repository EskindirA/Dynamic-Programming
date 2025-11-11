# Dynamic Programming

This repository contains implementation of dynamic programming algorithms in Typescript. 

## What is Dynamic Programming?

Dynamic programming is an algorithmic technique used to solve complex problems by breaking them down into smaller subproblems and solving each subproblem only once. The solutions to the subproblems are stored in a table, so they can be used to solve larger problems. Dynamic programming is especially useful for problems that have overlapping subproblems and optimal substructure, meaning that the solution to the problem can be built from the solutions to its subproblems.

## Contents

This repository contains implementation of the following dynamic programming algorithms:

- Fibonacci Sequence
- All Construct
- Best Sum
- Block Traveller
- Can Construct
- Can Sum
- Count Construct
- Grid Traveller
- How Sum
- Shortest Path

## Getting Started

To use the code in this repository, you must first clone or download the repository to your local machine. Each programming language has its own folder, containing the implementation of the dynamic programming algorithms in that language.

## Contributing

Contributions to this repository are welcome. If you have an implementation of a dynamic programming algorithm in a programming language that is not currently included in this repository, please open a pull request.

## License

This repository is licensed under the MIT License. See the `LICENSE` file for more information.


const text = editor.document.getText();
const regex = /TODO/g;
const ranges: vscode.Range[] = [];
let match;
while ((match = regex.exec(text)) !== null) {
  const start = editor.document.positionAt(match.index);
  const end = editor.document.positionAt(match.index + match[0].length);
  ranges.push(new vscode.Range(start, end));
}
editor.setDecorations(highlightDecoration, ranges);
