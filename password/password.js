let eyeicon= document.getElementById("eyeicon")
let password = document.getElementById("password-input")

function passwordvisible(){
   if (password.type=="password") {
    password.type="Text"
    eyeicon.src="./images/eyeopen.png"
   }
   else{
    password.type="password"
    eyeicon.src="./images/closedeye.png"

   }
}