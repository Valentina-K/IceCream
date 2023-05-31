(() => {
    const closeModalBtn = document.querySelector("[data-about-modal-close]");
    const openModalBtn = document.querySelector("[data-about-modal-open]")
    const modal_about = document.querySelector("[data-madal-about]");

    openModalBtn.addEventListener("click", toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_about.classList.toggle("is-hidden");
    }
})();