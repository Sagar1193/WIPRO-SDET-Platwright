const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

// Callback Function
const isEligible = (product) => {
  return (
    product?.category === "Electronics" &&
    product?.price > 200
  );
};

function applyPromo(cart, promoCallback) {

  let discountedCount = 0;
  let totalSavings = 0;

  const updatedCart = cart.map(product => {

    if (promoCallback(product)) {

      const discount = product.price * 0.10;
      const newPrice = product.price - discount;

      discountedCount++;
      totalSavings += discount;

      return {
        ...product,
        price: Number(newPrice.toFixed(2)),
        isDiscounted: true
      };
    }

    return {
      ...product,
      isDiscounted: false
    };
  });

  console.log(
    `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings.toFixed(2)}.`
  );

  // Simulate server delay
  setTimeout(() => {
    console.log("Updated Cart:");
    console.log(updatedCart);
  }, 1000);
}

applyPromo(cart, isEligible);