import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const heroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: 2.25,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
