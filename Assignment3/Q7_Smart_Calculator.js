"use strict";

// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Unknown operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "divide":
      if (b === 0) throw new RangeError("Cannot divide by zero.");
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw new RangeError("Cannot calculate the real square root of a negative number.");
      return Math.sqrt(a);
    case "subtract":
      return a - b;
    default:
      throw new InvalidOperationError(operation);
  }
}

console.log("===== CALCULATOR SUMMARY =====");
for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation}: ${result}`);
  } catch (error) {
    console.log(`${operation}: ERROR — ${error.name}: ${error.message}`);
  }
}

// Extra checks for required error cases:
for (const [operation, a, b] of [
  ["root", -9, 0],
  ["multiply", 4, 5]
]) {
  try {
    console.log(`${operation}: ${calculate(operation, a, b)}`);
  } catch (error) {
    console.log(`${operation}: ERROR — ${error.name}: ${error.message}`);
  }
}
