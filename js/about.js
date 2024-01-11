// About Us - Swiper
const about = new Swiper('.reviews-swiper', {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: 'true',
    spaceBetween: 30,
    fade: 'true',
    centerSlide: 'true',
    direction: 'horizontal',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Breakpoints (responsibility)
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 1,
      }
    }
  });