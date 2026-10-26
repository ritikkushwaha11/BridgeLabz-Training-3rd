// Q2. Multi-Type Data Summary
// Create values of different JavaScript data types and print their types.

const userName = "Ishita";                 // string
const age = 20;                           // number
const isStudent = true;                   // boolean
const subjects = ["JavaScript", "HTML"];  // array
const student = { name: "Ishita", age: 20 }; // object
const middleName = null;                  // null
let address;                              // undefined

// Array.isArray() is needed because typeof an array returns "object".
const dataSummary = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "age", Value: age, Type: typeof age },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "student", Value: JSON.stringify(student), Type: typeof student },
    { Label: "middleName", Value: String(middleName), Type: middleName === null ? "null" : typeof middleName },
    { Label: "address", Value: String(address), Type: typeof address }
];

// One console.table() statement displays the complete report.
console.table(dataSummary);
