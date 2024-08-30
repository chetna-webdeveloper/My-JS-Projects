
let toastBox = document.getElementById("toastBox")
let successMsg = ' <i class="fa-solid fa-circle-check " ;"></i> Successfully Submitted'
let errorMsg = ' <i class="fa-solid fa-circle-exclamation fa-flip-horizontal fa-sm" ;"></i> Please , Fix the error'

let invalidMsg = ' <i class="fa-solid fa-triangle-exclamation ";"></i> Invalid msg , Kindly check'




function showToast(msg) {
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if (msg.includes('error')) {
        toast.classList.add("error")
    }
    if (msg.includes('Successfully')) {
        toast.classList.add("success")
    }
    if (msg.includes('Invalid')) {
        toast.classList.add("invalid")
    }
    setTimeout(() => {
        toast.remove()

    }, 5000)
}