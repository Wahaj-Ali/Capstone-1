const mainMenu = document.querySelector('.main-menu');
const hamburgerIcon = document.querySelector('.ham');
const cross = document.querySelector('#cross');

hamburgerIcon.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    hamburgerIcon.classList.toggle('cross');
});