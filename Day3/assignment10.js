// Flattening (The Bonus)**
// Without using the built-in .flat() method, use .reduce() to turn this nested array into a single flat array:
// [[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, subArray) => acc.concat(subArray), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]