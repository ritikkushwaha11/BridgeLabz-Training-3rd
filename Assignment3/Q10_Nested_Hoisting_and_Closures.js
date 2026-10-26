"use strict";

// Q10 – Nested Hoisting and Closures
function outer() {
  console.log("outer count before assignment:", count); // undefined
  var count = 5;

  function inner() {
    console.log("inner count before assignment:", count); // undefined
    var count = 10; // This local declaration shadows outer count.
    console.log("inner count after assignment:", count); // 10
  }

  inner();
  console.log("outer count after inner():", count); // 5
}
outer();

// Arrow-function comparison:
function outerWithArrow() {
  const count = 5;
  const innerArrow = () => {
    // Arrow functions do not create their own "this", "arguments", or super,
// but a local var declaration still belongs to the arrow function's own scope.
    console.log("arrow inner before local declaration:", count);
    // Without a local declaration, this resolves to outer count (5).
  };
  innerArrow();
}
outerWithArrow();

// Call stack while debugging: outer() -> inner() -> return to outer().
// Hoisting creates a separate function execution context for each function.
// In inner(), its local var count is hoisted to undefined and shadows outer count.
