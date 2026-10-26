"use strict";

// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidData = [];

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Treat blank strings and missing values as invalid even though Number(" ") is 0.
  const isBlankString = typeof value === "string" && value.trim() === "";
  const isMissing = value === null || value === undefined;
  const isValidNumber = !isBlankString && !isMissing && Number.isFinite(numberValue);

  console.log(`\nItem ${i + 1}`);
  console.log(`Original: ${String(value)}`);
  console.log(`Number: ${numberValue}`);
  console.log(`Boolean: ${booleanValue}`);
  console.log(`String: "${stringValue}"`);

  if (isValidNumber) {
    validNumericData.push(numberValue);
    console.log("Status: VALID numeric data");
  } else {
    invalidData.push({ value, reason: isBlankString ? "blank string" :
      isMissing ? "missing value" : "not a finite number" });
    console.log("Status: INVALID numeric data");
  }
}

console.log("\n===== FINAL REPORT =====");
console.log("Valid numeric values:", validNumericData);
console.log("Invalid values:", invalidData);
console.log(`Valid count: ${validNumericData.length}`);
console.log(`Invalid count: ${invalidData.length}`);

// Note: Boolean("false") is true because every non-empty string is truthy.
