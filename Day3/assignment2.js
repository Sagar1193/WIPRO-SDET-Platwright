// Temperature Conversion**
// You have an array of temperatures in Celsius: [0, 10, 20, 30]. Use .map() to create a new array where each temperature is converted to Fahrenheit.*(Formula: F = C \times 1.8 + 32)*
const celsiusTemperatures = [0, 10, 20, 30];
const fahrenheitTemperatures = celsiusTemperatures.map(temp => (temp * 1.8) + 32);
console.log(fahrenheitTemperatures); // Output: [32, 50, 68, 86]