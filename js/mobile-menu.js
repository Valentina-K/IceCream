(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    link: document.querySelector('.mobile-menu-list'),
    menu: document.querySelector('[data-menu]'),
    };
    
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.link.addEventListener('click', toggleActiveLink);
    
    function toggleModal() {
    refs.menu.classList.toggle('is-open');
    }
function toggleActiveLink(e) {
    const actLink = e.target;
    actLink.classList.toggle('active');
    refs.menu.classList.toggle('is-open');
    }  
})();