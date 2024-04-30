// Это один из возможных вариантов использования. Ссылка на github плагина https://github.com/michu2k/Accordion

// ВАЖНО!!! Этот пример аккордеона работает с версией плагина  3.1.1. Вот она: https://unpkg.com/accordion-js@3.1.1/dist/accordion.min.js

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const accordion = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(accordion) {
  const tabBtns = document.querySelectorAll(`.${accordion.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${accordion.wrap}`);
    const currentContent = wrap.querySelector(`.${accordion.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${accordion.content}`);

    contents.forEach((el) => {
      el.classList.remove(accordion.active);
    });

    currentContent.classList.add(accordion.active);

    tabBtns.forEach((el) => {
      el.classList.remove(accordion.active);
    });

    this.classList.add(accordion.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(accordion);
