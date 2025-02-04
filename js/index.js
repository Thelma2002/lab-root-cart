// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 // Get price and quantity elements
 const priceElement = product.querySelector('.price span');
 const quantityElement = product.querySelector('.quantity input');

 // Extract the values from the elements
 const price = parseFloat(priceElement.innerText);
 const quantity = parseInt(quantityElement.value);

 // Calculate the subtotal
 const subtotal = price * quantity;

 // Get the subtotal element
 const subtotalElement = product.querySelector('.subtotal span');

 // Update the subtotal in the DOM
 subtotalElement.innerText = subtotal.toFixed(2);

 // Return the subtotal value
 return subtotal;
}

function calculateAll() {
 

// Get all products in the cart
const products = document.querySelectorAll('tr.product');

// Initialize total value
let total = 0;

// Iterate through each product and update subtotal
products.forEach(product => {
  total += updateSubtotal(product);
});

// Update the total value in the DOM
const totalElement = document.querySelector('#total-value span');
totalElement.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
