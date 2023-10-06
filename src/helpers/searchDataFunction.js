const searchBox = document.getElementById("search-item");

export default function searchProducts() {

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
}