// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words by splitting on whitespace
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Check for negative keywords without case sensitivity
const lowerFeedback = feedback.toLowerCase();
const hasNegativeFeedback =
    lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
