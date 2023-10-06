import './style.css';
import { renderShopItems } from './src/helpers/displayApiData';
import { mobileOpenCart,
         mobileCloseCart,
         mobileProfileOpen,
         mobileProfileClose,
         mobileServiceOpen,
         mobileServiceColse,
         mobileSocialOpen,
         mobileSocialClose} from './src/helpers/mobileFunctions';
import fetchShopItems from './src/helpers/fetchApiData';
import {openModal,
        closeModal,
        openModalLogin,
        closeModalLogin} from './src/helpers/modalFunctions';
import searchProducts from './src/helpers/searchDataFunction';

const openModalBtn = document.getElementById("open-modal-btn-signup");
openModalBtn.addEventListener("click", openModal);

const closeModalBtn = document.getElementById("close-register-modal-btn");
closeModalBtn.addEventListener("click", closeModal);

const openModalLoginBtn = document.getElementById("open-modal-btn-login");
openModalLoginBtn.addEventListener("click", openModalLogin);

const closeModalLoginBtn = document.getElementById("close-login-modal-btn");
closeModalLoginBtn.addEventListener("click", closeModalLogin);

const openMobileCart = document.getElementById('openCartBtn');
const closeMobileCart = document.getElementById('closeCartBtn');

openMobileCart.addEventListener('click', mobileOpenCart);
closeMobileCart.addEventListener('click', mobileCloseCart);

const openProfileBtn = document.getElementById('openProfileBtn');
openProfileBtn.addEventListener('click', mobileProfileOpen);

const closeProfileBtn = document.getElementById('closeProfileBtn');
closeProfileBtn.addEventListener('click', mobileProfileClose);

const openServiceBtn = document.getElementById('aboutLashopee');
openServiceBtn.addEventListener('click', mobileServiceOpen);

const closeServiceBtn = document.getElementById('closeLashopeeBtn');
closeServiceBtn.addEventListener('click', mobileServiceColse);

const openSocialeBtn = document.getElementById('LashopeeSocialLinks');
openSocialeBtn.addEventListener('click', mobileSocialOpen);

const closeSocialeBtn = document.getElementById('closeSocialBtn');
closeSocialeBtn.addEventListener('click', mobileSocialClose);

const searchBox = document.getElementById("search-item");
searchBox.addEventListener('keyup', searchProducts);

window.addEventListener('load', async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  renderShopItems(shopItems.products);
});


