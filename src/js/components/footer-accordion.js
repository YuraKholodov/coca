export function footerAccordion() {
  if (document.documentElement.clientWidth > 576) return;

  const footerList = document.querySelector(".footer__list");
  footerList.addEventListener("click", (event) => {
    const target = event.target;

    if (!target.classList.contains("footer__item-title")) return;
    const curAccordion = target.closest(".footer__item");
    const footerSublist = curAccordion.querySelector(".footer__sublist");
    const footerSublistHeight = footerSublist.scrollHeight;
    const accordionsList = footerList.querySelectorAll(".footer__item");
    const accordionIsActive = curAccordion.classList.toggle(
      "footer__item--active"
    );

    accordionsList.forEach((value) => {
      if (value != curAccordion) {
        value.classList.remove("footer__item--active");
        value.querySelector(".footer__sublist").style.height = 0;
      }
    });

    if (accordionIsActive) {
      footerSublist.style.height = footerSublistHeight + "px";
    } else {
      footerSublist.style.height = 0;
    }
  });
}
