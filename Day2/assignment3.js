let prices = ["100", "200", "300", "50"];

prices.splice(prices.length - 1, 1);
const total = prices
  .map(price => Number(price))
  .reduce((sum, val) => sum + val, 0);

console.log(`Total Price: $${total}`);