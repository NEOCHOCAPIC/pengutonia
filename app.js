// app.js

const hamburguerMenu = document.querySelector('.hamburguer-menu');
const navBarList = document.querySelector('.nav-bar-list');
const body = document.body;

hamburguerMenu.addEventListener('click', () => {
    navBarList.classList.toggle('show');
    body.classList.toggle('show-menu');
});
