const openMenu = document.getElementById('openHeaderMenu');
const menu = document.getElementById('headerMenu');

openMenu.addEventListener('click', () => {
  menu.classList.toggle('is-hidden');
});
