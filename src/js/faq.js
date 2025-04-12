const faqButtons = document.querySelectorAll('.faq-list__btn');

faqButtons.forEach(button => {
  const overlay = button.previousElementSibling; 
  const openSvg = button.querySelector('.faq-list__svg--open.faq-icon'); 
  const closeSvg = button.querySelector('.faq-list__svg--close.faq-icon');
  if (overlay && openSvg && closeSvg) {
    button.addEventListener('click', function() {
      overlay.classList.toggle('visible');

      openSvg.style.display = (openSvg.style.display === 'none') ? 'block' : 'none';
      closeSvg.style.display = (closeSvg.style.display === 'block') ? 'none' : 'block';
    });
  }
});