const menuIcon = document.getElementById("phoneMenu");
const menuLinks = document.getElementById("navLinks");
menuIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
});

