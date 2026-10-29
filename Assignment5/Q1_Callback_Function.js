// Q1: Demonstrate callback flow with greetUser().

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    // Call the callback after greeting the user.
    callback();
}

// Demonstrate the callback flow.
greetUser("Aditi", showEndMessage);
