(() => {
    const closeModalBtn = document.querySelector("[products-modal-close]");
    const openModalArrow = document.querySelectorAll("[arrow-modal-open]");
    const modal_product = document.querySelector("[data-modal-products]");

    openModalArrow.forEach(element=>element.addEventListener("click",toggleModal));
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_product.classList.toggle("is-hidden");
    }
})()