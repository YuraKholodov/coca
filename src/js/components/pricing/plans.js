export function plansSwitcher() {
  const switcher = document.querySelector('[data-price="switcher"]');
  const heroItems = document.querySelectorAll(".hero__item-price");
  const priceListWithSale = Array.from(heroItems).map((item) => {
    return Number(item.innerText.split(" ")[0].slice(1));
  });

  heroItems.forEach((item, index) => {
    item.innerHTML = `$${priceListWithSale[index] * 12}
        <span class="hero__item-price-text text-p-default"> /yr </span><br>
        Economy: $${
          priceListWithSale[index] * 1.2 * 12 - priceListWithSale[index] * 12
        }
        `;
  });

  switcher.addEventListener("click", () => {
    if (!switcher.checked) {
      heroItems.forEach((item, index) => {
        item.innerHTML = `$${priceListWithSale[index] * 1.2 * 12}
        <span class="hero__item-price-text text-p-default"> /yr </span><br>
        $${priceListWithSale[index] * 1.2}
        <span class="hero__item-price-text text-p-default"> /mo </span>`;
      });
    } else {
      heroItems.forEach((item, index) => {
        item.innerHTML = `$${priceListWithSale[index] * 12}
        <span class="hero__item-price-text text-p-default"> /yr </span><br>
        Economy: $${
          priceListWithSale[index] * 1.2 * 12 - priceListWithSale[index] * 12
        }`;
      });
    }
  });
}
