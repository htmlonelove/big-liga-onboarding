const loader = document.querySelector('.loader');

window.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    loader.classList.add('loader--animation');
  }
});

window.addEventListener('click', function () {
  loader.classList.add('loader--animation');
});
