(() => {
    const closeModalBtn = document.querySelector("[data-location-modal-close]");
    const openModalBtn = document.querySelector("[data-location-modal-open]");
    const modal_location = document.querySelector("[data-madal-location]");

    openModalBtn.addEventListener("click",toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_location.classList.toggle("is-hidden");
    }
})()