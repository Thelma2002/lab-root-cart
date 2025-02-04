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

  // Get the product row element that contains the button
  const productRow = target.parentNode.parentNode;

  // Remove the product row from the DOM
  productRow.parentNode.removeChild(productRow);

  // Update the total price after removing the product
  calculateAll();
}

// Function to run when the document is ready
window.addEventListener('DOMContentLoaded', () => {
  // Query all "Remove" buttons
  const removeButtons = document.querySelectorAll('.btn-remove');

  // Loop through all "Remove" buttons and add click event listeners
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  // Add event listener to the calculate prices button (if it's already in your code)
  const calculatePricesBtn = document.getElementById('calculate');
  if (calculatePricesBtn) {
    calculatePricesBtn.addEventListener('click', calculateAll);
  }
});

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
