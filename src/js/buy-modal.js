const dataModalbuy = {
  dataOpen: document.querySelectorAll('.open-modal-buy'),
  dataClose: document.getElementById('buyModalClose'),
  databackdrop: document.querySelector('.backdrop-buy'),
  dataPrice: document.querySelector('#totalSum'),
};
dataModalbuy.dataOpen.forEach(el => {
  el.addEventListener('click', event => {
    let price = event.target.closest('.modal-buy-price');
    if (!price) {
      price = event.target.previousElementSibling;
      if (price.textContent.length > 6) {
        dataModalbuy.databackdrop.classList.remove('is-hidden');
        document.body.style.overflow = 'hidden';
        return;
      }
    }

    dataModalbuy.dataPrice.textContent = price.textContent;

    dataModalbuy.databackdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  });
});

dataModalbuy.dataClose.addEventListener('click', () => {
  dataModalbuy.databackdrop.classList.add('is-hidden');

  document.body.style.overflow =
    document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
});
