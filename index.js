var form=  document.querySelector("#email-form");
var emailInput =document.querySelector(".input-email");
var errorMessage =document.querySelector(".error-message");
var errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function(event){
    event.preventDefault();
    //prevent form from submission

     var emailValue= emailInput.value;

//remove all previous errors and message /
     errorMessage.style.display="none"
     emailInput.style.borderColor ="black"
     errorIcon.style.display = "none"

    //to check if email value is valid/
    if (!emailValue || !validateEmail(emailValue)) {
        errorMessage.style.display ="block"; //show the error message
        emailInput.style.borderColor ="red"
        errorIcon.style.display = "inline-block" //show the error icon

    }
    else{
    
        alert("you've successfully submitted your email!")
         emailInput.style.borderColor ="black"
    }
});

function validateEmail(email){
    //simple regex for email  validation.
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//optional :real time error update as the user types
emailInput.addEventListener("input", function(){
     if (validateEmail(emailInput.value)){
        errorMessage.style.display="none"
         emailInput.style.borderColor ="black"
         errorIcon.style.display = "none" 
     };
})