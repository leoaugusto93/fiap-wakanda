//Efeito de transparência no menu ao rolar a página
const nav = document.querySelector("nav");

function stickyNavbar() {
    nav.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);