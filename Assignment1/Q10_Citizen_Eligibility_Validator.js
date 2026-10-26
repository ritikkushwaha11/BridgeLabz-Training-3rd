// Q10. Citizen Eligibility Validator
// Change age and isCitizen to test different outcomes.

const age = 19;
const isCitizen = true;

if (isCitizen) {
    if (age >= 18) {
        // Following the assignment's age/citizenship rules:
        // age 18–20 is "Eligible to vote only."
        // age above 20 is eligible for all services.
        if (age <= 20) {
            console.log("Eligible to vote only.");
        } else {
            console.log("Eligible for all services.");
        }
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
