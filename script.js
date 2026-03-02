const products = [
  { name: "Dell XPS 13", specs: "Core i7 • 16GB RAM • 512GB SSD", price: 165000 },
  { name: "HP Spectre x360", specs: "Core i7 • 16GB RAM • 1TB SSD", price: 189000 },
  { name: "Lenovo ThinkPad X1 Carbon", specs: "Core i7 • 16GB RAM • 512GB SSD", price: 198000 },
  { name: "Apple MacBook Air M2", specs: "Apple M2 • 8GB RAM • 256GB SSD", price: 172000 },
  { name: "ASUS Zenbook 14", specs: "Core i5 • 16GB RAM • 512GB SSD", price: 139000 },
  { name: "Acer Swift 3", specs: "Ryzen 7 • 16GB RAM • 512GB SSD", price: 121000 },
  { name: "MSI Modern 15", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 98000 },
  { name: "Huawei MateBook D15", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 102000 },
  { name: "Samsung Galaxy Book3", specs: "Core i7 • 16GB RAM • 512GB SSD", price: 158000 },
  { name: "Dell Inspiron 15", specs: "Core i5 • 8GB RAM • 256GB SSD", price: 88000 },
  { name: "HP Envy 14", specs: "Core i7 • 16GB RAM • 1TB SSD", price: 176000 },
  { name: "Lenovo IdeaPad Slim 5", specs: "Ryzen 5 • 8GB RAM • 512GB SSD", price: 94000 },
  { name: "ASUS VivoBook 15", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 86000 },
  { name: "Acer Aspire 5", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 82000 },
  { name: "MSI Katana GF66", specs: "Core i7 • 16GB RAM • 1TB SSD • RTX 3060", price: 205000 },
  { name: "Lenovo Legion 5", specs: "Ryzen 7 • 16GB RAM • 1TB SSD • RTX 4060", price: 238000 },
  { name: "HP Omen 16", specs: "Core i7 • 16GB RAM • 1TB SSD • RTX 4060", price: 249000 },
  { name: "ASUS ROG Strix G16", specs: "Core i9 • 16GB RAM • 1TB SSD • RTX 4070", price: 312000 },
  { name: "Dell G15", specs: "Core i7 • 16GB RAM • 512GB SSD • RTX 4050", price: 210000 },
  { name: "Acer Nitro 5", specs: "Core i5 • 16GB RAM • 512GB SSD • RTX 3050", price: 165000 },
  { name: "MacBook Pro 14 M3", specs: "Apple M3 • 16GB RAM • 512GB SSD", price: 298000 },
  { name: "Microsoft Surface Laptop 5", specs: "Core i7 • 16GB RAM • 512GB SSD", price: 225000 },
  { name: "Razer Blade 15", specs: "Core i7 • 16GB RAM • 1TB SSD • RTX 3070", price: 320000 },
  { name: "LG Gram 16", specs: "Core i7 • 16GB RAM • 1TB SSD", price: 214000 },
  { name: "Dell Latitude 5440", specs: "Core i5 • 16GB RAM • 512GB SSD", price: 154000 },
  { name: "HP ProBook 450 G10", specs: "Core i5 • 16GB RAM • 512GB SSD", price: 136000 },
  { name: "Lenovo ThinkBook 14", specs: "Core i5 • 16GB RAM • 512GB SSD", price: 128000 },
  { name: "ASUS ExpertBook B1", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 112000 },
  { name: "Acer TravelMate P2", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 106000 },
  { name: "HP Pavilion 15", specs: "Core i5 • 8GB RAM • 512GB SSD", price: 99000 }
];

const productGrid = document.getElementById("productGrid");

function formatKes(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}

function createProductCard(product, index) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header">
      <h3 class="product-name">${product.name}</h3>
      <p class="specs">${product.specs}</p>
      <div class="price">${formatKes(product.price)}</div>
    </div>
    <form class="order-form" data-product="${product.name}">
      <div>
        <label for="name-${index}">Full Name</label>
        <input id="name-${index}" name="name" type="text" required placeholder="Your name" />
      </div>
      <div>
        <label for="phone-${index}">Phone Number</label>
        <input id="phone-${index}" name="phone" type="tel" required placeholder="07XX XXX XXX" />
      </div>
      <div>
        <label for="quantity-${index}">Quantity</label>
        <select id="quantity-${index}" name="quantity" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label for="notes-${index}">Notes (Optional)</label>
        <textarea id="notes-${index}" name="notes" rows="2" placeholder="Delivery location or extra details"></textarea>
      </div>
      <button type="submit" class="order-btn">Place Order</button>
      <div class="success" aria-live="polite"></div>
    </form>
  `;

  return card;
}

products.forEach((product, index) => {
  productGrid.appendChild(createProductCard(product, index));
});

document.querySelectorAll(".order-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const product = form.dataset.product;
    const message = form.querySelector(".success");

    message.textContent = `Order received for ${product}. ElmiTech will contact you shortly.`;
    form.reset();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
