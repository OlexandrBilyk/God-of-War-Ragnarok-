const openMenu = document.getElementById('openHeaderMenu');
const menu = document.getElementById('headerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

openMenu.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    menu.classList.toggle('is-hidden');
  } else {
    mobileMenu.classList.remove('is-hidden');
  }
});
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.add('is-hidden');
});
