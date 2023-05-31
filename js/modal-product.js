(() => {
    const closeModalBtn = document.querySelector("[data-products-modal-close]");
    const openModalArrow = document.querySelectorAll("[data-arrow-modal-open]");
    const modal_product = document.querySelector("[data-modal-products]");

    openModalArrow.forEach(element=>element.addEventListener("click",toggleModal));
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_product.classList.toggle("is-hidden");
    }
})()