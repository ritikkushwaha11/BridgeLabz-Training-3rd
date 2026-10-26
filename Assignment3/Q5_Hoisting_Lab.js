"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
// Original sequence explained:
// console.log(score) prints undefined: var is hoisted and initialized to undefined.
// announce() works: function declarations are hoisted with their function body.
// let status is in the temporal dead zone before its declaration.
// Calling startGame before status is initialized would throw ReferenceError.

var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";

console.log("score:", score);
announce();
startGame();

function startGame() {
  console.log("status:", status);
}

// Arrow-function comparison:
// Function declarations can be called before their definition.
// A const-bound arrow function cannot be called before initialization.
const startGameArrow = () => console.log("Arrow status:", status);
startGameArrow();

// Debugging: watch score and status; step through declarations to see initialization.
