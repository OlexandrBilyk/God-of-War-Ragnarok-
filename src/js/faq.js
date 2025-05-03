const faqBtns = document.querySelectorAll('.faq-list__btn');
faqBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.faq-list__item').classList.toggle('open');
  });
});
