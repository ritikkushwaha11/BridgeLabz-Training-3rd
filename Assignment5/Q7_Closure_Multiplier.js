// Q7: Return a function that remembers the multiplier using a closure.

function makeMultiplier(multiplier) {
    // The returned function can still access `multiplier`
    // after makeMultiplier() has finished running.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

const double = makeMultiplier(2);
console.log(double(5)); // 10

/*
Closure explanation:
The inner function remembers the `multiplier` variable from the outer
makeMultiplier() call. That remembered variable remains available when
the returned function is called later.
*/
