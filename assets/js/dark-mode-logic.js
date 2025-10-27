import {updateButtonTheme} from "./about-hide-text.js";

const theButton = document.getElementById("darkModeBtn");
const body = document.body;

const infoBtn = document.getElementById("genInfoBtn");
const placementBtn = document.getElementById("placOvBtn");
const goalsBtn = document.getElementById("futGoalsBtn");

if (localStorage.getItem("theme") === "dark"){ /*This will check if the theme has been clicked before from a prev visit */
    body.classList.add("dark"); /*if it is dark, then the CSS class dark will be activated for the styling*/
    theButton.textContent = "Enable Light mode"; /*change the button text to light mode*/
}

theButton.addEventListener('click', () => {
    body.classList.toggle("dark"); /*uses toggle method to add, or remove the dark class with each click */
    const isDark = body.classList.contains("dark"); /*checks whether dark is in the body. True if it is, false if it is not*/
    if(isDark){
        theButton.textContent = "Enable Light Mode"; /*If isDark is true, page is currently in dark mode and the button needs to disply light mode */
    }else{
        theButton.textContent = "Enable Dark Mode";/*If isDark is false, page is currently in light mode and the button needs to disply dark mode */
    }
    localStorage.setItem("theme", isDark ? "dark" : "light"); /*will save the choice of theme in local storage*/
    updateButtonTheme(); //ensures arrows are set to the correct theme
});

updateButtonTheme(); //ensures arrows are set to the correct theme


