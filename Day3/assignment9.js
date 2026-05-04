// The Average**
// Write a short script using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].
const testResults = [80, 90, 70, 100];
const averageScore = testResults.reduce((total, score) => total + score, 0) / testResults.length;
console.log(averageScore); // Output: 85