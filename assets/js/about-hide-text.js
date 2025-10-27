//paragraphs to hide
const genInfoText = document.getElementById("genInfo");
const placementText = document.getElementById("placOv");
const goalsText = document.getElementById("futGoals");

//buttons
const infoBtn = document.getElementById("genInfoBtn");
const placementBtn = document.getElementById("placOvBtn");
const goalsBtn = document.getElementById("futGoalsBtn");

//start the paragraphs hidden
genInfoText.style.display = "none";
placementText.style.display = "none";
goalsText.style.display = "none";

//function to hide the text
function hideText(p, b){
    const isDark = document.body.classList.contains("dark"); /*will be true if it is in dark mode, false if it isn't */
    
    if(p.style.display === "none" && isDark){
        p.style.display = "block"
        b.style.backgroundImage = "url(images/hide-arrow-dark.png)" 
    }else if(p.style.display === "none" && !isDark){
        p.style.display = "block"
        b.style.backgroundImage = "url(images/hide-arrow.png)" 
    }else if(!(p.style.display === "none") && isDark){
        p.style.display = "none"
        b.style.backgroundImage = "url(images/show-arrow-dark.png)" 
    }else if(!(p.style.display === "none") && !isDark){
        p.style.display = "none"
        b.style.backgroundImage = "url(images/show-arrow.png)"  
    }
}

//event listeners on the buttons to hide/show text
infoBtn.addEventListener("click", () => hideText(genInfoText, infoBtn));
placementBtn.addEventListener("click", () => hideText(placementText, placementBtn));
goalsBtn.addEventListener("click", () => hideText(goalsText, goalsBtn));