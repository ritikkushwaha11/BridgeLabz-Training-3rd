"use strict";

// Q8 – Strict Mode Showdown
// The following invalid examples are tested with Function() so their syntax
// errors can be caught and displayed instead of stopping this whole file.

try {
  Function('"use strict"; function demo(a, a) { return a; } demo(5, 10);')();
} catch (error) {
  console.log("Strict duplicate-parameter example:", error.name, error.message);
}

try {
  Function('"use strict"; total = 10;')();
} catch (error) {
  console.log("Strict undeclared-variable example:", error.name, error.message);
}

try {
  Function('"use strict"; let total = 10; delete total;')();
} catch (error) {
  console.log("Strict delete-identifier example:", error.name, error.message);
}

// Non-strict comparison: duplicate parameters are allowed, and assigning to an
// undeclared name creates a global in classic non-strict scripts.
try {
  const nonStrictDuplicate = Function('function demo(a, a) { return a; } return demo(5, 10);');
  console.log("Non-strict duplicate parameters return:", nonStrictDuplicate());
} catch (error) {
  console.log("Unexpected non-strict error:", error.message);
}

// Correct ES6 version: unique parameters, declared variables, no delete of a binding.
function demoCorrect(first, second) {
  const total = first + second;
  return total;
}
console.log("Correct ES6 result:", demoCorrect(5, 10));

// Strict mode makes duplicate parameters, undeclared assignments, and deleting
// an unqualified identifier illegal. Run each example in isolation to compare.
