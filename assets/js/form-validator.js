document.getElementById("theSubmitBtn").addEventListener("click", (e) => {
    e.preventDefault(); //so the default form submission doesn't occur

    checkForErrors();
});

//close the success pop up message if the user hits the close button
document.getElementById("closeSuccessBtn").addEventListener("click", () => {
    document.getElementById("successMessage").style.display = "none";
});

function checkForErrors(){
    //options from the form
    const name = document.getElementById("demo-name").value.trim();
    const email = document.getElementById("demo-email").value.trim();
    const reason = document.getElementById("demo-category").value;
    const theMessage = document.getElementById("demo-message").value.trim();
    const successPopUp = document.getElementById("successMessage");

    let errors = [];

    if(!name){
        errors = [...errors, "A name is required"];
    }

    if(!reason){
        errors = [...errors, "Please select a reason for contact"];
    }

    if(!theMessage){
        errors = [...errors, "Please enter a message"];
    }

    if(!email){
        errors = [...errors, "please enter an email"]
    }else if (email){
        const checkEmail = emailTest(email);

    if (!checkEmail){
        errors = [...errors, "please enter a valid email address"];
    }
    else{
        //do fail or success 
        successPopUp.style.display =  "block";
        document.querySelector("#full-form form").reset(); // this will reset the form
    }
    }
};

function emailTest(){
    return true;
}

