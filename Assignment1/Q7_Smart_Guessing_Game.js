// Q7. Smart Guessing Game
// The secret number is randomly generated from 1 to 50.
// Change userGuess to test the game.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value: change this number from 1 to 50.

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers of the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
