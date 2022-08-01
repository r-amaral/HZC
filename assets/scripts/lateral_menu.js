const menuButton = document.querySelector('.header__menu');
const lateralMenu = document.querySelector('.lateral__menu');
const html = document.documentElement;

menuButton.addEventListener('click', function () {
    lateralMenu.classList.toggle('active__menu');
    html.classList.toggle('lock__menu');
})




