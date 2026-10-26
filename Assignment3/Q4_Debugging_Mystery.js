"use strict";

// Q4 – Debugging Mystery
function showMessage() {
  // In strict mode, assigning to an undeclared identifier throws ReferenceError.
  // greeting = "Welcome"; // Original faulty line
  const greeting = "Welcome"; // Fix: declare the variable in the function scope.
  console.log(greeting);
}
showMessage();

// Debugging in VS Code:
// 1. Set a breakpoint on the const greeting line.
// 2. Add "greeting" to WATCH after execution reaches the declaration.
// 3. Step over console.log; inspect the CALL STACK for showMessage and the caller.
// Scope rule: const/let create block-scoped bindings; var is function-scoped.
// Strict mode does not allow accidental creation of global variables.
