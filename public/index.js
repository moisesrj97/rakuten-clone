const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 5,
  loop: true,
  slidesPerView: 8,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    1250: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
    1550: {
      slidesPerView: 8,
      spaceBetween: 5,
    },
  },
});

const swiper2 = new Swiper('.swiper--genres', {
  speed: 400,
  spaceBetween: 5,
  loop: true,
  slidesPerView: 8,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    700: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
    1250: {
      slidesPerView: 8,
      spaceBetween: 5,
    },
    1550: {
      slidesPerView: 10,
      spaceBetween: 5,
    },
  },
});

const swiper3 = new Swiper('.swipper--featured', {
  speed: 400,
  spaceBetween: 5,
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
