
const faqBtn = document.querySelectorAll('.faq-list__btn');
faqBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentItem = btn.parentElement; 
    parentItem.classList.toggle('open');
  });
});

