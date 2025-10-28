const slideshowContainer = document.querySelector(".resource-slides"); //get resource-slides class
const theSlides = document.querySelectorAll(".slide"); //get all the slides
const moveLeft = document.getElementById("leftBtn"); 
const moveRight = document.getElementById("rightBtn");

const slideLength = theSlides.length;
let i = 0; //an index we can use to loop through slides. Defined by let so it can be updated dynamically

//this function is my pride and joy. it moves the entire row of slides horizontally left by 100%*i, which moves it to the ith slide. 
// e.g. slide 1 is doesn't need to be moved, so it translates in the X direction by 0. slide 2 needs to be moved 100% to the left to go one slide over, etc.
//i is updated each button click of left or right, and the modulous operation means when it goes outside the length of the slides, i will return to either slide 1 or slide 4
//it translates x using a negative number because it moves hte container left, letting the next slide that is sitting in the wings out to the right come into view
function updateSlide(){
    slideshowContainer.style.transform = `translateX(-${i * 100}%)`;
}

//going left
moveLeft.addEventListener("click", () =>{
    i = ((i-1) + slideLength) % slideLength; //find out what the next slide is using modulo operation. Modulo returns the remainder, which will always be less than the divisor, so it is good for making a list 'circular', i.e. when you get to the start and go past, it will go back to the end
    updateSlide();
});

//going right
moveRight.addEventListener("click", () =>{
    i = ((i+1) + slideLength) % slideLength; //find out what the next slide is using modulo operation. When you get to the end and go past, it will go back to the beginning
    updateSlide();
});

