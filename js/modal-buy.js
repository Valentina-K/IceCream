(() => {
    const closeModalBtn = document.querySelector("[buy-modal-close]");
    const openModalBtn = document.querySelector("[buy-modal-open]")
    const modal_buy = document.querySelector("[data-madal-buy]");
    const menu = document.querySelector('[data-menu]')

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_buy.classList.toggle("is-hidden");
        menu.classList.toggle('is-open');
    }
})();