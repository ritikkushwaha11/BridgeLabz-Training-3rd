// Q4. Array Performance Analyzer

// Create 8 random integer scores between 30 and 100 (inclusive)
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to prepare a display list with student labels
const studentScores = scores.map((score, index) => `Student ${index + 1}: ${score}`);

// Find highest and lowest scores
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Calculate average with reduce()
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Count students who passed using filter()
const passedCount = scores.filter(score => score >= 50).length;

console.log(`Array Performance Summary
${studentScores.join("\n")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (score >= 50): ${passedCount} out of ${scores.length}`);
