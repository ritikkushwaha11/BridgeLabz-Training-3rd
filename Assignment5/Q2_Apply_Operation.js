// Q2: Apply a callback operation to every number in an array.

function applyOperation(numbers, operation) {
    const results = [];

    for (const number of numbers) {
        results.push(operation(number));
    }

    return results;
}

const numbers = [1, 2, 3, 4];

// Double each number.
const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

// Square each number using an arrow function.
const squaredNumbers = applyOperation(numbers, number => number * number);

console.log("Doubled:", doubledNumbers); // [2, 4, 6, 8]
console.log("Squared:", squaredNumbers); // [1, 4, 9, 16]
