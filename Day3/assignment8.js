// Object Extraction**
// You have an array of "Product" objects:
// [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }]
// Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].
// ### **Level 5: Logic Challenges**
const products = [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }];
const productTitles = products.map(product => product.title);
console.log(productTitles); // Output: ['Laptop', 'Mouse']