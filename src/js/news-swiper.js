document.addEventListener('DOMContentLoaded', function () {
  const newsSwiper = new Swiper('.news-swiper', {
    wrapperClass: 'news-list',
    slideClass: 'news-list__item',
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '#swiper-next',
      prevEl: '#swiper-prev',
    },  
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 18
      },
    },
    effect: 'slide',
    speed: 500,
  });
  const prevBtn = document.getElementById('swiper-prev');
  const nextBtn = document.getElementById('swiper-next');
  prevBtn.addEventListener('click', function () {
    newsSwiper.slidePrev();
  });
  nextBtn.addEventListener('click', function () {
    newsSwiper.slideNext();
  });
});
