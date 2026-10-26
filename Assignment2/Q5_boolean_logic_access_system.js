// Q5. Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // Secure only when all required conditions are true.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use ! to show the opposite condition as well.
    if (isSecure && !(!isDoorLocked || !isWindowClosed)) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

// Test a secure setup
checkSecurity();

// Change a condition and test an unsafe setup
isWindowClosed = false;
checkSecurity();
