// Q1. Scope Conflict Resolver

// Global bonus variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local salary variable
    let salary = 40000;

    // Add the global bonus only for permanent employees
    if (isPermanent === true) {
        salary += bonus;
    }

    // Print total salary inside the function
    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ${salary}`);
}

// Test both outcomes
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
console.log(`Global bonus remains: ${bonus}`);
