const menuButton = document.querySelector('.header__menu');
const lateralMenu = document.querySelector('.lateral__menu')

menuButton.addEventListener('click', function () {
    lateralMenu.classList.toggle('active__menu')
})