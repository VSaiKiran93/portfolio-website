function toggleMenu() {
    const menu = document.querySelector("#nav .menu-links");
    const icon = document.querySelector("#nav .hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}