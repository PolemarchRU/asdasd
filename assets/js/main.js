// Burger
let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
})