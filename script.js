// Add product to cart
function addToCart(productId) {
    // Retrieve cart from localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if product is already in cart
    var product = cart.find(function(item) {
      return item.id === productId;
    });
  
    // If product is already in cart, increase quantity
    if (product) {
      product.quantity++;
    } else {
      // Otherwise, add product to cart with quantity of 1
      cart.push({
        id: productId,
        quantity: 1
      });
    }
  
    // Save cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Display cart total
  function displayCartTotal() {
    // Retrieve cart from localStorage
    var cart = JSON.parse
  }