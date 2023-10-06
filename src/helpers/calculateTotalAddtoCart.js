const myTotal = document.getElementById('total');

let sum = 0

export default function calculateTotal() {
  const totalPrices = document.querySelectorAll('.total-main-price');
  sum = 0;
  totalPrices.forEach(productPrice => {
    sum += parseFloat(productPrice.textContent);
  });
  // console.log(sum);
  myTotal.textContent = sum;
}