const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});