let hamburgerIcon = document.querySelector('.burger');
let menuNav = document.querySelector('.main-nav');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('open');
  menuNav.classList.toggle('open-nav');
});