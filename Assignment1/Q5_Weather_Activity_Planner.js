// Q5. Weather Activity Planner
// Change the values below to test different weather conditions.

const temperature = 22; // degrees Celsius
const isRaining = false;
const windSpeed = 10; // km/h

let advice;

if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else {
    advice = "Perfect day for a walk.";
}

// Example of combining && and || in a logical condition.
const uncomfortableWeather =
    isRaining || (temperature < 15 && windSpeed > 20);

console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind speed: ${windSpeed} km/h`);
console.log(`Advice: ${advice}`);
console.log(`Uncomfortable weather: ${uncomfortableWeather}`);
