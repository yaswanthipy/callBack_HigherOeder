function processProducts(products) {
  // Step 1: Use map() to create new array of product names
  const productNames = products.map(item => item.name);

  // Step 2: Use forEach() to log messages based on price
  products.forEach(item => {
    if (item.price > 50) {
      console.log(`${item.name} is above 50,000`);
    } else {
      console.log(`${item.name} is below 5000`);
    }
  });

  return productNames; // returning new array (optional)
}


const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];


processProducts(products);
