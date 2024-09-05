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

export const partnersSlider = () => {
  const windowWidth = window.screen.width;
  console.log(windowWidth);
  if (windowWidth > 576) return;

  const partnersSlider = document.querySelector(".partners__list");
  const partnersWrapper = partnersSlider.querySelector(".partners__wrapper");
  const partnersItems = partnersSlider.querySelectorAll(".partners__item");
  partnersWrapper.classList.add("swiper-wrapper");
  partnersItems.forEach((item) => {
    item.classList.add("swiper-slide");
  });

  new Swiper(".partners__list", {
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
      delay: 5000,
    },
  });
};

export const testimonialsSlider = () => {
  new Swiper(".testimonials__slider", {
    slidesPerView: 1,
    spaceBetween: 200,

    // Navigation arrows
    navigation: {
      nextEl: ".testimonials__btn-next",
      prevEl: ".testimonials__btn-prev",
    },
  });
};
