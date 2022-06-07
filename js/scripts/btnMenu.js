const btnMobile = document.getElementById('js-btn-mobile');

if (btnMobile) {
  btnMobile.addEventListener('click', () => {
    btnMobile.classList.toggle('is-active');
    document.documentElement.classList.toggle('menu-opened');
  });
}
