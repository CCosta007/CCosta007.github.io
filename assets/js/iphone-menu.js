const menuIcon = document.getElementById("phoneMenu");
const menuLinks = document.getElementById("navLinks");
menuIcon.addEventListener("click", () => {
    if(menuLinks.style.display === "none"){
        menuLinks.style.display = "flex"; //opens the menu
    }else{
        menuLinks.style.display = "none"; //so it can close
    }
});

