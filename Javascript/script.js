const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const saludarButton = document.getElementById('saludarButton');
const contenido = document.querySelector('.contenido');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');    
});

function showButton() {
    saludarButton.classList.remove('hidden');
}