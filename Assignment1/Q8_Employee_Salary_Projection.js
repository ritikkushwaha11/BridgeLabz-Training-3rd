// Q8. Employee Salary Projection
// Calculate salary for each of the next five years.

const currentSalary = 30000;
const annualIncrementRate = 8; // percent per year

let salary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Increase salary by the annual increment percentage.
    salary += salary * (annualIncrementRate / 100);

    salaryReport.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Display all five yearly salaries in one table.
console.table(salaryReport);
