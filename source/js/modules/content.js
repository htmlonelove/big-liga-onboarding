const content = document.querySelector('.page-main__content');
const logo = document.querySelector('.header__logo');
const loader = document.querySelector('.loader');

window.addEventListener('click', function (evt) {
  if (evt.target != logo && (loader.classList.contains('loader--animation'))) {
    if (content.classList.contains('page-main__content--show')) {
      content.classList.remove('page-main__content--show');
      content.classList.add('page-main__content--close');
    } else {
      content.classList.add('page-main__content--show');
      content.classList.remove('page-main__content--close');
    }    
  };
});

logo.addEventListener('click', function (evt) {
  evt.stopPropagation();
});