const products = [
  {
    id: "basmati-5kg",
    name: { de: "Basmati Reis Premium", en: "Premium basmati rice" },
    categoryKey: "rice",
    size: { de: "5 kg Sack", en: "5 kg bag" },
    price: 10.99,
    oldPrice: 12.99,
    unit: "2,20 €/kg",
    badge: { de: "Angebot", en: "Deal" },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mango",
    name: { de: "Mango reif", en: "Ripe mango" },
    categoryKey: "produce",
    size: { de: "1 Stück", en: "1 piece" },
    price: 1.79,
    unit: "1,79 €/Stk.",
    badge: { de: "Frisch", en: "Fresh" },
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "linsen",
    name: { de: "Rote Linsen", en: "Red lentils" },
    categoryKey: "rice",
    size: { de: "1 kg Packung", en: "1 kg pack" },
    price: 2.69,
    unit: "2,69 €/kg",
    badge: { de: "Beliebt", en: "Popular" },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sumach",
    name: { de: "Sumach Gewürz", en: "Sumac spice" },
    categoryKey: "spices",
    size: { de: "150 g Dose", en: "150 g tin" },
    price: 2.49,
    unit: "16,60 €/kg",
    badge: { de: "Neu", en: "New" },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "baklava",
    name: { de: "Baklava Mix", en: "Baklava mix" },
    categoryKey: "specialties",
    size: { de: "500 g Schale", en: "500 g tray" },
    price: 6.49,
    oldPrice: 7.49,
    unit: "12,98 €/kg",
    badge: { de: "Angebot", en: "Deal" },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ayran",
    name: { de: "Ayran", en: "Ayran" },
    categoryKey: "drinks",
    size: { de: "1 l Flasche", en: "1 l bottle" },
    price: 1.59,
    unit: "1,59 €/l",
    badge: { de: "Kühl", en: "Chilled" },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "oliven",
    name: { de: "Grüne Oliven", en: "Green olives" },
    categoryKey: "specialties",
    size: { de: "700 g Glas", en: "700 g jar" },
    price: 3.99,
    unit: "5,70 €/kg",
    badge: { de: "Mediterran", en: "Mediterranean" },
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hack",
    name: { de: "Frische Hackfleisch-Auswahl", en: "Fresh minced-meat selection" },
    categoryKey: "fresh",
    size: { de: "Demo-Preis pro 500 g", en: "Demo price per 500 g" },
    price: 4.99,
    unit: "9,98 €/kg",
    badge: { de: "Demo", en: "Demo" },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "granatapfel",
    name: { de: "Granatapfel", en: "Pomegranate" },
    categoryKey: "produce",
    size: { de: "1 Stück", en: "1 piece" },
    price: 1.29,
    unit: "1,29 €/Stk.",
    badge: { de: "Saisonal", en: "Seasonal" },
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tee",
    name: { de: "Schwarzer Tee", en: "Black tea" },
    categoryKey: "drinks",
    size: { de: "500 g Packung", en: "500 g pack" },
    price: 3.79,
    unit: "7,58 €/kg",
    badge: { de: "Vorrat", en: "Pantry" },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fladenbrot",
    name: { de: "Fladenbrot", en: "Flatbread" },
    categoryKey: "fresh",
    size: { de: "1 Stück", en: "1 piece" },
    price: 1.19,
    unit: "1,19 €/Stk.",
    badge: { de: "Täglich", en: "Daily" },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "chili",
    name: { de: "Chiliflocken", en: "Chili flakes" },
    categoryKey: "spices",
    size: { de: "200 g Beutel", en: "200 g bag" },
    price: 2.29,
    unit: "11,45 €/kg",
    badge: { de: "Scharf", en: "Spicy" },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
  }
];

const state = {
  filter: "all",
  lang: "de",
  cart: new Map()
};

const translations = {
  de: {
    announcementLabel: "Konzept-Prototyp für GIDA Markt",
    announcementHours: "Geprüfte Öffnungszeiten: Mo-Sa 05:00-24:00, So 05:00-16:00",
    searchPlaceholder: "Reis, Gewürze, Baklava, Mango...",
    searchButton: "Suchen",
    openCart: "Warenkorb öffnen",
    closeCart: "Warenkorb schließen",
    cartLabel: "Warenkorb",
    navDeals: "Angebote",
    navAssortment: "Sortiment",
    navFresh: "Frische",
    navMarket: "Marktinfo",
    navLocation: "Anfahrt",
    heroEyebrow: "Frankfurt-Griesheim · Lebensmittel aus vielen Küchen",
    catAll: "Alle",
    catProduce: "Obst & Gemüse",
    catRice: "Reis & Hülsenfrüchte",
    catSpices: "Gewürze",
    catFresh: "Frische",
    catDrinks: "Getränke",
    catSpecialties: "Spezialitäten",
    addToCart: "In den Warenkorb",
    decrease: "Menge verringern",
    increase: "Menge erhöhen",
    remove: "Entfernen",
    emptyCart: "Noch keine Produkte im Warenkorb."
  },
  en: {
    announcementLabel: "Concept prototype for GIDA Markt",
    announcementHours: "Verified opening hours: Mon-Sat 05:00-24:00, Sun 05:00-16:00",
    searchPlaceholder: "Rice, spices, baklava, mango...",
    searchButton: "Search",
    openCart: "Open cart",
    closeCart: "Close cart",
    cartLabel: "Cart",
    navDeals: "Deals",
    navAssortment: "Assortment",
    navFresh: "Fresh food",
    navMarket: "Market info",
    navLocation: "Location",
    heroEyebrow: "Frankfurt-Griesheim · Food from many kitchens",
    catAll: "All",
    catProduce: "Fruit & vegetables",
    catRice: "Rice & pulses",
    catSpices: "Spices",
    catFresh: "Fresh food",
    catDrinks: "Drinks",
    catSpecialties: "Specialties",
    addToCart: "Add to cart",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
    remove: "Remove",
    emptyCart: "Your cart is still empty."
  }
};

const categoryLabels = {
  produce: { de: "Obst & Gemüse", en: "Fruit & vegetables" },
  rice: { de: "Reis & Hülsenfrüchte", en: "Rice & pulses" },
  spices: { de: "Gewürze", en: "Spices" },
  fresh: { de: "Frische", en: "Fresh food" },
  drinks: { de: "Getränke", en: "Drinks" },
  specialties: { de: "Spezialitäten", en: "Specialties" }
};

const productGrid = document.querySelector("#productGrid");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartEmpty = document.querySelector("#cartEmpty");
const cartCount = document.querySelector("#cartCount");
const cartSubtotal = document.querySelector("#cartSubtotal");
const cartTotal = document.querySelector("#cartTotal");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

const formatPrice = (value) => new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
}).format(value);

function productQty(id) {
  return state.cart.get(id) || 0;
}

function visibleProducts() {
  if (state.filter === "all") return products;
  return products.filter((product) => product.categoryKey === state.filter);
}

function renderProducts() {
  productGrid.innerHTML = visibleProducts().map((product) => {
    const qty = productQty(product.id);
    const name = product.name[state.lang];
    const size = product.size[state.lang];
    const badge = product.badge[state.lang];
    const category = categoryLabels[product.categoryKey][state.lang];
    const copy = translations[state.lang];
    return `
      <article class="product-card" data-category="${product.categoryKey}">
        <div class="product-image">
          <img src="${product.image}" alt="${name}">
          <span class="badge">${badge}</span>
        </div>
        <div class="product-body">
          <span class="product-cat">${category}</span>
          <strong class="product-title">${name}</strong>
          <span class="product-size">${size}</span>
          <div class="price-row">
            <span class="price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
          </div>
          <span class="unit-price">${product.unit}</span>
          ${qty > 0 ? `
            <div class="qty-inline" aria-label="${copy.cartLabel}: ${name}">
              <button type="button" data-dec="${product.id}" aria-label="${copy.decrease}">-</button>
              <span>${qty}</span>
              <button type="button" data-inc="${product.id}" aria-label="${copy.increase}">+</button>
            </div>
          ` : `<button class="add-btn" type="button" data-add="${product.id}"><i class="fa-solid fa-plus" aria-hidden="true"></i>${copy.addToCart}</button>`}
        </div>
      </article>
    `;
  }).join("");
}

function setQuantity(id, nextQty) {
  if (nextQty <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, nextQty);
  }
  renderProducts();
  renderCart();
}

function renderCart() {
  const copy = translations[state.lang];
  const entries = [...state.cart.entries()]
    .map(([id, qty]) => ({ product: products.find((item) => item.id === id), qty }))
    .filter((entry) => entry.product);

  const subtotal = entries.reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);
  const totalCount = entries.reduce((sum, entry) => sum + entry.qty, 0);
  cartCount.textContent = totalCount;
  cartSubtotal.textContent = formatPrice(subtotal);
  cartTotal.textContent = formatPrice(subtotal);
  cartEmpty.textContent = copy.emptyCart;
  cartEmpty.hidden = entries.length > 0;

  cartItems.innerHTML = entries.map(({ product, qty }) => `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name[state.lang]}">
      <div>
        <h3>${product.name[state.lang]}</h3>
        <p>${product.size[state.lang]} · ${formatPrice(product.price)}</p>
        <div class="cart-qty" aria-label="${copy.cartLabel}: ${product.name[state.lang]}">
          <button type="button" data-dec="${product.id}" aria-label="${copy.decrease}">-</button>
          <span>${qty}</span>
          <button type="button" data-inc="${product.id}" aria-label="${copy.increase}">+</button>
        </div>
      </div>
      <button class="remove" type="button" data-remove="${product.id}" aria-label="${product.name[state.lang]} ${copy.remove}">${copy.remove}</button>
    </div>
  `).join("");
}

function applyLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  const copy = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll(".lang-option").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProducts();
  renderCart();
}

function openCart() {
  document.body.classList.add("cart-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const addId = target.closest("[data-add]")?.dataset.add;
  const incId = target.closest("[data-inc]")?.dataset.inc;
  const decId = target.closest("[data-dec]")?.dataset.dec;
  const removeId = target.closest("[data-remove]")?.dataset.remove;
  const filterButton = target.closest("[data-filter]");
  const filterLink = target.closest("[data-filter-link]");

  if (addId) {
    setQuantity(addId, productQty(addId) + 1);
    openCart();
  }
  if (incId) setQuantity(incId, productQty(incId) + 1);
  if (decId) setQuantity(decId, productQty(decId) - 1);
  if (removeId) setQuantity(removeId, 0);
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll(".filter").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === state.filter);
    });
    renderProducts();
  }
  if (filterLink) {
    state.filter = filterLink.dataset.filterLink;
    document.querySelectorAll(".filter").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === state.filter);
    });
    renderProducts();
  }
});

document.querySelectorAll(".lang-option").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.querySelector("#cartToggle").addEventListener("click", openCart);
document.querySelector("#cartClose").addEventListener("click", closeCart);
document.querySelector("#scrim").addEventListener("click", closeCart);

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => event.preventDefault());
});

renderProducts();
renderCart();
