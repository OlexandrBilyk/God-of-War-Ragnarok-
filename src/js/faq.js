
const faqBtn = document.querySelectorAll('.faq-list__btn');

faqBtn.forEach((btn) => {

  btn.addEventListener('click', () => {
    const parentItem =     btn.closest(".faq-list__item");
    parentItem.classList.toggle("open");
  });
});
console.log(faqBtn)


