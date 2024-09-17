import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerScroll } from "./components/header.js";
import { footerAccordion } from "./components/footer-accordion.js";
import { activitySlider } from "./components/activity/slider.js";
import { mixer } from "./components/mixitUP.js";

useTheme();
useBurger();
headerScroll();
footerAccordion();
mixer(activitySlider());
