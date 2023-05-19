(() => {
    const closeModalBtn = document.querySelector("[location-modal-close]");
    const openModalBtn = document.querySelector("[location-modal-open]");
    const modal_location = document.querySelector("[data-madal-location]");

    openModalBtn.addEventListener("click",toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_location.classList.toggle("is-hidden");
    }
})()