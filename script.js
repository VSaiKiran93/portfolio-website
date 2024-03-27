function toggleMenu() {
    const menu = document.querySelector("#nav .menu-links");
    const icon = document.querySelector("#nav .hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/*
 window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        document.getElementById("downArrow").dataset.arrow = "down";
    } else {
        document.getElementById("downArrow").dataset.arrow = "";
    }
 });
*/
