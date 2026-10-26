"use strict";

// Q6 – Pyramid Pattern Generator
// Default row count is 5. Change this value to test other inputs.
const userInput = 5;
const rows = Number(userInput);

if (!Number.isInteger(rows) || rows < 1) {
  console.log("Please use a positive whole number for the row count.");
} else {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
}

// Replacing let with var:
// var is function-scoped rather than block-scoped. In these simple synchronous
// loops, the printed pattern remains the same. Differences are easier to see
// when a loop variable is captured by callbacks or redeclared in a block.
// Debugging: watch i, j, and line while stepping through the nested loops.
// Strict mode catches undeclared variables such as: for (i = 1; i <= rows; i++).
