console.log("to-do-list")
const input = document.getElementById("input-box")
const addButton= document.getElementById("add-button")
const toDoList= document.getElementById("list-container")


try {
    function  addTask(){
        if(input.value===""){
            alert("you shold write something before clicking on add button")
        }
        else{
            let li = document.createElement("li")
            li.innerHTML=input.value;
            toDoList.appendChild(li);
            let crossIcon= document.createElement("span")
            crossIcon.innerHTML="\u00d7"
            li.appendChild(crossIcon)
        
        }
        input.value="";
        saveData()
    }
} catch (error) {
    throw error

}
toDoList.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
localStorage.setItem("data",toDoList.innerHTML)
}
function showTask(){
    toDoList.innerHTML=localStorage.getItem("data")
}

showTask()
