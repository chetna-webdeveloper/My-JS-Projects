let nameError= document.getElementById("name-error")
let numberError= document.getElementById("number-error")
let emailError= document.getElementById("email-error")
let submitError= document.getElementById("submit-error")
let messageError= document.getElementById("message-error")

function validateName(){
    let name= document.getElementById("name").value

    if(name.length==0){
        nameError.innerHTML="Name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Enter a valid name"
        return false
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true
}


function validateNumber(){
    let number= document.getElementById("number").value

    if(number.length==0){
        numberError.innerHTML="Number is required"
        return false
    }
    if(number.length<10){
        numberError.innerHTML=" Full Number is required"
        return false
    }
    if(!number.match(/^[0-9]{10}$/)){
        numberError.innerHTML="Enter a valid number"
        return false
    }
    numberError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true
}
function validateEmail(){
    let email=document.getElementById("email").value;
    if(email.length==0){
        emailError.innerHTML="Enter email id"
        return false
    }
    if(!email.match(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm)){
         emailError.innerHTML="Enter valid email id"
         return false
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true
}
function validateMessage(){
    let message = document.getElementById("message").value
    let required = 30
    let left = required - message.length
    if(message.length==0){
        messageError.innerHTML="Enter message"
        return false
    }
    if(left>0 ){
        messageError.innerHTML= left + ' more character are left'
        return false
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true
}
function validateSubmit(){
 if (!validateName()|| !validateNumber()||!validateEmail()||!validateMessage()) {
    submitError.style.display="block"
    submitError.innerHTML='kindly fix error to submit'
setTimeout(() => {
    submitError.style.display="none"
    
}, 3000);
    return false 
 }
}