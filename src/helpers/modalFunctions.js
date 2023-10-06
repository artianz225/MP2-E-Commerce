const modalContainer = document.getElementById("modal-for-signup");

function openModal() {
  modalContainer.style.display = "flex";
}
function closeModal() {
  modalContainer.style.display = "none";
}

const modalContainerlogin = document.getElementById("modal-for-login");

function openModalLogin() {
  modalContainerlogin.style.display = "flex";
}
function closeModalLogin() {
  modalContainerlogin.style.display = "none";
}



export { openModal, closeModal, openModalLogin, closeModalLogin };