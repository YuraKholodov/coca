import mixitup from "mixitup";

export const mixer = (slider) => {
  mixitup(".activity__wrapper", {
    callbacks: {
      onMixEnd: function () {
        slider.update();
      },
    },
  });
};
