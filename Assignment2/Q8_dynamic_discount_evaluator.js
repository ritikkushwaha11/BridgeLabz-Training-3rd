// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let subtotal = 0;
let discountedSubtotal = 0;

// Apply category-specific discounts using a loop and conditionals
for (const product of cart) {
    subtotal += product.price;

    let discountRate = 0;
    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    discountedSubtotal += discountedPrice;

    console.log(
        `${product.item}: original ₹${product.price}, ` +
        `discounted ₹${discountedPrice.toFixed(2)}`
    );
}

// reduce() calculates the total cart value
const totalCartValue = cart.reduce((sum, product) => sum + product.price, 0);

// Apply an extra 5% discount if the original cart total exceeds ₹50,000
const extraDiscountRate = totalCartValue > 50000 ? 0.05 : 0;
const finalTotal = discountedSubtotal * (1 - extraDiscountRate);

console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);
console.log(`Cart total (reduce): ₹${totalCartValue.toFixed(2)}`);
console.log(`Extra overall discount: ${extraDiscountRate * 100}%`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
