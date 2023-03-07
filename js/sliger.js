const items = document.querySelectorAll('.gallery');
const itemCount = items.length;
const nav = document.querySelectorAll('.dots')/* 
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous'); */
let index = 0;
nav.forEach(navItem => navItem.addEventListener('click', showItem));
function showItem(e) {
  index = Number(e.target.id);
  items.forEach(item => item.classList.remove('active'));
  items[index].classList.add('active');
  nav.forEach(navItem => navItem.classList.remove('active'))
  nav[index].classList.add('active');
}

/* nav.map(navItem => {
  console.log(navItem)
  navItem.addEventListener('click', showItem)
}); */

/* function showNextItem() {
  items[index].classList.remove('active');

  if(index < itemCount - 1) {
    index++;
  } else {
    index = 0;
  }

  items[index].classList.add('active');
}

function showPreviousItem() {
  items[index].classList.remove('active');

  if(index > 0) {
    index--;
  } else {
    index = itemCount - 1;
  }

  items[index].classList.add('active');
} */

/* function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
} */

/* nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress); */