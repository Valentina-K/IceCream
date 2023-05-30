const items = document.querySelectorAll('.gallery');
const itemCount = items.length;
const nav = document.querySelectorAll('.dots');
let index = 0;
nav.forEach(navItem => navItem.addEventListener('click', showItem));
function showItem(e) {
  index = Number(e.target.id);
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
  nav.forEach(navItem => navItem.classList.remove('active'))
  nav[index].classList.add('active');
}

