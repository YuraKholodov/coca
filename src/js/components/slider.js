import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const insightSlider = () => {
  new Swiper(".swiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
};
