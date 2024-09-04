import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const insightSlider = () => {
  new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
