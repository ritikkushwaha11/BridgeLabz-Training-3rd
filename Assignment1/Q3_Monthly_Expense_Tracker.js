// Q3. Monthly Expense Tracker
// Change these example expenses to update the calculation.

const expenses = {
    food: 4000,
    travel: 1500,
    rent: 8000,
    bills: 1200,
    leisure: 1000
};

// Add all five categories.
let total = 0;
for (const category in expenses) {
    total += expenses[category];
}

// Calculate the average expense across the five categories.
const categoryCount = Object.keys(expenses).length;
const average = total / categoryCount;

// Add 10% tax using an assignment operator.
const taxRate = 0.10;
const taxAmount = total * taxRate;
let finalAmount = total;
finalAmount += taxAmount;

console.log(`Total before tax: ₹${total.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
