let notesContainer = document.getElementById("notes-container")
let notes = document.querySelector(".note-web")


function showNotes(){
    notesContainer.innerHTML= localStorage.getItem("notes")
}
showNotes()

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

function showNotesContainer(){
    let inputBox= document.createElement("p")
    inputBox.classList.add("input-box")
    inputBox.setAttribute("contenteditable","true")
    notesContainer.appendChild(inputBox)
    

    let img =document.createElement("img")
    img.src="./images/delete.png"
    // img.classList.add("")
    inputBox.appendChild(img)
}

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".note-web")
        notes.forEach(nt => {
            nt.onkeyup=function(){
                updateStorage()
            }
        });

    }
})
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})