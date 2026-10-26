// Q1. Personalized Login Greeting
// Display a greeting based on the current hour.

// Replace "Ishita" with the user's name.
const userName = "Ishita";

// getHours() returns the current hour from 0 to 23.
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
