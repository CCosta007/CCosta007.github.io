document.getElementById("theSubmitBtn").addEventListener("click", (e) => {
    e.preventDefault(); //so the default form submission doesn't occur
    checkForErrors();
    
});

//close the success pop up message if the user hits the close button
document.getElementById("closeSuccessBtn").addEventListener("click", () => {
    document.getElementById("successMessage").style.display = "none";
});

//close the error pop up message if the user hits the close button
document.getElementById("closeErrorBtn").addEventListener("click", () => {
    document.getElementById("errorMessage").style.display = "none";
});

function checkForErrors(){
    //options from the form
    const name = document.getElementById("demo-name").value.trim();
    const email = document.getElementById("demo-email").value.trim();
    const reason = document.getElementById("demo-category").value;
    const theMessage = document.getElementById("demo-message").value.trim();
    const successPopUp = document.getElementById("successMessage");
    const errorPopUp = document.getElementById("errorMessage");
    const theForm = document.querySelector("#full-form form");
    let errors = [];

    if(!name){
        errors = [...errors, "A name is required"];
    }

    if(!reason){
        errors = [...errors, "A reason for contact is required"];
    }

    if(!theMessage){
        errors = [...errors, "A message is required"];
    }

    if(!email){
        errors = [...errors, "An email address is reqired"];
    }else if(!emailTest(email)){
        errors = [...errors, "A valid email address is required"];
    }

    if(errors.length > 0){
        document.querySelector("#full-form form").reset(); // this will reset the form    
        let errorMessages = document.getElementById("errorText");
        errorMessages.textContent = ""; //clears error messages from perevious attempts
        for(const e of errors){ // loop through the error list
            const li = document.createElement("li"); //create a list element 
            li.textContent = e; //let the text content for the list element be the error message 
            errorMessages.appendChild(li); // put the list element in the error ul so the all display in the pop-up on seperate lines
        }
        errorPopUp.style.display =  "flex"; //display the error pop up 
    }else{ //success     
        theForm.submit();
        document.querySelector("#full-form form").reset(); // this will reset the form    
        successPopUp.style.display =  "flex"; //display the success pop up
    }
};

function emailTest(emailAdd){
    /*
    email Regular expression explained:
    [a-zA-Z0-9._+-]: allows letters (both lower and upper), numbers, full stops,underscores, %,plus and minus, and hyphen
    @ is for the @ symbol in the email
    [a-zA-Z0-9.-] allows lower and upper letters, numbers, fullstops, and hypens
    [a-zA-Z] allows lower and upper letters for last part of email
    */
    const emailRegEx = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;   
    if (emailRegEx.test(emailAdd)){
        return true;
    }
    else{
        return false;
    }
};

