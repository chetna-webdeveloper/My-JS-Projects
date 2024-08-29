const productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn")


btn[0].onclick=function(){
    productImg.src="./images/pinkTop.webp"
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick=function(){
    productImg.src="./images/greenTop.webp"
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btn[2].onclick=function(){
    productImg.src="./images/blackTop.webp"
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}