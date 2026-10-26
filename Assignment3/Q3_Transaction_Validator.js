"use strict";

// Q3 – Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index];
  try {
    if (transaction === null || transaction === undefined) {
      const error = new Error("Transaction entry is null or undefined");
      error.name = "NullEntryError";
      throw error;
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
      const error = new Error("Transaction is missing id or amount");
      error.name = "MissingFieldError";
      throw error;
    }
    if (transaction.amount < 0) {
      const error = new Error("Transaction amount cannot be negative");
      error.name = "NegativeAmountError";
      throw error;
    }
    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id}: VALID`);
  } catch (error) {
    invalidTransactions.push({ index: index + 1, transaction, type: error.name, message: error.message });
    console.log(`Transaction at position ${index + 1}: ${error.name} — ${error.message}`);
  }
}

console.log("\n===== TRANSACTION REPORT =====");
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);

// Debugging: set a breakpoint on the first line inside the loop.
// Watch: index, transaction, validTransactions, invalidTransactions.
