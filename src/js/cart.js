import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

// cart.js

// Add checkout button 
const checkoutButton = `
  <button class="checkout-button">Checkout</button>
`;

document.querySelector('.cart-footer').innerHTML += checkoutButton;

// Add click handler
document.querySelector('.checkout-button').addEventListener('click', openCheckout);

function openCheckout() {

  // Render checkout form
  const checkoutForm = `
    <form class="checkout-form">

      // Form fields go here

      <button type="submit">Place Order</button>

    </form>
  `;

  document.querySelector('.main').innerHTML = checkoutForm;

  // Calculate totals
  const subtotal = calculateSubtotal();
  const shipping = calculateShipping();
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  // Add event listener to submit form
  document.querySelector('.checkout-form').addEventListener('submit', submitOrder);
  
  function submitOrder(e) {
    e.preventDefault();
    
    // Submit order to server

    alert('Order submitted!');
  }

}

// Helper functions
function calculateSubtotal() {
  // Calculate subtotal
  return subtotal;
}

function calculateShipping() {
  // Calculate shipping
  return shipping; 
}

function calculateTax(subtotal) {
  // Calculate tax 
  return tax;
}

// Validate form fields

const name = document.querySelector('#name');

name.addEventListener('blur', () => {
  if(name.value.trim() === '') {
    showError(name, 'Name is required');
  } else {
    removeError(name);
  }
})

// Add validation like this for other fields

function showError(field, message) {
  // Show error message
}

function removeError(field) {
  // Remove error message
}

// Submit order

async function submitOrder(e) {

  e.preventDefault();

  // Validate form
  if(!validateForm()) {
    return; 
  }

  // Disable submit button
  document.querySelector('button[type="submit"]').disabled = true;

  try {

    // Submit order
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })

    if(!response.ok) {
      throw new Error('Network error');
    }

    // Show success message
    showMessage('Success! Your order has been placed.');

  } catch(err) {

    // Show failure message
    showMessage('Oops, something went wrong. Please try again later.');
    
    // Enable submit button
    document.querySelector('button[type="submit"]').disabled = false;
  }

}

function showMessage(msg) {
  // Display message to user
}
