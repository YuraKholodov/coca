import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.min.css";

export function phone() {
  const input = document.querySelector("#phone");
  intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: (callback) => {
      fetch("https://ipapi.co/json")
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback("us"));
    },
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
  });
}
