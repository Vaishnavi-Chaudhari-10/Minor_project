const products = [
  { 
    id: 1, 
    name: "Classic Sneakers", 
    price: 2999, 
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  { 
    id: 2, 
    name: "Modern Watch", 
    price: 4999, 
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f"
  },
  { 
    id: 3, 
    name: "Leather Bag", 
    price: 3999, 
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  }
];

const productContainer = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const modal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

let cart = [];

// Display products neatly
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productContainer.appendChild(card);
});

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}

// Update cart UI
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} × ${item.qty}
      <span>₹${item.price * item.qty}</span>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.reduce((a, c) => a + c.qty, 0);
}

// Open & close cart
cartBtn.addEventListener("click", () => modal.style.display = "flex");
closeCart.addEventListener("click", () => modal.style.display = "none");

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Checkout coming soon!");
});
