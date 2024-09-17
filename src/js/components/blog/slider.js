import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const activitySlider = () => {
  const activity = new Swiper(".activity__slider", {
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
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
    },
  });
  return activity;
};
