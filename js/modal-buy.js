(() => {
    const closeModalBtn = document.querySelector("[data-buy-modal-close]");
    const openModalBtn = document.querySelectorAll("[data-buy-modal-open]")
    const modal_buy = document.querySelector("[data-madal-buy]");

    openModalBtn.forEach(button=>button.addEventListener("click", toggleModal));
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_buy.classList.toggle("is-hidden");
    }
})();