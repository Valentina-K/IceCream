(() => {
    const closeModalBtn = document.querySelector("[buy-modal-close]");
    const openModalBtn = document.querySelectorAll("[buy-modal-open]")
    const modal_buy = document.querySelector("[data-madal-buy]");

    openModalBtn.forEach(button=>button.addEventListener("click", toggleModal));
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_buy.classList.toggle("is-hidden");
    }
})();