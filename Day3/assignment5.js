// Total Cost**
// Given an array of prices [19.99, 5.50, 3.99, 25.00], use .reduce() to calculate the total sum of the items.
const prices = [19.99, 5.50, 3.99, 25.00];
const totalCost = prices.reduce((total, price) => total + price, 0);
console.log(totalCost); // Output: 54.48