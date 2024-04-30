
let searchOpenBtn = document.querySelector('.header__search-mobile-open');
let searchCloseBtn = document.querySelector('.header__search-mobile-close');
let searchContainer = document.querySelector('.header__search-mobile');
let searchInput = document.querySelector('.header__search-mobile input');
let searchForm = document.querySelector('.header__search-mobile-form');

searchOpenBtn.addEventListener('click', function() {
  searchContainer.classList.add('header__search-mobile--active');
  searchInput.focus();
});

searchCloseBtn.addEventListener('click', function() {
  searchContainer.classList.remove('header__search-mobile--active');
})

document.addEventListener('click', function(event) {
  if (!(event.composedPath().includes(searchForm) || event.composedPath().includes(searchOpenBtn))) {
    searchContainer.classList.remove('header__search-mobile--active');
  }
})
