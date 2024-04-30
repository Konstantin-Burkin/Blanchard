var YaMap;

ymaps.ready(init);

function init () {
  YaMap = new ymaps.Map('map', {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"]
  },

  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "300px", right: "20px" },
    geolocationControlFloat: "none",
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "200px", right: "20px" }
  },


  {
      searchControlProvider: 'yandex#search',
      suppressMapOpenBlock: true,
  });

  YaMap.behaviors.disable('scrollZoom');

  var Placemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts-map.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });
  YaMap.geoObjects.add(Placemark);
};

