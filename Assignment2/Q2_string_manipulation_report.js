// Q2. String Manipulation Report

const productName = " wireless headphones PRO ";

// Trim extra spaces, convert to lowercase, and capitalize each word
const cleanedWords = productName.trim().toLowerCase().split(" ").map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
);
let cleanedTitle = cleanedWords.join(" ");

// Replace "Pro" with "Pro Edition"
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
