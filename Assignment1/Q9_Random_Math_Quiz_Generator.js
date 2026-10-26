// Q9. Random Math Quiz Generator
// Generate two numbers and one arithmetic operator at random.

const number1 = Math.floor(Math.random() * 20) + 1;
const number2 = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
    case "+":
        correctAnswer = number1 + number2;
        break;
    case "-":
        correctAnswer = number1 - number2;
        break;
    case "*":
        correctAnswer = number1 * number2;
        break;
    case "/":
        correctAnswer = number1 / number2;
        break;
    default:
        console.log("Unknown operator.");
}

const displayedAnswer = operator === "/"
    ? correctAnswer.toFixed(2)
    : correctAnswer;

console.log(`Question: ${number1} ${operator} ${number2} = ?`);
console.log(`Correct answer: ${displayedAnswer}`);
