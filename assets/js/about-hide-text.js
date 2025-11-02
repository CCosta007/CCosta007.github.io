//-------------paragraphs to hide----------------------------

//about page text
const genInfoText = document.getElementById("genInfo");
const placementText = document.getElementById("placOv");
const goalsText = document.getElementById("futGoals");

//about page 2 text
const profInText = document.getElementById("profInfP");
const placOvText = document.getElementById("placInP");

//pedagogy page text
const philText = document.getElementById("teachPhil");
const valText = document.getElementById("coreVals");
const behavText = document.getElementById("behavMan");

//----------------buttons------------------------------------

//about page btns
const infoBtn = document.getElementById("genInfoBtn");
const placementBtn = document.getElementById("placOvBtn");
const goalsBtn = document.getElementById("futGoalsBtn");

//about page 2 btns
const profBtn = document.getElementById("profOvBtn");
const placBtn = document.getElementById("PlacInBtn");

//pedagogy btns
const philBtn = document.getElementById("teachPhilBtn");
const valsBtn = document.getElementById("coreValsBtn");
const behavBtn = document.getElementById("behavManBtn");

//resource btns
const bkwdBtn = document.getElementById("leftBtn");
const fwdBtn = document.getElementById("rightBtn");

//start the paragraphs hidden. Put as an if statement in case the buttons don't exist
if(genInfoText && placementText && goalsText){
    genInfoText.style.display = "none";
    placementText.style.display = "none";
    goalsText.style.display = "none";
}
if((profBtn && placBtn)){
    profInText.style.display = "none";
    placOvText.style.display = "none";
}

if((philBtn && valsBtn && behavBtn)){
    philText.style.display = "none";
    valText.style.display = "none";
    behavText.style.display = "none";
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
const btnArray = [
        {btn:infoBtn, text:genInfoText},
        {btn:placementBtn, text:placementText},
        {btn:goalsBtn, text:goalsText},
        {btn:profBtn, text:profInText},
        {btn:placBtn, text:placOvText},
        {btn:philBtn, text:philText},
        {btn:valsBtn, text:valText},
        {btn:behavBtn, text:behavText},
        {btn:bkwdBtn, text:null},
        {btn:fwdBtn, text:null}  
];


/* 
function to update the buttons to dark or light mode. Exported so the dark mode logic file can utilize.
This is an updated version of a previous function that is much cleaner and easier to refactor in future. 
The old function can be found at the end of this document. It was hideous so I updated it to this one
*/
export function updateButtonTheme(){
    const isDark = document.body.classList.contains("dark"); /*will be true if it is in dark mode, false if it isn't */
    
    for(let i=0; i < btnArray.length; i++){
        const theBtn = btnArray[i].btn;
        const theText = btnArray[i].text;
        
        // if the button doesn't exist, skip the iteration
        if (!theBtn){ 
            continue;
        }
        //this will deal with the carousel buttons, as the text will be null
        if(!theText){ 
            if(theBtn === fwdBtn){
                fwdBtn.style.backgroundImage = isDark ? "url(images/right-arrow-dark.png)": "url(images/right-arrow.png)";
            }
            else if(theBtn === bkwdBtn){
                bkwdBtn.style.backgroundImage = isDark ? "url(images/left-arrow-dark.png)": "url(images/left-arrow.png)";
            }
            continue;
        }

        //this will deal with the show/hide buttons 
        if (theText.style.display === "none"){
            theBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            theBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
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
    placBtn.addEventListener("click", () => hideText(placOvText, placBtn));
    updateButtonTheme();
}
if(philBtn){
    philBtn.addEventListener("click", () => hideText(philText, philBtn));
    updateButtonTheme();
}
if(valsBtn){
    valsBtn.addEventListener("click", () => hideText(valText, valsBtn));
    updateButtonTheme();
}
if(behavBtn){
    behavBtn.addEventListener("click", () => hideText(behavText, behavBtn));
    updateButtonTheme();
}
if(fwdBtn){
    updateButtonTheme();
}
if(bkwdBtn){
    updateButtonTheme();
}

//---------------------OLD updateButtonTheme FUNCTION--------------------------------//

/*function to update the buttons to dark or light mode. Exported so the dark mode logic file can utilize.
This function is poor and there would be a cleaner way to implement it (like an array of buttons), 
but this was the best I could come up with and it works */

    /*
    if(profBtn){
        if (profInText.style.display === "none"){
            profBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            profBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(placBtn){
        if (placOvText.style.display === "none"){
            placBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow

        }else{
            placBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(philBtn){
        if (philText.style.display === "none"){
            philBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            philBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(valsBtn){
        if (valText.style.display === "none"){
            valsBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            valsBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(behavBtn){
        if (behavText.style.display === "none"){
            behavBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            behavBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(infoBtn){
        if (genInfoText.style.display === "none"){
            infoBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)"; //will set the show dark arrow if dark theme is active, else it will set light arrow
        }else{
            infoBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; //will set the hide dark arrow if dark theme is active, else it will set hide light arrow
        }
    }
    if(placementBtn){
        if (placementText.style.display === "none"){ //does same as above for placement button
            placementBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)";
        }else{
            placementBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; 
        }
    }
    if(goalsBtn){
        if (goalsText.style.display === "none"){ //does same as above for goals button
            goalsBtn.style.backgroundImage = isDark ? "url(images/show-arrow-dark.png)": "url(images/show-arrow.png)";
        }else{
            goalsBtn.style.backgroundImage = isDark ? "url(images/hide-arrow-dark.png)": "url(images/hide-arrow.png)"; 
        }
    }
    if(fwdBtn){
        fwdBtn.style.backgroundImage = isDark ? "url(images/right-arrow-dark.png)": "url(images/right-arrow.png)";
    }
    if(bkwdBtn){
        bkwdBtn.style.backgroundImage = isDark ? "url(images/left-arrow-dark.png)": "url(images/left-arrow.png)";
    }*/