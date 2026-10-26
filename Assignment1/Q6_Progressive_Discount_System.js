// Q6. Progressive Discount System
// Change purchaseTotal to test different discount levels.

const purchaseTotal = 7500;

let discountRate;

if (purchaseTotal >= 10000) {
    discountRate = 0.25; // 25% discount
} else if (purchaseTotal >= 5000) {
    discountRate = 0.15; // 15% discount
} else if (purchaseTotal >= 2000) {
    discountRate = 0.05; // 5% discount
} else {
    discountRate = 0; // No discount
}

const discountAmount = Math.round(purchaseTotal * discountRate);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: ₹${purchaseTotal}`);
console.log(`Discount: ${discountRate * 100}%`);
console.log(`Discount amount: ₹${discountAmount}`);
console.log(`Final price after discount: ₹${finalPrice}`);
