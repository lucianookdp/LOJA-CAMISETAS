
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});


const products = [
  {
    id: 1,
    type: "br",
    title: "Camisa Adidas Flamengo I",
    price: 349.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_flamengo_i_2023_114358_1_d8763bdea9e32312aea69b5ddbaee0e8.jpg",
  },
  {
    id: 2,
    type: "br",
    title: "Camisa Adidas Flamengo II",
    price: 349.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_flamengo_ii_2023_114362_1_43149233e98369bbfb4f90a9c9f46664.jpg",
  },
  {
    id: 3,
    type: "br",
    title: "Camisa Athletico Paranaense I",
    price: 249.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_umbro_athletico_paranaense_i_2023_libertadores_125455_1_52700b021fdb8bd902aeb08c59065d67.jpg",
  },
  {
    id: 4,
    type: "br",
    title: "Camisa Athletico Paranaense III",
    price: 249.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_umbro_athletico_paranaense_iii_2023_libertadores_125460_1_8b996aebe7ed980f427e2a5bf0465976.jpg",
  },
  {
    id: 5,
    type: "br",
    title: "Camisa Puma Palmeiras I",
    price: 289.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_puma_palmeiras_i_2023_campeao_brasileiro_2022_120774_1_9c3bd5097b8ef6c815be7acb33c6a6b6.jpg",
  },
  {
    id: 6,
    type: "br",
    title: "Camisa Puma Palmeiras II",
    price: 289.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_puma_palmeiras_ii_2022_pele_eterno_118191_1_2a812448f674ddf328542e5e20650200.jpg",
  },
  {
    id: 7,
    type: "br",
    title: "Camisa Adidas Atlético Mineiro I",
    price: 289.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_atletico_mineiro_i_2023_libertadores_121881_1_bd315b8f91cacc03967edeffc0b65160.jpg",
  },
  {
    id: 8,
    type: "br",
    title: "Camisa Adidas Atlético Mineiro III",
    price: 289.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_atletico_mineiro_iii_2023_120214_1_2c61415fc865b085030fbafeb58120f9.jpg",
  },
  {
    id: 9,
    type: "int",
    title: "Camisa Real Madrid I",
    price: 349.90,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2697244087014671a47ae11279959ffa_9366/Camisa_1_Real_Madrid_23-24_Branco_HR3796_HM1.jpg",
  },
  {
    id: 10,
    type: "int",
    title: "Camisa Arsenal I",
    price: 349.90,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7dbf2ba45c1e4207a1fdae1900c6b6bd_9366/Camisa_1_Arsenal_22-23_Vermelho_H35903_21_model.jpg",
  },
  {
    id: 11,
    type: "int",
    title: "Camisa FC Bayern I",
    price: 349.90,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/490f114ae9a74f18ad323975e75aa44f_9366/Camisa_1_FC_Bayern_23-24_Branco_IJ7442_HM1.jpg",
  },
  {
    id: 12,
    type: "int",
    title: "Camisa Man United I",
    price: 349.90,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a338a8c8da54898a0bb3b3713ade4a8_9366/Camisa_1_Manchester_United_23-24_Vermelho_IP1726_HM1.jpg",
  },
  {
    id: 13,
    type: "sel",
    title: "Camisa Brasil I",
    price: 349.90,
    image:
      "https://imgnike-a.akamaihd.net/768x768/0228340L.jpg",
  },
  {
    id: 14,
    type: "sel",
    title: "Camisa Argentina I",
    price: 349.90,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b1bf7415379d446c88f5af7200c879f3_9366/Camisa_1_Argentina_3_Estrelas_Masculina_Branco_IB3597_21_model.jpg",
  },
  {
    id: 15,
    type: "sel",
    title: "Camisa Alemanha I",
    price: 349.90,
    image:
      "https://static3.tcdn.com.br/img/img_prod/311840/camisa_adidas_alemanha_home_2022_105904_1_6258a6c1ce2e5a9a9853ddc8c4e246ef.jpg",
  },
  {
    id: 16,
    type: "sel",
    title: "Camisa Inglaterra I",
    price: 349.90,
    image:
      "https://imgnike-a.akamaihd.net/768x768/02580751.jpg",
  },
];


const productList = document.getElementById("productList");
const cartItemsElement = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");


let cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderProducts() {
  const productsByType = products.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {});
  let groupedProductsHtml = '';

 
  for (const [type, productsOfType] of Object.entries(productsByType)) {
    let typeFormattedForId = type.toLowerCase().replace(/ /g, '-');
    groupedProductsHtml += `<div id="${typeFormattedForId}" class="product-category">`;


    groupedProductsHtml += productsOfType.map(product => `
      <div class="product">
        <img src="${product.image}" alt="${product.title}" class="product-img" />
        <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-price">R$${product.price.toFixed(2)}</p>
          <a class="add-to-cart" data-id="${product.id}">Adicionar Ao Carrinho</a>
        </div>
      </div>
    `).join('');
    groupedProductsHtml += `</div>`;

  }


  if (productList) {
    productList.innerHTML = groupedProductsHtml;
  } else {
    console.error('Elemento productList não encontrado');
}
  updateAddToCartEventListeners();

}


function updateAddToCartEventListeners() {
  productList.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
      addToCart(event);
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');

  if (category) {
    const categoryElement = document.getElementById(category);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

  
    
function addToCart(event) {
  const productID = parseInt(event.target.dataset.id);
  const product = products.find((product) => product.id === productID);
  if (product) {
    // Se o produto já está no carrinho
    const existingItem = cart.find((item) => item.id === productID);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 0,
      };
      cart.push(cartItem);
    }

    fetch('/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: product.id, quantity: 1 }),
    });

    event.target.textContent = "No Carrinho";
    updateCartIcon();
    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
  }
}


function removeFromCart(event) {
  const productID = parseInt(event.target.dataset.id);
  cart = cart.filter((item) => item.id !== productID);
  saveToLocalStorage();
  renderCartItems();
  calculateCartTotlal();
  updateCartIcon();
}



function changeQuantity(event) {
  const productID = parseInt(event.target.dataset.id);
  const quantity = parseInt(event.target.value);

  if (quantity > 0) {
    const cartItem = cart.find((item) => item.id === productID);
    if (cartItem) {
      cartItem.quantity = quantity;
      saveToLocalStorage();
      calculateCartTotlal();
      updateCartIcon();
    }
  }
}


function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}



function renderCartItems() {
  cartItemsElement.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
    <img src="${item.image}" alt="${item.title}" />
    <div class="cart-item-info">
      <h2 class="cart-item-title">${item.title}</h2>
      <input
        class="cart-item-quantity"
        type="number"
        name=""
        min="1"
        value="${item.quantity}"
        data-id="${item.id}"
      />
    </div>
    <h2 class="cart-item-price">R$${item.price}</h2>
    <button class="remove-from-cart" data-id="${item.id}">Remover</button>
  </div>
    `
    )
    .join("");
  
  
  
  const removeButtons = document.getElementsByClassName("remove-from-cart");
  for (let i = 0; i < removeButtons.length; i++) {
    const removeButton = removeButtons[i];
    removeButton.addEventListener("click", removeFromCart);
  }
  
  
    const quantityInputs = document.querySelectorAll(".cart-item-quantity");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", changeQuantity);
  });
}



function calculateCartTotlal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalElement.textContent = `Total: R$${total.toFixed(2)}`;
}



if (window.location.pathname.includes("cart.html")) {
  renderCartItems();
  calculateCartTotlal();
} else if (window.location.pathname.includes("success.html")) {
  clearCart();
} else {
  renderProducts();
}



function clearCart() {
  cart = [];
  saveToLocalStorage();
  updateCartIcon;
}



const cartIcon = document.getElementById("cart-icon");

function updateCartIcon() {
  const totalQuantity = cart.reduce((sum, item) => sum + iyem.quantity, 0);
  cartIcon.setAttribute("data-quantity", totalQuantity);
}

updateCartIcon();

function updateCartIconOnCartChange() {
  updateCartIcon();
}

window.addEventListener("storage", updateCartIconOnCartChange);

function updateCartIcon() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartIcon = document.getElementById("cart-icon");
  cartIcon.setAttribute("data-quantity", totalQuantity);
}


renderProducts();
renderCartItems();
calculateCartTotlal();
