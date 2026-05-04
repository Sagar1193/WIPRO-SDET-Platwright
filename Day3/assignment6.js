// Counting Occurrences**
// Use .reduce() to count how many times the word "apple" appears in this array:
// ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'].
// ### **Level 4: Advanced Scenarios**

const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const appleCount = fruits.reduce((count, fruit) => {
  if (fruit === 'apple') {
    return count + 1;
  }
  return count;
}, 0);
console.log(appleCount); // Output: 3