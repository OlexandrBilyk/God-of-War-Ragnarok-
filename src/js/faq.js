

const faqBtn = document.querySelectorAll('.faq-list__btn');
// yevgeniy krimovskiy
faqBtn.forEach((btn) => {
  // yevgeniy krimovskiy
  btn.addEventListener('click', () => {
    // yevgeniy krimovskiy
    const parentItem = btn.parentElement; 
    // yevgeniy krimovskiy
    parentItem.classList.toggle('open');
  });
});
// autor: yevgeniy krimovskiy

