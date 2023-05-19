(() => {
    const closeModalBtn = document.querySelector("[franchise-modal-close]");
    const openModalBtn = document.querySelector("[franchise-modal-open]");
    const modal_franchise= document.querySelector("[data-madal-franchise]");

    openModalBtn.addEventListener("click",toggleModal);
    closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        modal_franchise.classList.toggle("is-hidden");
    }
})()