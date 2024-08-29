// let inputBox = document.getElementsByClassName("input-box")
// let passwordText = document.getElementById("password")

let strength = document.getElementById("strength")
let password =document.getElementById("password")
let message =document.getElementById("message")

password.addEventListener("input",()=>{
    if(password.value.length>0){
        message.style.display="block"
    }
    else{
        message.style.display="none"
    }
    if(password.value.length<4){
      strength.innerHTML="weak"
      message.style.color="red"
      password.style.borderColor="red"
    }
    if(password.value.length>=4 && password.value.length<8){
        strength.innerHTML="medium"
      message.style.color="yellow"
      password.style.borderColor="yellow"

      }
      if(password.value.length>=8){
        strength.innerHTML="strong"
      message.style.color="green"
      password.style.borderColor="green"


      }

})




