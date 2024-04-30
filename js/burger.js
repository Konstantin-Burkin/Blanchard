(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);

    btn.setAttribute('aria-expanded', false);

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', true);
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      }
    });
  }

  setBurger({
    btnClass: "js-burger", // класс бургера
    menuClass: "js-menu-wrap", // класс меню
    activeClass: "is-active", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });


})();



let menuLink = document.querySelectorAll('.header__menu-link');
let menuHeader = document.querySelector('.header__menu-wrap');
let headerBurger = document.querySelector('.header__burger');

menuLink.forEach(el => {
  el.addEventListener('click', (e) => {
    menuHeader.classList.remove("is-active");
    document.body.removeAttribute('style');
    headerBurger.classList.remove("is-active");
  });
});

