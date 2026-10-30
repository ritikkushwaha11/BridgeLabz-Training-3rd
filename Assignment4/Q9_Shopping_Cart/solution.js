// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (price < 0 || quantity <= 0) {
      throw new Error("Price must be non-negative and quantity must be positive.");
    }
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  applyCoupon(coupon) {
    // Accepted formats: SAVE followed by digits, or DISC followed by digits.
    const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;
    const match = coupon.match(couponPattern);

    if (!match) {
      console.log("Invalid coupon format.");
      return this.getTotal();
    }

    const discountPercent = Number(match[2]);
    if (discountPercent > 100) {
      console.log("Coupon discount cannot exceed 100%.");
      return this.getTotal();
    }

    return this.getTotal() * (1 - discountPercent / 100);
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 200, 3);

console.log(`Cart Total: ₹${cart.getTotal().toFixed(2)}`);

const coupon = "SAVE20";
const finalTotal = cart.applyCoupon(coupon);
console.log(`Final Total with ${coupon}: ₹${finalTotal.toFixed(2)}`);
