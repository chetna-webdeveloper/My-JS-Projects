let scrollContainer = document.querySelector(".container")
let backward = document.getElementById("backward")
let forward = document.getElementById("forward")

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.style.scrollBehavior="smooth";

    scrollContainer.scrollLeft += evt.deltaY
})

forward.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft += 900;
})

backward.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";

    scrollContainer.scrollLeft -= 900;
})