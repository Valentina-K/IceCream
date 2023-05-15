(() => {
    const closeModalBtn = document.querySelector("[about-modal-close]");
    const openModalBtn = document.querySelector("[about-modal-open]")
    const modal_about = document.querySelector("[data-madal-about]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_about.classList.toggle("is-hidden");
    }
})();