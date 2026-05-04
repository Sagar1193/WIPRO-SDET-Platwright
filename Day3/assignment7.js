// Array Transformation**
// Given an array of numbers [1, 2, 3, 4, 5, 6], use a combination of .filter() and .map() to:
// 1. Keep only the even numbers.
// 2. Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).
const numbers = [1, 2, 3, 4, 5, 6];
const evenSquares = numbers
  .filter(num => num % 2 === 0) // Step 1: Keep only even numbers
  .map(num => num ** 2); // Step 2: Square the even numbers
console.log(evenSquares); // Output: [4, 16, 36]