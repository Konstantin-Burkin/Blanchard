const gallerySwiper = new Swiper('.gallery__swiper', {
  speed: 400,
  navigation: {
    nextEl: '.gallery__swiper-btn-next',
    prevEl: '.gallery__swiper-btn-prev',
  },
  a11y: {
    nextSlideMessage: "Следующая страница",
    prevSlideMessage: "Предыдущая страница",
    slideLabelMessage: "Слайд {{index}} из {{slidesLength}}",
    slideRole: "none",
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      allowTouchMove: false,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      allowTouchMove: true,
    },
  },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
});
gallerySwiper.wrapperEl.setAttribute('role', 'group');

gallerySwiper.slides.forEach((slide) => {
  focusControl.observe(slide);
})

let countSwiperPages = function(swiper, pageDisplayClass = false) {

  let count = function() {

  let currentBP = swiper.currentBreakpoint;
  let slidesPerView = (swiper.originalParams.breakpoints[currentBP]).slidesPerGroup;

  let currentPage = Math.ceil(swiper.activeIndex / slidesPerView + 1);
  let maxPages = Math.ceil(swiper.slides.length / slidesPerView);

  if (pageDisplayClass) document.querySelector(pageDisplayClass).textContent = `${currentPage} / ${maxPages}`;

  swiper.wrapperEl.setAttribute('aria-label', `Страница ${currentPage} из ${maxPages}`);

  }

  count();

  swiper.on('breakpoint', count);
  swiper.on('slideChangeTransitionStart', count);

};

countSwiperPages(gallerySwiper, '.gallery__swiper-page');
