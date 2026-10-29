// Q4: Share getDetails() through Car.prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on the constructor's prototype.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

carOne.getDetails();
carTwo.getDetails();

// Both objects use the same shared prototype method.
console.log(
    "Shared method:",
    carOne.getDetails === carTwo.getDetails
); // true
