
const mobileCartContaianer = document.getElementById('cart-header-container');
const closeMobileCart = document.getElementById('closeCartBtn');
const mobileProfileContaianer = document.getElementById('mbl-profile-container');
const mobileSocialContaianer = document.getElementById('mbl-social-links');
const mobileServiceContaianer = document.getElementById('mbl-lashopee-services');

function mobileOpenCart() {
  mobileCartContaianer.style.right = '0';
  closeMobileCart.style.display = 'flex';
}

function mobileCloseCart() {
  mobileCartContaianer.style.right = '-100%';
  closeMobileCart.style.display = 'none';
}  

function mobileProfileOpen() {
  mobileProfileContaianer.style.left = '0'
}


function mobileProfileClose() {
  mobileProfileContaianer.style.left = '-100%'
}

function mobileSocialOpen() {
  mobileSocialContaianer.style.left = '0'
}

function mobileSocialClose() {
  mobileSocialContaianer.style.left = '-100%'
}

function mobileServiceOpen() {
  mobileServiceContaianer.style.left = '0'
}

function mobileServiceColse() {
  mobileServiceContaianer.style.left = '-100%'
}

export { mobileOpenCart,
         mobileCloseCart,
         mobileProfileOpen,
         mobileProfileClose,
         mobileServiceOpen,
         mobileServiceColse,
         mobileSocialOpen,
         mobileSocialClose};