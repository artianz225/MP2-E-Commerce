import './style.css'

// ----------------Modal of Signup---------------------------------------------
const openModalBtn = document.getElementById("open-modal-btn-signup");
const closeModalBtn = document.getElementById("close-register-modal-btn");
const modalContainer = document.getElementById("modal-for-signup");
// ----------------Modal of login-------------------------------------
const openModalLoginBtn = document.getElementById("open-modal-btn-login");
const closeModalLoginBtn = document.getElementById("close-login-modal-btn");
const modalContainerlogin = document.getElementById("modal-for-login");
const myTotal = document.getElementById('total')

// ---------------- Mobile Cart ---------------------------------------------
const mobileCartContaianer = document.getElementById('cart-header-container');
const openMobileCart = document.getElementById('openCartBtn');
const closeMobileCart = document.getElementById('closeCartBtn');

openMobileCart.addEventListener('click', function(){
  mobileCartContaianer.style.right = '0';
  closeMobileCart.style.display = 'flex';
});

closeMobileCart.addEventListener('click', function(){
  mobileCartContaianer.style.right = '-100%';
  closeMobileCart.style.display = 'none';
});

const mobileProfileContaianer = document.getElementById('mbl-profile-container');
const openProfileBtn = document.getElementById('openProfileBtn');
const closeProfileBtn = document.getElementById('closeProfileBtn');

  openProfileBtn.addEventListener('click', function(){
    mobileProfileContaianer.style.left = '0'
  });

  closeProfileBtn.addEventListener('click', function() {
    mobileProfileContaianer.style.left = '-100%'
  });

const mobileServiceContaianer = document.getElementById('mbl-lashopee-services');
const openServiceBtn = document.getElementById('aboutLashopee');
const closeServiceBtn = document.getElementById('closeLashopeeBtn');

openServiceBtn.addEventListener('click', function(){
  mobileServiceContaianer.style.left = '0'
});

closeServiceBtn.addEventListener('click', function() {
  mobileServiceContaianer.style.left = '-100%'
});

const mobileSocialContaianer = document.getElementById('mbl-social-links');
const openSocialeBtn = document.getElementById('LashopeeSocialLinks');
const closeSocialeBtn = document.getElementById('closeSocialBtn');

openSocialeBtn.addEventListener('click', function(){
  mobileSocialContaianer.style.left = '0'
});

closeSocialeBtn.addEventListener('click', function() {
  mobileSocialContaianer.style.left = '-100%'
});

const searchBox = document.getElementById("search-item");

searchBox.addEventListener('keyup', function() {

  const searchValue = searchBox.value.toUpperCase();
  const storeItems = document.getElementById("shopping-list");
  const product = storeItems.querySelectorAll(".shop-item");

  for(let i = 0; i < product.length; i++){
    const productName = product[i].getElementsByTagName("h2")[0];

    if(productName) {
      const textValue = productName.textContent || productName.innerHTML;
      if(textValue.toUpperCase().indexOf(searchValue) > -1){
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
});

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

function openModalLogin() {
  modalContainerlogin.style.display = "flex";
}

function closeModalLogin() {
  modalContainerlogin.style.display = "none";
}

  async function fetchShopItems(api) {
    const response = await fetch(api);
    const data = await response.json();

    return data;
  }

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");
  // console.log(shopItems);

  shopItems.forEach((shopItem) => {
      const listItem = document.createElement("li");
      listItem.classList.add("shop-item");
      console.log(listItem);

      const itemContainer = document.createElement("div");
      itemContainer.id = shopItem.id;
      itemContainer.classList.add("item-container");

      const img = document.createElement("img");
      img.classList.add('product-image-inDisplay')
      img.src = shopItem.thumbnail;

      const h2 = document.createElement("h2");
      h2.classList.add('product-name-inDisplay')
      h2.textContent = shopItem.title;
      h2.style.display = "block"

      const htwo = document.createElement("h2");
      htwo.textContent = shopItem.brand;
      htwo.style.display = "none"

      const itemPrice = document.createElement("p");
      itemPrice.classList.add('product-price-inDisplay')
      itemPrice.textContent = ("Price ₱"+ shopItem.price);
      itemPrice.style.color = "#EE4D2D";
      itemPrice.style.fontWeight = "100"
      
      const descriptionContainer = document.createElement("div"); 
      descriptionContainer.classList = "description-container"
      
      const starSymbol = "&#9733;";
      const starElement = document.createElement("span");
      starElement.classList.add("star");
      starElement.innerHTML = starSymbol;

      const productAndStarContainer = document.createElement("div");
      productAndStarContainer.classList.add("star-container")
      productAndStarContainer.innerHTML = `${starElement.outerHTML.repeat(shopItem.rating)}`;

      const productPercentage = document.createElement("p")
      productPercentage.classList = "percent"
      productPercentage.textContent = shopItem.rating + "%";
      
      const div = document.createElement("div");
      div.classList.add("item-btn-container");

      const addCartBtn = document.createElement("button");
      addCartBtn.classList.add("add-to-cart-btn");
      addCartBtn.id = `${shopItem.id}`;
      addCartBtn.textContent = "Add to Cart";

      /* -----------------------------------start------------------------------ */

      let sum = 0;

      addCartBtn.addEventListener('click', cartAdded);
      function cartAdded() {
        confirm (`Do you want to add ${shopItem.title} to your cart?`)
        const itemContainer = document.getElementById('cart');

        const dummy = itemContainer.querySelectorAll('.dummy');
        const cartItems = itemContainer.querySelectorAll('.added-cart-product-main-container');
        const dummyDiv = dummy.length;
        const itemCount = cartItems.length;
        const cartCout = cartItems.length + dummy.length
        console.log(cartCout);
        const itemCountElement = document.getElementById('cart-counter')
        itemCountElement.textContent = cartCout;

        const addedCartProductMainContainer = document.createElement("div")
        addedCartProductMainContainer.id = `${shopItem.id}`;
        addedCartProductMainContainer.classList.add("added-cart-product-main-container");

        const addedCartImageContaier = document.createElement("div")
        addedCartImageContaier.classList.add("added-cart-image-container")

        const img = document.createElement('img');
        img.classList.add("cart-image");
        img.src = shopItem.thumbnail;

        const addedCartpNamePricesAndBtnContainer = document.createElement("div");
        addedCartpNamePricesAndBtnContainer.classList.add("added-cart-title-and-prices-container");

        const addedCartpNameContainer = document.createElement("div");
        addedCartpNameContainer.classList.add("added-cart-name-container");

        const addedpName = document.createElement("h5")
        addedpName.classList.add("added-cart-name");
        addedpName.textContent = `${shopItem.title}`;

        const addedpPriceQuantiryAndDeleteBtn = document.createElement("div");
        addedpPriceQuantiryAndDeleteBtn.classList.add("added-price-quantity-delete-btn-container");

        const addedpPrice = document.createElement("p");
        addedpPrice.classList.add("added-main-price");
        addedpPrice.textContent = `₱${shopItem.price}`;

        let currentQuantity = 1;
        let addeditemPrice = `${shopItem.price}`
        let totalItemPrice = 0;

        const totalPriceDisplay = document.querySelector('.totalPrice');
        totalPriceDisplay.textContent = totalItemPrice

        const Prices = document.querySelectorAll('.total-main-price');

        const addedpQuantityContainer = document.createElement("div")
        addedpQuantityContainer.classList.add("quantity-container")

        const pesoSign = document.createElement('p')
        pesoSign.textContent = "₱";

        const addedpQuantityMinus = document.createElement("p");
        addedpQuantityMinus.classList.add("quantity-minus");
        addedpQuantityMinus.id = "subract";
        addedpQuantityMinus.textContent = "-";

        addedpQuantityMinus.addEventListener('click', function() {
          currentQuantity--;
          totalItemPrice = addeditemPrice * currentQuantity;

          addedpQuantity.textContent = currentQuantity;
          addedpTotalPrice.textContent = totalItemPrice;
          calculateTotal();

          if(currentQuantity == 0) {
          addedCartProductMainContainer.remove();
          itemCountElement.textContent = parseInt(itemCountElement.textContent) -1;
          }
        });

        const addedpQuantity = document.createElement("p");
        addedpQuantity.classList.add("quantity");
        addedpQuantity.id = "quant"
        addedpQuantity.textContent =currentQuantity;


        const addedpQuantityAdd = document.createElement("p");
        addedpQuantityAdd.classList.add("quantity-add");
        addedpQuantityMinus.id = "add";
        addedpQuantityAdd.textContent = "+";

        addedpQuantityAdd.addEventListener('click', function() {
          currentQuantity++;
          totalItemPrice = addeditemPrice * currentQuantity;

          addedpQuantity.textContent = currentQuantity;
          addedpTotalPrice.textContent = totalItemPrice;
          calculateTotal();
        });

        const addedpTotalPrice = document.createElement("p");
        addedpTotalPrice.id = "total-item-price"
        addedpTotalPrice.classList.add("total-main-price");
        addedpTotalPrice.textContent = addeditemPrice;

        const cartDeleteBtn = document.createElement("i");
        cartDeleteBtn.classList.add("fa-solid");
        cartDeleteBtn.classList.add("fa-trash");
        cartDeleteBtn.style.color = "#EE4D2D";

        cartDeleteBtn.addEventListener('click', deleteCart);

        function deleteCart(){
          alert("Press OK to delete item from cart");
          addedCartProductMainContainer.remove();
          itemCountElement.textContent = parseInt(itemCountElement.textContent) -1;
          calculateTotal();
        }

        addedCartImageContaier.appendChild(img);
        addedCartpNameContainer.appendChild(addedpName);
        addedpQuantityContainer.append(addedpQuantityMinus, addedpQuantity, addedpQuantityAdd)
        
        addedpPriceQuantiryAndDeleteBtn.append(addedpPrice, addedpQuantityContainer, pesoSign, addedpTotalPrice, cartDeleteBtn);
        addedCartpNamePricesAndBtnContainer.append(addedCartpNameContainer, addedpPriceQuantiryAndDeleteBtn);
        addedCartProductMainContainer.append(addedCartImageContaier, addedCartpNamePricesAndBtnContainer);
        itemContainer.appendChild(addedCartProductMainContainer);

        calculateTotal();
      }

      function calculateTotal() {
        const totalPrices = document.querySelectorAll('.total-main-price');
        sum = 0;
        totalPrices.forEach(productPrice => {
          sum += parseFloat(productPrice.textContent);
        });
        console.log(sum);
        myTotal.textContent = sum;
      }

      calculateTotal();

      /* ------------------------------------End------------------------------- */

      const viewMore = document.createElement("button");
      viewMore.classList.add("view-more-btn");
      viewMore.textContent = "Product Details";

      viewMore.addEventListener('click', function(){
        alert(`View product of ${shopItem.title}?`)

        const mainContainer = document.getElementById('main-container');

        const productDetailsMainContainer = document.createElement('div');
        productDetailsMainContainer.classList.add("product-deatils-main-container");

        const closeDetails = document.createElement('button');
        closeDetails.classList.add("close-modal-btn")
        closeDetails.textContent = "x";

        const productAllImagesContainer = document.createElement('div');
        productAllImagesContainer.classList.add("product-all-images-container");

        const productDetailsModal = document.createElement('div');
        productDetailsModal.classList.add("product-details-modal");

        const detailsImg = document.createElement('img');
        detailsImg.classList.add("details-img")
        detailsImg.src = shopItem.thumbnail;

        const imagesContainer = document.createElement('div')
        imagesContainer.classList.add("images-container")

        const images1 = document.createElement('img');
        images1.classList.add("details-one-img")
        images1.src = shopItem.images[0];

        const images2 = document.createElement('img');
        images2.classList.add("details-two-img")
        images2.src = shopItem.images[1];

        const images3 = document.createElement('img');
        images3.classList.add("details-three-img")
        images3.src = shopItem.images[2];

        const allDetailsofProduct = document.createElement('div')
        allDetailsofProduct.classList.add("all-details-of-products");

        const detailsTitle = document.createElement('p');
        detailsTitle.textContent = `Model: ${shopItem.title}`

        const detailsPrice = document.createElement('p');
        detailsPrice.textContent = `Price: ₱${shopItem.price}`;

        const detailsRating = document.createElement('p');
        detailsRating.textContent = `Rating: ${shopItem.rating}%`;

        const detailsBrand = document.createElement('p');
        detailsBrand.textContent = `Brand: ${shopItem.brand}`

        const detailsCategory = document.createElement('p');
        detailsCategory.textContent = `Category: ${shopItem.category}`

        const detailsDescription = document.createElement('p');
        detailsDescription.textContent = `Description: ${shopItem.description}`

        closeDetails.addEventListener('click', function() {
          productDetailsMainContainer.remove();
        });
        

        productDetailsModal.append(closeDetails, detailsImg, imagesContainer, allDetailsofProduct);
        allDetailsofProduct.append(detailsTitle, detailsPrice, detailsRating, detailsBrand, detailsCategory, detailsDescription)
        imagesContainer.append(images1, images2, images3)
        productDetailsMainContainer.append(productDetailsModal,)
        mainContainer.append(productDetailsMainContainer);
      })

       //listItem.innerHTML = `
       //<h2>${shopItem.title}</h2>
       //<img src=${shopItem.thumbnail} class="android">
       //`;

      div.append(addCartBtn, viewMore);
      productAndStarContainer.append(productPercentage);
      descriptionContainer.append(productAndStarContainer);
      itemContainer.append(img, h2, htwo, itemPrice, descriptionContainer, div);
      listItem.append(itemContainer);
      shoppingList.append(listItem);
  });
}


window.addEventListener('load', async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  renderShopItems(shopItems.products);
});


openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

openModalLoginBtn.addEventListener("click", openModalLogin);
closeModalLoginBtn.addEventListener("click", closeModalLogin);


