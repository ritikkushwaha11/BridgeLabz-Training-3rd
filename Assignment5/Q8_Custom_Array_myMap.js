// Q8: Add a custom myMap() method to Array.prototype.
// This example demonstrates map-like behavior using core JavaScript.

Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError("myMap expects a function as its callback.");
    }

    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Match map() behavior by skipping empty slots in sparse arrays.
        if (Object.prototype.hasOwnProperty.call(this, index)) {
            result[index] = callback.call(
                thisArg,
                this[index],
                index,
                this
            );
        }
    }

    return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap(number => number * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] — original array is unchanged
