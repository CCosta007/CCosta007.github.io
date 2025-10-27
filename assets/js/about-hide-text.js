//paragraphs to hide
const genInfoText = document.getElementById("genInfo");
const placementText = document.getElementById("placOv");
const goalsText = document.getElementById("futGoals");
const profInText = document.getElementById("profInfP");
const placfOvText = document.getElementById("placInP");

//buttons
const infoBtn = document.getElementById("genInfoBtn");
const placementBtn = document.getElementById("placOvBtn");
const goalsBtn = document.getElementById("futGoalsBtn");
const profBtn = document.getElementById("profOvBtn");
const placBtn = document.getElementById("PlacInBtn");

//start the paragraphs hidden. Put as an if statement in case the buttons don't exist
if(genInfoText && placementText && goalsText){
    genInfoText.style.display = "none";
    placementText.style.display = "none";
    goalsText.style.display = "none";
}
if((profBtn && placBtn)){
    profInText.style.display = "none";
    placfOvText.style.display = "none";
}

//function to hide the text
function hideText(p, b){
    const isDark = document.body.classList.contains("dark"); /*will be true if it is in dark mode, false if it isn't */
    if(p.style.display === "none" && isDark){ //if it enters this block then it will display the text and is in dark mode, so it will change the arrow to the dark hide arrow
        p.style.display = "block"
        b.style.backgroundImage = "url(images/hide-arrow-dark.png)" 
    }else if(p.style.display === "none" && !isDark){ //if it enters this block then it will display the text and is in light mode, so it will change the arrow to the light hide arrow
        p.style.display = "block"
        b.style.backgroundImage = "url(images/hide-arrow.png)" 
    }else if(!(p.style.display === "none") && isDark){ //if it enters this block then it will hide the text and is in dark mode, so it will change the arrow to the dark show arrow
        p.style.display = "none"
        b.style.backgroundImage = "url(images/show-arrow-dark.png)" 
    }else if(!(p.style.display === "none") && !isDark){ //if it enters this block then it will hide the text and is in light mode, so it will change the arrow to the light show arrow
        p.style.display = "none"
        b.style.backgroundImage = "url(images/show-arrow.png)"  
    }
};

//function to update the buttons to dark or light mode. Exported so the dark mode logic file can utilize.
//This function is not great and I think there would be a cleaner way to implement it, but this was the best I could come up with 
export function updateButtonTheme(){
    const isDark = document.body.classList.contains("dark"); /*will be true if it is in dark mode, false if it isn't */
    if(profBtn){
        if (profInText.style.display === "none"){
            profBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            profBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(placBtn){
        if (placfOvText.style.display === "none"){
            placBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow

        }else{
            placBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    else{
        if (genInfoText.style.display === "none"){
            infoBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            infoBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }

        if (placementText.style.display === "none"){ //does same as above for placement button
            placementBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)";
        }else{
            placementBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; 
        }

        if (goalsText.style.display === "none"){ //does same as above for goals button
            goalsBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)";
        }else{
            goalsBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; 
        }
    }

};

//event listeners on the buttons to hide/show text. Put them in if statements in case the buttons don't exist
if(infoBtn){
    infoBtn.addEventListener("click", () => hideText(genInfoText, infoBtn));
    updateButtonTheme();
}

if(placementBtn){
    placementBtn.addEventListener("click", () => hideText(placementText, placementBtn));
    updateButtonTheme();
}
if(goalsBtn){
    goalsBtn.addEventListener("click", () => hideText(goalsText, goalsBtn));
    updateButtonTheme();
}
if(profBtn){
    profBtn.addEventListener("click", () => hideText(profInText, profBtn));
    updateButtonTheme();
}
if(placBtn){
    placBtn.addEventListener("click", () => hideText(placfOvText, placBtn));
    updateButtonTheme();
}
