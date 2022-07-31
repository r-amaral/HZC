const listItem = document.querySelectorAll('.menu__list--item');
const start = document.querySelectorAll('.topic');
const picos = document.querySelectorAll('.topic--picos');
const featuredVideo = document.querySelector('.featured__video');
const cardVideo = document.querySelectorAll('.video');

for (let i = 0; i < listItem.length; i++) {

    listItem[i].addEventListener('click', () => {

        listItem.forEach(item => {
            item.classList.remove('menu__list--active');
        })

        listItem[i].classList.add('menu__list--active');

        screenSelected();
    })
}

function screenSelected() {
    if (listItem[0].classList.contains('menu__list--active')) {
        start.forEach(item => {
            item.classList.remove('off');
        })

        featuredVideo.classList.remove('off');

        picos.forEach(item => {
            item.classList.add('off');
        })
    }

    if (listItem[1].classList.contains('menu__list--active')) {
        start.forEach(item => {
            item.classList.add('off');
        })

        featuredVideo.classList.add('off');

        cardVideo.forEach(item => {
            item.classList.remove('off');
        })

        picos.forEach(item => {
            item.classList.add('off');
        })
    }

    if (listItem[2].classList.contains('menu__list--active')) {

        start.forEach(item => {
            item.classList.add('off');
        })

        featuredVideo.classList.add('off');

        picos.forEach(item => {
            item.classList.remove('off');
        })
    }
}





