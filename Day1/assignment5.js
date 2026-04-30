let cart=["bread", "biscuits", "chips"];
console.log("Cart before adding items:", cart); // Cart before adding items: [ 'bread', 'biscuits', 'chips' ]
cart.push("milk");
cart.unshift("eggs");

console.log("Cart after adding :", cart); // Cart after adding eggs and milk: [ 'eggs', 'bread', 'biscuits', 'chips', 'milk' ]
cart.pop();
console.log("Cart after removing last item:", cart); // Cart after removing last item: [ 'eggs', 'bread', 'biscuits', 'chips' ]
