const mainMenu = document.querySelector('.main-menu');
const hamburgerIcon = document.querySelector('.ham');

hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
  hamburgerIcon.classList.toggle('cross');
});