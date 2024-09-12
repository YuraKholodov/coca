export async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  // Координаты центра карты
  const CENTER_COORDINATES = [133.51145358313894, -22.691745335256936];
  // координаты метки на карте
  const MARKER_COORDINATES = [133.51145358313894, -22.691745335256936];

  // Объект с параметрами центра и зумом карты
  const LOCATION = { center: CENTER_COORDINATES, zoom: 2 };

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("map"),

    // Передаём параметры инициализации карты
    {
      location: LOCATION,
    }
  );

  // Добавляем слой для отображения схематической карты
  const layer = new YMapDefaultSchemeLayer({
    customization: [
      // Делаем прозрачными все геометрии водных объектов.
      {
        tags: {
          any: ["water", "geographic_line"],
        },
        elements: ["geometry", "label"],
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        tags: {
          all: ["landscape"],
        },
        stylers: [
          {
            color: "#D9D9D9",
          },
        ],
      },
    ],
  });
  map.addChild(layer);
  map.addChild(new YMapDefaultFeaturesLayer());

  // Создание маркера
  const el = document.createElement("img");
  el.className = "my-marker";
  el.src = "./../../../img/svgicons/marker.svg";
  el.title = "Маркер";

  // Создание заголовка маркера
  const markerDescr = document.createElement("div");
  markerDescr.className = "marker-descr";
  markerDescr.innerHTML = `
  <h6 class="marker-descr__title">Yogja, INA</h6>
  <p class="marker-descr__text">100 Smith Street Collingwood VIC 3066 AU</p>
  `;

  // Контейнер для элементов маркера
  const imgContainer = document.createElement("div");
  imgContainer.className = "marker-container";
  imgContainer.appendChild(markerDescr);
  imgContainer.appendChild(el);

  // Добавление маркера на карту
  map.addChild(
    new YMapMarker({ coordinates: MARKER_COORDINATES }, imgContainer)
  );
}
