const menu= document.getElementById("menu")
const list =document.getElementById("list")
const options=document.getElementsByClassName("options")
const selectText =document.getElementById("select-text")

menu.onclick= function(){
    list.classList.toggle("hide")
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML=this.innerHTML
    list.classList.toggle("hide")
    

    }
}