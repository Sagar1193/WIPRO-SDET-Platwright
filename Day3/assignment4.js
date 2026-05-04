// String Lengths
// Write a function that takes an array of strings and uses .filter() to return only the strings that have more than 5 characters. 
// Level 3: The Power of Reduce

const strings = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
const longStrings = strings.filter(str => str.length > 5);
console.log(longStrings); // Output: ['JavaScript', 'awesome']