"use strict";

// Q9 – JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;
  try {
    const parsed = JSON.parse(rawData[index]);

    if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
        !Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error("Missing required key: user or age");
    }

    const age = Number(parsed.age);
    if (!Number.isFinite(age)) {
      throw new TypeError("Age must be numeric");
    }

    const cleanedEntry = { ...parsed, age };
    cleanData.push(cleanedEntry);
    if (age < 18) under18Users.push(cleanedEntry);
    console.log(`Line ${lineNumber}: VALID`);
  } catch (error) {
    errors.push({ line: lineNumber, message: error.message });
    console.log(`Line ${lineNumber}: ERROR — ${error.message}`);
  }
}

console.log("\n===== JSON AUDIT REPORT =====");
console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Under-18 users:", under18Users);
console.log(`Valid entries: ${cleanData.length}`);
console.log(`Invalid entries: ${errors.length}`);

// Debugging: place a breakpoint at JSON.parse. When parsing fails, control
// jumps directly to catch; later lines in the try block are skipped.
