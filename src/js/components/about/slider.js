import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const heroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: 1.25,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 2.25,
        spaceBetween: 32,
      },
    },
  });
};

export const teamSlider = () => {
  new Swiper(".team__slider", {
    slidesPerView: 1.25,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};
