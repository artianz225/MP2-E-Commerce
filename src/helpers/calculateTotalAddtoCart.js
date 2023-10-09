export default function updateTotalPrice() {
  let totalPrice = 0;

  const addedCartProductMainContainers = document.querySelectorAll('.added-cart-product-main-container');

  addedCartProductMainContainers.forEach((container) => {
    const addeditemCartCheck = container.querySelector('.checked-products');

    if (addeditemCartCheck.checked) {
      const addedpTotalPrice = container.querySelector('.total-main-price');
      const price = parseFloat(addedpTotalPrice.getAttribute('data-price'));
      totalPrice += price;
      container.style.backgroundColor = "rgba(192, 192, 192, 0.3)";
      container.style.borderTop = "1px solid cadetblue";
      container.style.borderBottom = "1px solid cadetblue";
      container.style.borderRight = "1px solid cadetblue";
    } else {
      container.style.backgroundColor = "";
      container.style.borderTop = "none";
      container.style.borderBottom = "none";
      container.style.borderRight = "none";
    }
  });

  document.getElementById('mytotal').textContent = totalPrice.toFixed(2);
  console.log(totalPrice);
}

// const myTotal = document.getElementById('total');

// let sum = 0

// export default function calculateTotal() {
//   const totalPrices = document.querySelectorAll('.total-main-price');
//   sum = 0;
//   totalPrices.forEach(productPrice => {
//     sum += parseFloat(productPrice.textContent);
//   });
//   // console.log(sum);
//   myTotal.textContent = sum;
// }