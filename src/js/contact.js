import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerScroll } from "./components/header.js";
import { footerAccordion } from "./components/footer-accordion.js";
import { initMap } from "./components/contact/map.js";
import { partnersSlider } from "./components/slider.js";
import { phone } from "./components/contact/phone.js";
import { formValidators } from "./components/contact/form-validator.js";

useTheme();
useBurger();
headerScroll();
footerAccordion();
initMap();
partnersSlider();
phone();
formValidators();
